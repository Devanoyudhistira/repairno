"use server";

import userid from "@/lib/userid";
import { createClient } from "@/supabase/server";
import supabase from "@/supabase/supabase";
import { NextResponse } from "next/server";

export async function POST(request) {
  const user = await userid();
  const body = await request.json();
  const { id } = body;
  const { data, error } = await supabase
    .from("wishlist")
    .insert({ item: id, user: user });
  console.log(data);
  if (error) {
    console.log(error);
    return NextResponse.json({
      success: false,
    });
  }
  return NextResponse.json({
    success: true,
  });
}
