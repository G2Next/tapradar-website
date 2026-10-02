import { NextResponse } from "next/server";
import { requirePlatformAdminSession } from "@/lib/admin";
import { encryptIntegrationSecret } from "@/lib/integration-secrets";
import { createAdminClient } from "@/lib/supabase/admin";
import { generateTotpSecret,totpUri } from "@/lib/totp";

export async function POST(){const{user,mfaEnrolled}=await requirePlatformAdminSession();if(mfaEnrolled)return NextResponse.json({error:"already-enrolled"},{status:409});const secret=generateTotpSecret();const service=createAdminClient();const{error}=await service.from("admin_mfa_factors").upsert({user_id:user.id,secret_ciphertext:encryptIntegrationSecret(secret),verified_at:null,last_used_step:null,updated_at:new Date().toISOString()},{onConflict:"user_id"});if(error)return NextResponse.json({error:"save"},{status:500});return NextResponse.json({secret,uri:totpUri(secret,user.email??"Administrator")},{headers:{"Cache-Control":"no-store"}})}
