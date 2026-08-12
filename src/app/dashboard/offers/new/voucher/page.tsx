import { redirect } from "next/navigation";

export default function LegacyNewVoucherPage() {
  redirect("/dashboard/vouchers/new");
}
