import { NextResponse } from "next/server";
import { requirePlatformAdmin } from "@/lib/admin";
import { recordAdminAudit } from "@/lib/admin-audit";

export async function POST(request:Request){let body:{event?:unknown;factorId?:unknown};try{body=await request.json()}catch{return NextResponse.json({error:"invalid"},{status:400})}const event=body.event==="enrolled"?"enrolled":body.event==="verified"?"verified":null;const factorId=typeof body.factorId==="string"&&/^[0-9a-f-]{36}$/i.test(body.factorId)?body.factorId:null;if(!event||!factorId)return NextResponse.json({error:"invalid"},{status:400});const{supabase,user}=await requirePlatformAdmin();await recordAdminAudit(supabase,{actorUserId:user.id,action:`admin.security.mfa.${event}`,entityType:"mfa_factor",entityId:factorId});return NextResponse.json({ok:true},{headers:{"Cache-Control":"no-store"}})}
