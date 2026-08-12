import { redirect } from "next/navigation";

export default function LegacyNewActionPage() {
  redirect("/dashboard/actions/new");
}
