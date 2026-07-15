"use server";

import { createClient } from "@/supabase/server";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

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
  redirect("/admin");
}

export async function signIn() {
  const origin = (await headers()).get("origin");
  const supabase = await createClient();
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: `${origin}/auth/callback`,
    },
  });

  if (data.url) {
    redirect(data.url);
  }
  console.log(error);
}

export async function signout() {
  const supabase = await createClient();
  const {error} = await supabase.auth.signOut();
 if(error) console.log(error)
}
