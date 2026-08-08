import { createClient } from "@supabase/supabase-js";

const url=process.env.NEXT_PUBLIC_SUPABASE_URL;
const anonKey=process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const serviceKey=process.env.SUPABASE_SERVICE_ROLE_KEY;
if(!url?.includes("127.0.0.1")||!anonKey||!serviceKey)throw new Error("This seed is allowed only for local Supabase.");
const admin=createClient(url,serviceKey,{auth:{persistSession:false,autoRefreshToken:false}});
const users=(await admin.auth.admin.listUsers({perPage:1000})).data.users;
async function ensureUser(email,password){
  const existing=users.find(user=>user.email===email);
  if(existing)return existing;
  const{data,error}=await admin.auth.admin.createUser({email,password,email_confirm:true});
  if(error)throw error;return data.user;
}

const adminEmail="admin@tapradar.test";
const adminPassword="TapRadar-Admin-2026!";
const adminUser=await ensureUser(adminEmail,adminPassword);
const adminGrant=await admin.from("platform_admins").upsert({user_id:adminUser.id,role:"super_admin",is_active:true});
if(adminGrant.error)throw adminGrant.error;
await admin.from("organization_members").delete().eq("user_id",adminUser.id);

const businessEmail="demo-business@tapradar.test";
const businessPassword="TapRadar-Business-2026!";
const businessUser=await ensureUser(businessEmail,businessPassword);
const businessClient=createClient(url,anonKey,{auth:{persistSession:false,autoRefreshToken:false}});
const login=await businessClient.auth.signInWithPassword({email:businessEmail,password:businessPassword});
if(login.error)throw login.error;
let membership=(await admin.from("organization_members").select("organization_id").eq("user_id",businessUser.id).eq("role","owner").limit(1).maybeSingle()).data;
let organizationId=membership?.organization_id;
if(!organizationId){
  const created=await businessClient.rpc("create_organization_with_owner",{organization_name:"TapRadar Demo Café",organization_slug:"tapradar-demo-cafe",organization_category:"Café",organization_legal_name:"TapRadar Demo Café GmbH",organization_registration_number:"FN 123456a",organization_tax_id:"ATU12345678",organization_billing_email:businessEmail});
  if(created.error)throw created.error;organizationId=created.data;
  const orgUpdate=await businessClient.from("organizations").update({billing_address:"Kärntner Straße 1",billing_postal_code:"1010",billing_city:"Wien",billing_country_code:"AT",vat_treatment:"domestic"}).eq("id",organizationId);
  if(orgUpdate.error)throw orgUpdate.error;
  const location=await businessClient.rpc("create_initial_location",{target_organization_id:organizationId,location_name:"Hauptfiliale Wien",location_slug:"tapradar-demo-wien",location_address:"Kärntner Straße 1",location_postal_code:"1010",location_city:"Wien",location_phone:"+43 1 234567",location_email:businessEmail,location_latitude:48.20849,location_longitude:16.37208,location_opening_hours:{monday:{closed:false,open:"09:00",close:"18:00"},tuesday:{closed:false,open:"09:00",close:"18:00"},wednesday:{closed:false,open:"09:00",close:"18:00"},thursday:{closed:false,open:"09:00",close:"18:00"},friday:{closed:false,open:"09:00",close:"18:00"},saturday:{closed:false,open:"10:00",close:"16:00"},sunday:{closed:true}}});
  if(location.error)throw location.error;
  const card=await businessClient.rpc("configure_initial_loyalty_card",{target_organization_id:organizationId,target_location_id:location.data,card_title:"Pizza-Treuekarte",card_reward_title:"1 Pizza gratis",card_stamps_required:10,applies_to_all_locations:true});
  if(card.error)throw card.error;
  await businessClient.from("loyalty_cards").update({earning_rule:"1 Pizza kaufen = 1 Stempel",verification_instructions:"Kaufbeleg prüfen und den Stempel über das registrierte Kassengerät vergeben."}).eq("id",card.data);
  await businessClient.from("offers").insert([{organization_id:organizationId,title:"Sommerabend",description:"Jeden Freitag verlängerte Öffnungszeiten und Spezialkarte.",offer_type:"aktion",conditions:"Gültig freitags ab 17 Uhr",is_active:true},{organization_id:organizationId,title:"10 € Willkommensgutschein",description:"10 Euro Rabatt auf den ersten Einkauf.",offer_type:"gutschein",discount_type:"fixed",discount_value:10,minimum_purchase_amount:30,redemption_code:"WILLKOMMEN10",conditions:"Einmal pro Kunde, nicht kombinierbar",is_active:true}]);
  await admin.from("locations").update({country_code:"AT",public_status:"open"}).eq("id",location.data);
  await admin.from("subscriptions").update({status:"active",plan:"gold",stripe_customer_id:"cus_demo_local"}).eq("organization_id",organizationId);
  await admin.from("organizations").update({plan:"gold",public_status:"open",onboarding_status:"approved",approved_at:new Date().toISOString()}).eq("id",organizationId);
  await admin.from("billing_invoices").insert({id:"in_demo_2026_001",organization_id:organizationId,stripe_customer_id:"cus_demo_local",invoice_number:"TR-2026-001",status:"paid",currency:"eur",subtotal_amount:4166,tax_amount:833,total_amount:4999,customer_country_code:"AT",vat_treatment:"domestic",issued_at:new Date().toISOString(),paid_at:new Date().toISOString()});
}
console.log(JSON.stringify({admin:{email:adminEmail,password:adminPassword},business:{email:businessEmail,password:businessPassword},organizationId},null,2));
