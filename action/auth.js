"use server";

import { createClient } from "@/supabase/server";

export async function login(prev, formdata) {
  const supabaseauth = await createClient();
  const username = formdata.get("username");
  const password = formdata.get("password");
  const { data, error } = await supabaseauth.auth.signInWithPassword({
    email: username,
    password: password,
  });
  if (error) {
    return {
      error: true,
      message: "identitas tidak dikenal silahkan coba lagi",
    };
  }
  return { error: false, message: null };
}
