import { NextRequest, NextResponse } from "next/server";
import { requirePlatformAdmin } from "@/lib/admin";
import { createAdminClient } from "@/lib/supabase/admin";

export async function GET(request: NextRequest) {
  await requirePlatformAdmin("audit.view");
  const db = createAdminClient();
  const search = request.nextUrl.searchParams;
  let query = db.from("audit_logs").select("id,created_at,actor_user_id,organization_id,action,entity_type,entity_id,metadata").order("created_at", { ascending: false }).limit(5000);
  const q = (search.get("q")??"").replace(/[(),.%]/g," ").trim().slice(0,100);
  const action = (search.get("action")??"").replace(/[^a-z0-9_.-]/gi,"").slice(0,80);
  const entity = (search.get("entity")??"").replace(/[^a-z0-9_.-]/gi,"").slice(0,80);
  if (q) query=query.or(`action.ilike.%${q}%,entity_id.ilike.%${q}%`);
  if (action) query=query.ilike("action",`${action}%`);
  if (entity) query=query.eq("entity_type",entity);
  const from=search.get("from"),to=search.get("to");
  if(from&&/^\d{4}-\d{2}-\d{2}$/.test(from))query=query.gte("created_at",`${from}T00:00:00.000Z`);
  if(to&&/^\d{4}-\d{2}-\d{2}$/.test(to))query=query.lte("created_at",`${to}T23:59:59.999Z`);
  const { data, error } = await query;
  if(error)return NextResponse.json({error:"Audit-Log konnte nicht exportiert werden."},{status:500});
  const header=["id","created_at","actor_user_id","organization_id","action","entity_type","entity_id","metadata"];
  const csv=[header,...(data??[]).map(row=>header.map(key=>csvCell(key==="metadata"?JSON.stringify(row.metadata??{}):row[key as keyof typeof row])))].map(row=>row.join(",")).join("\n");
  return new NextResponse(`\uFEFF${csv}`,{headers:{"Content-Type":"text/csv; charset=utf-8","Content-Disposition":`attachment; filename="tapradar-audit-${new Date().toISOString().slice(0,10)}.csv"`,"Cache-Control":"private, no-store"}});
}

function csvCell(value:unknown){let text=String(value??"");if(/^[=+\-@\t\r]/.test(text))text=`'${text}`;return `"${text.replaceAll('"','""')}"`}
