import { switchDashboardContext } from "@/app/dashboard/context/actions";

type Membership = { organization_id: string; organizations: { name?: string } | { name?: string }[] | null };

export function DashboardContextSwitcher({ memberships, organizationId, locations, locationId }: {
  memberships: Membership[];
  organizationId: string;
  locations: { id: string; name: string }[];
  locationId: string | null;
}) {
  return (
    <form action={switchDashboardContext} className="flex flex-wrap gap-3 rounded-2xl border border-white/10 bg-white/[0.06] p-3">
      <label className="grid gap-1 text-[10px] font-black uppercase tracking-wide text-slate-400">Unternehmen
        <select name="organization_id" defaultValue={organizationId} className="min-w-44 rounded-xl bg-[#102235] px-3 py-2 text-sm normal-case text-white">
          {memberships.map((membership) => {
            const organization = Array.isArray(membership.organizations) ? membership.organizations[0] : membership.organizations;
            return <option key={membership.organization_id} value={membership.organization_id}>{organization?.name ?? "Unternehmen"}</option>;
          })}
        </select>
      </label>
      <label className="grid gap-1 text-[10px] font-black uppercase tracking-wide text-slate-400">Filiale
        <select name="location_id" defaultValue={locationId ?? ""} className="min-w-44 rounded-xl bg-[#102235] px-3 py-2 text-sm normal-case text-white">
          <option value="">Keine Filiale</option>
          {locations.map((location) => <option key={location.id} value={location.id}>{location.name}</option>)}
        </select>
      </label>
      <button className="self-end rounded-xl bg-cyan-300 px-4 py-2 font-black text-slate-950">Wechseln</button>
    </form>
  );
}
