"use server";

import userid from "@/lib/userid";
import { createClient } from "@/supabase/server";
import supabase from "@/supabase/supabase";
import { revalidatePath } from "next/cache";
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
  revalidatePath("/wishlist");
  return NextResponse.json({
    success: true,
    message:"Product succesfully added to wishlist"
  });
}

export async function DELETE(request) {
  const body = await request.json();
  const user = await userid();
  const { id } = body;
  console.log(id);
  const { data, error } = await supabase
    .from("wishlist")
    .delete()
    .eq("item", id)
    .eq("user", user);
  console.log(data);
  console.log(error);
  if (error) {
    console.log(error);
    return NextResponse.json({
      success: false,
    });
  }
  revalidatePath("/wishlist");
  return NextResponse.json({
    message:"Product has been succesfully deleted",
    success: true,
  });
}
