import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

export async function GET(request:Request){const url=new URL(request.url);const reason=url.searchParams.get("reason");const supabase=await createClient();await supabase.auth.signOut({scope:"local"});const target=new URL("/login",url.origin);target.searchParams.set("error",reason==="idle_timeout"||reason==="absolute_timeout"?"admin-session-expired":"admin-session-unavailable");target.searchParams.set("next","/admin");return NextResponse.redirect(target,303)}
