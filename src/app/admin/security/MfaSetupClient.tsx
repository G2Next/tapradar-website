"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { QRCodeSVG } from "qrcode.react";
import { createClient } from "@/lib/supabase/client";

export function MfaSetupClient() {
  const router=useRouter();
  const [factorId,setFactorId]=useState("");
  const [uri,setUri]=useState("");
  const [secret,setSecret]=useState("");
  const [code,setCode]=useState("");
  const [message,setMessage]=useState("");
  const [loading,setLoading]=useState(false);

  async function begin(){setLoading(true);setMessage("");const{data,error}=await createClient().auth.mfa.enroll({factorType:"totp",friendlyName:"TapRadar Admin"});setLoading(false);if(error||!data?.totp){setMessage("Die Einrichtung konnte nicht gestartet werden. Bitte erneut versuchen.");return}setFactorId(data.id);setUri(data.totp.uri);setSecret(data.totp.secret)}
  async function verify(event:React.FormEvent){event.preventDefault();if(!factorId||!/^[0-9]{6}$/.test(code))return;setLoading(true);setMessage("");const supabase=createClient();const{error}=await supabase.auth.mfa.challengeAndVerify({factorId,code});if(error){setLoading(false);setMessage("Der Code ist ungültig oder abgelaufen.");return}const response=await fetch("/api/admin/mfa-event",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({event:"enrolled",factorId})});setLoading(false);if(!response.ok){setMessage("2FA ist aktiv, aber das Sicherheitsprotokoll konnte nicht gespeichert werden. Bitte erneut bestätigen.");return}router.replace("/admin/security?saved=enrolled");router.refresh()}

  if(!factorId)return <button onClick={begin} disabled={loading} className="mt-7 rounded-2xl bg-purple-300 px-6 py-4 font-black text-slate-950 disabled:opacity-50">{loading?"Wird vorbereitet …":"Authenticator einrichten"}</button>;
  return <div className="mt-7 grid gap-6"><div className="w-fit rounded-3xl bg-white p-5"><QRCodeSVG value={uri} size={220} level="M"/></div><div><p className="font-black">QR-Code mit Google Authenticator, Microsoft Authenticator oder einer kompatiblen App scannen.</p><details className="mt-3 text-sm text-slate-400"><summary className="cursor-pointer font-bold text-cyan-200">Schlüssel manuell eingeben</summary><code className="mt-2 block break-all rounded-xl bg-slate-950 p-3 text-slate-200">{secret}</code></details></div><form onSubmit={verify} className="max-w-sm"><label className="grid gap-2 text-sm font-black">Sechsstelliger Code<input value={code} onChange={event=>setCode(event.target.value.replace(/\D/g,"").slice(0,6))} inputMode="numeric" autoComplete="one-time-code" pattern="[0-9]{6}" required className="rounded-2xl border border-white/15 bg-slate-900 px-4 py-4 text-center text-2xl tracking-[.3em]"/></label><button disabled={loading||code.length!==6} className="mt-4 w-full rounded-2xl bg-cyan-300 px-5 py-4 font-black text-slate-950 disabled:opacity-50">{loading?"Wird geprüft …":"2FA aktivieren"}</button></form>{message?<p role="alert" className="rounded-2xl bg-red-300/10 p-4 text-red-100">{message}</p>:null}</div>;
}
