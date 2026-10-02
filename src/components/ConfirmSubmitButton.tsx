"use client";

import { useFormStatus } from "react-dom";

export function ConfirmSubmitButton({label,confirmation,className}:{label:string;confirmation:string;className:string}) {
  const { pending } = useFormStatus();
  return <button disabled={pending} onClick={(event)=>{if(!window.confirm(confirmation))event.preventDefault();}} className={`${className} disabled:cursor-wait disabled:opacity-50`}>{pending?"Wird gespeichert …":label}</button>;
}
