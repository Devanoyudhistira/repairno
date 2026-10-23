"use server";

import { createClient } from "@/supabase/server";
import supabase from "@/supabase/supabase";
import supabaseforimage from "@/supabase/supabaseforimage";
import { revalidatePath } from "next/cache";
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
      message: "unknown identity please try again",
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
      redirectTo: `${process.env.NEXT_PUBLIC_URL}/auth/callback`,
    },
  });

  if (data.url) {
    redirect(data.url);
  }
  // console.log(error);
}

export async function signout() {
  const supabase = await createClient();
  const { error } = await supabase.auth.signOut();
  revalidatePath("/");
}

export async function createuser(formdata) {
  const supabaseauth = await createClient();
  const username = formdata.get("username");
  const userphone = formdata.get("userphone");  
  const { data: profiledata, error: profileerror } =
    await supabaseauth.auth.getUser();
  const { data: userdata, error: usererror } = await supabase
    .from("users_list")
    .insert({
      username: username,
      phone_number: userphone,
      email: profiledata.user.email,
      profile_picture: "",
      account_id: profiledata.user.id,
    });
  if (userdata) {
    revalidatePath("/signupform");
    redirect("/shop");
  }
}
