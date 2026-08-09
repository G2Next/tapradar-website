import { redirect } from "next/navigation";

export default function SignInAliasPage() {
  redirect("/login?mode=signin&next=/dashboard");
}
