import { OfferManagementPage } from "@/app/dashboard/offers/OfferManagementPage";

type SearchParams = Promise<{ saved?: string; error?: string }>;

export default function VouchersPage({ searchParams }: { searchParams: SearchParams }) {
  return <OfferManagementPage searchParams={searchParams} type="gutschein" />;
}
