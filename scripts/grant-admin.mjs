import { createClient } from "@supabase/supabase-js";

const email = process.argv[2];
const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
if (!email || !url || !key) {
  console.error("Usage: NEXT_PUBLIC_SUPABASE_URL=... SUPABASE_SERVICE_ROLE_KEY=... npm run admin:grant -- admin@example.com");
  process.exit(1);
}
const supabase = createClient(url, key, { auth: { persistSession: false, autoRefreshToken: false } });
const { data, error } = await supabase.auth.admin.listUsers({ perPage: 1000 });
if (error) throw error;
const user = data.users.find((candidate) => candidate.email?.toLowerCase() === email.toLowerCase());
if (!user) throw new Error(`No Supabase user found for ${email}`);
const result = await supabase.from("platform_admins").upsert({ user_id: user.id, role: "super_admin", is_active: true });
if (result.error) throw result.error;
console.log(`Granted super_admin to ${email}`);
