"use server";

import { createClient } from "@/supabase/server";
import supabase from "@/supabase/supabase";

export default async function userid() {
  const supabaseauth = await createClient();
  const { data: userdata, error: usererror } =
    await supabaseauth.auth.getUser();
  const { data, error } = await supabase.from("users_list").select("id,account_id").eq("account_id",userdata?.user?.id).single() ;
    return data?.id 
}
export async function userimage() {
  const supabaseauth = await createClient();
  const { data: userdata, error: usererror } =
    await supabaseauth.auth.getUser();
  const { data, error } = await supabase.from("users_list").select("profile_picture").eq("account_id",userdata?.user?.id).single() ;
    return data?.profile_picture
}
export async function useradmin() {
  const supabaseauth = await createClient();
  const { data: userdata, error: usererror } =
    await supabaseauth.auth.getUser();
  const { data, error } = await supabase.from("users_list").select("admin").eq("account_id",userdata?.user?.id).single() ;
    return data.admin
}
