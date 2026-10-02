"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { safeAdminDestination } from "@/lib/admin-security";

export function MfaVerifyClient({factorId,next="/admin"}:{factorId:string;next?:string}){
  const router=useRouter();const[code,setCode]=useState("");const[message,setMessage]=useState("");const[loading,setLoading]=useState(false);
  async function verify(event:React.FormEvent){event.preventDefault();if(!/^[0-9]{6}$/.test(code))return;setLoading(true);setMessage("");const{error}=await createClient().auth.mfa.challengeAndVerify({factorId,code});if(error){setLoading(false);setMessage("Der Code ist ungültig oder abgelaufen.");return}const response=await fetch("/api/admin/mfa-event",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({event:"verified",factorId})});setLoading(false);if(!response.ok){setMessage("Die Anmeldung konnte nicht abgeschlossen werden. Bitte erneut versuchen.");return}router.replace(safeAdminDestination(next));router.refresh()}
  return <form onSubmit={verify} className="mt-7 max-w-sm"><label className="grid gap-2 text-sm font-black">Code aus der Authenticator-App<input autoFocus value={code} onChange={event=>setCode(event.target.value.replace(/\D/g,"").slice(0,6))} inputMode="numeric" autoComplete="one-time-code" pattern="[0-9]{6}" required className="rounded-2xl border border-white/15 bg-slate-900 px-4 py-4 text-center text-2xl tracking-[.3em]"/></label><button disabled={loading||code.length!==6} className="mt-4 w-full rounded-2xl bg-cyan-300 px-5 py-4 font-black text-slate-950 disabled:opacity-50">{loading?"Wird geprüft …":"Sicher anmelden"}</button>{message?<p role="alert" className="mt-4 rounded-2xl bg-red-300/10 p-4 text-red-100">{message}</p>:null}</form>;
}
