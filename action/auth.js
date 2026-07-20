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
      redirectTo: `${process.env.NEXT_PUBLIC_URL}/auth/callback`,
    },
  });

  if (data.url) {
    redirect(data.url);
  }
  console.log(error);
}

export async function signout() {
  const supabase = await createClient();
  const { error } = await supabase.auth.signOut();
  if (error) console.log(error);
  revalidatePath("/")
}

export async function createuser(formdata) {  
  const supabaseauth = await createClient();
  const username = formdata.get("username");
  const userphone = formdata.get("userphone");
  const useremail = formdata.get("email");
  const userimage = formdata.get("profile_image");
  const extension = userimage.name.split(".").at(-1);
  const finalname =Math.random().toString(36).substring(2, 10 + 2) +"." +extension;
  const { data: profiledata, error: profileerror } =
    await supabaseauth.auth.getUser();
  console.log(profiledata.user);
  console.log(profileerror);
  const { data: userdata, error: usererror } = await supabase
    .from("users_list")
    .insert({
      username: username,
      phone_number: userphone,
      email: profiledata.user.email,
      profile_picture: finalname,
      account_id: profiledata.user.id,
    });
  console.log(userdata);
  if (usererror) console.log(usererror);
  const upload = await supabaseforimage.upload(`profile/${finalname}`, userimage);
  if(userdata){
    revalidatePath("/signupform")
    redirect("/shop")
  }
}
