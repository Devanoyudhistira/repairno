import { createClient } from "@/supabase/server";
import supabase from "@/supabase/supabase";
import { NextResponse } from "next/server";

export async function GET(request) {
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get("code");
  const supabaseauth = await createClient();

  if (code) {
    await supabaseauth.auth.exchangeCodeForSession(code);
  }

  const {data: { user },} = await supabaseauth.auth.getUser();

  console.log(user);

  const {data:userdata,error:usererror} = await supabase.from("users_list").select("id,account_id").eq("account_id",user.id).single()
  if(userdata?.id){
    return NextResponse.redirect(`${origin}/`);
  }
  else{   return NextResponse.redirect(`${origin}/signupform`); }

}
