import { OfferManagementPage } from "@/app/dashboard/offers/OfferManagementPage";

type SearchParams = Promise<{ saved?: string; error?: string }>;

export default function ActionsPage({ searchParams }: { searchParams: SearchParams }) {
  return <OfferManagementPage searchParams={searchParams} type="aktion" />;
}
