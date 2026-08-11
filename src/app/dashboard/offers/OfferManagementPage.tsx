import Link from "next/link";
import { redirect } from "next/navigation";
import { getDashboardContext } from "@/lib/dashboard";
import { OfferForm, type EditableOffer } from "./OfferForm";

type SearchParams = Promise<{ saved?: string; error?: string }>;
type OfferType = "aktion" | "gutschein";
type Asset = { storage_path: string; mime_type: string; alt_text: string | null };
type Offer = EditableOffer & { organization_assets: Asset | Asset[] | null };

const pageConfig = {
  aktion: {
    route: "/dashboard/actions",
    newRoute: "/dashboard/actions/new",
    badge: "Kunden-App Aktionen",
    title: "Aktionen",
    intro: "Informiere Kundinnen und Kunden über zeitlich begrenzte Kampagnen, Neuigkeiten und besondere Angebote.",
    newCta: "Aktion erstellen →",
    emptyTitle: "Noch keine Aktion",
    emptyText: "Erstelle deine erste Aktion für die Kunden-App.",
    icon: "🔥",
  },
  gutschein: {
    route: "/dashboard/vouchers",
    newRoute: "/dashboard/vouchers/new",
    badge: "Kunden-App Gutscheine",
    title: "Gutscheine",
    intro: "Erstelle Gutscheine mit festem Euro- oder Prozentwert, Kassencode und einer Live-Vorschau.",
    newCta: "Gutschein erstellen →",
    emptyTitle: "Noch kein Gutschein",
    emptyText: "Gestalte deinen ersten Gutschein für die Kunden-App.",
    icon: "🎟️",
  },
} as const;

export async function OfferManagementPage({ searchParams, type }: { searchParams: SearchParams; type: OfferType }) {
  const params = await searchParams;
  const config = pageConfig[type];
  const { supabase, user, organizationId, locations } = await getDashboardContext();
  if (!user) redirect(`/login?next=${config.route}`);
  if (!organizationId) redirect("/dashboard/onboarding");

  const [{ data }, { data: organization }] = await Promise.all([
    supabase
      .from("offers")
      .select("id,title,description,offer_type,discount_type,discount_value,minimum_purchase_amount,redemption_code,conditions,starts_at,ends_at,is_active,location_id,organization_assets!offers_media_asset_id_fkey(storage_path,mime_type,alt_text)")
      .eq("organization_id", organizationId)
      .eq("offer_type", type)
      .order("created_at", { ascending: false }),
    supabase.from("organizations").select("name").eq("id", organizationId).single(),
  ]);
  const offers = (data ?? []) as Offer[];
  const isVoucher = type === "gutschein";

  return <main className={`min-h-screen px-5 py-16 text-white sm:px-8 ${isVoucher ? "bg-[radial-gradient(circle_at_top_right,#164e63_0%,#082032_34%,#020617_100%)]" : "bg-[radial-gradient(circle_at_top_right,#7c2d12_0%,#082032_34%,#020617_100%)]"}`}>
    <section className="mx-auto max-w-6xl">
      <Link href="/dashboard" className={`font-black ${isVoucher ? "text-cyan-200" : "text-orange-200"}`}>← Zurück zum Dashboard</Link>
      <span className={`mt-6 inline-flex rounded-full border px-4 py-2 text-sm font-black ${isVoucher ? "border-cyan-300/35 bg-cyan-300/10 text-cyan-200" : "border-orange-300/35 bg-orange-300/10 text-orange-200"}`}>{config.icon} {config.badge}</span>
      <div className="mt-5 flex flex-wrap items-end justify-between gap-6">
        <div><h1 className="text-5xl font-black">{config.title}</h1><p className="mt-4 max-w-3xl text-lg leading-8 text-slate-300">{config.intro}</p></div>
        <Link href={config.newRoute} className={`rounded-2xl px-5 py-4 font-black text-slate-950 transition hover:-translate-y-0.5 ${isVoucher ? "bg-cyan-300" : "bg-orange-300"}`}>{config.newCta}</Link>
      </div>
      {params.saved ? <p className="mt-7 rounded-2xl bg-emerald-300/10 p-4 text-emerald-100">{isVoucher ? "Gutschein" : "Aktion"} gespeichert.</p> : null}
      {params.error ? <p className="mt-7 rounded-2xl bg-red-300/10 p-4 text-red-100">Speichern nicht möglich. Bitte prüfe Pflichtfelder, Zeitraum und Datei.</p> : null}
      <h2 className="mt-10 text-3xl font-black">Bestehende {config.title}</h2>
      <div className="mt-5 grid content-start gap-4">
        {offers.map((offer) => {
          const asset = Array.isArray(offer.organization_assets) ? offer.organization_assets[0] : offer.organization_assets;
          const mediaUrl = asset ? `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/business-media/${asset.storage_path}` : null;
          return <details key={offer.id} className="group rounded-[24px] border border-white/10 bg-white/[0.07]">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5">
              <div><div className="flex items-center gap-3"><span className={`rounded-full bg-white/[0.08] px-3 py-2 text-sm font-black ${isVoucher ? "text-cyan-200" : "text-orange-200"}`}>{config.icon} {isVoucher ? "Gutschein" : "Aktion"}</span><span className={offer.is_active ? "text-sm font-black text-emerald-200" : "text-sm font-black text-slate-400"}>{offer.is_active ? "Aktiv" : "Inaktiv"}</span></div><h3 className="mt-3 text-xl font-black">{offer.title}</h3>{isVoucher ? <p className="mt-1 text-sm text-slate-300">{offer.discount_type === "percentage" ? `${offer.discount_value} % Rabatt` : `${offer.discount_value?.toFixed(2).replace(".", ",")} € Gutschein`} · Code {offer.redemption_code}</p> : null}</div>
              <span className={`text-sm font-black group-open:hidden ${isVoucher ? "text-cyan-300" : "text-orange-200"}`}>Bearbeiten ↓</span><span className={`hidden text-sm font-black group-open:inline ${isVoucher ? "text-cyan-300" : "text-orange-200"}`}>Minimieren ↑</span>
            </summary>
            <OfferForm offer={offer} locations={locations} mediaUrl={mediaUrl} fixedType={type} showVoucherPreview={isVoucher} previewBusinessName={organization?.name ?? "Firmenname"} className="border-t border-white/10 p-5" />
          </details>;
        })}
        {offers.length === 0 ? <div className="rounded-[28px] border border-white/10 bg-white/[0.07] p-8"><h3 className="text-2xl font-black">{config.emptyTitle}</h3><p className="mt-3 text-slate-300">{config.emptyText}</p><Link href={config.newRoute} className={`mt-5 inline-flex font-black ${isVoucher ? "text-cyan-200" : "text-orange-200"}`}>{config.newCta}</Link></div> : null}
      </div>
    </section>
  </main>;
}
