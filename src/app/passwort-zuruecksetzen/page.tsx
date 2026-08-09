"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export default function UpdatePasswordPage() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [confirmation, setConfirmation] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage("");
    if (password.length < 8) {
      setMessage("Das Passwort muss mindestens 8 Zeichen lang sein.");
      return;
    }
    if (password !== confirmation) {
      setMessage("Die Passwörter stimmen nicht überein.");
      return;
    }

    setIsLoading(true);
    const supabase = createClient();
    const { data: auth } = await supabase.auth.getUser();
    if (!auth.user) {
      setMessage("Der Link ist ungültig oder abgelaufen. Bitte fordere einen neuen Link an.");
      setIsLoading(false);
      return;
    }
    const { error } = await supabase.auth.updateUser({ password });
    if (error) {
      setMessage("Das Passwort konnte nicht geändert werden. Bitte fordere einen neuen Link an.");
      setIsLoading(false);
      return;
    }
    await supabase.auth.signOut();
    router.replace("/login?mode=signin&password=updated");
    router.refresh();
  }

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top_right,#0b4f63_0%,#061827_35%,#020617_100%)] px-5 py-20 text-white sm:px-8">
      <section className="mx-auto max-w-md rounded-[28px] border border-white/10 bg-white/[0.07] p-8 shadow-2xl shadow-black/20">
        <h1 className="text-4xl font-black">Neues Passwort</h1>
        <p className="mt-3 leading-7 text-slate-300">Lege ein neues Passwort mit mindestens acht Zeichen fest.</p>
        <form className="mt-8 grid gap-5" onSubmit={handleSubmit}>
          <PasswordField label="Neues Passwort" value={password} onChange={setPassword} />
          <PasswordField label="Passwort wiederholen" value={confirmation} onChange={setConfirmation} />
          <button disabled={isLoading} className="rounded-2xl bg-gradient-to-r from-cyan-300 to-blue-500 px-5 py-4 font-black text-slate-950 disabled:opacity-60">
            {isLoading ? "Bitte warten..." : "Passwort speichern"}
          </button>
        </form>
        {message ? <p className="mt-5 rounded-2xl border border-white/10 bg-white/[0.06] p-4 text-sm leading-6 text-slate-200">{message}</p> : null}
      </section>
    </main>
  );
}

function PasswordField({ label, value, onChange }: { label: string; value: string; onChange: (value: string) => void }) {
  return <label className="grid gap-2 text-xs font-black uppercase tracking-wide text-slate-300">{label}<input type="password" required minLength={8} value={value} onChange={(event) => onChange(event.target.value)} autoComplete="new-password" className="rounded-2xl border border-white/15 bg-white/[0.06] px-4 py-3 text-base font-normal normal-case tracking-normal text-white outline-none focus:border-cyan-300" /></label>;
}
