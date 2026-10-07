"use client";
import { useFormStatus } from "react-dom";

export function AdminDecisionButton({label,tone="default",confirmation}:{label:string;tone?:"default"|"danger"|"warning";confirmation?:string}) {
  const{pending}=useFormStatus();
  const style=tone==="danger"?"bg-red-300/15 text-red-100 hover:bg-red-300/25":tone==="warning"?"bg-amber-300/15 text-amber-100 hover:bg-amber-300/25":"bg-cyan-300/15 text-cyan-100 hover:bg-cyan-300/25";
  return <button disabled={pending} onClick={(event)=>{if(confirmation&&!window.confirm(confirmation))event.preventDefault();}} className={`rounded-xl px-4 py-2 text-xs font-black transition disabled:cursor-wait disabled:opacity-50 ${style}`}>{pending?"Wird gespeichert …":label}</button>;
}
