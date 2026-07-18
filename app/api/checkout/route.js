"use server";

import userid from "@/lib/userid";
import { createClient } from "@/supabase/server";
import supabase from "@/supabase/supabase";
import { NextResponse } from "next/server";

export async function POST(request) {
  const user = await userid();
  const body = await request.json();
  const { id,variant } = body;
  console.log(variant)
  const { error } = await supabase
    .from("checkout")
    .insert({ checkout_item: id, checkout_user: user,checkout_variant:variant });
  if (error) {
    console.log(error);
    return NextResponse.json({
      success: false,
    });
  }  
  return NextResponse.json({
    success: true,
    message: "produk berhasil ditambahkan ke checkout",
  });
}

export async function DELETE(request) {
  const body = await request.json();
  const user = await userid();
  const { id } = body;
  console.log(id);
  const { data, error } = await supabase
    .from("checkout")
    .delete()
    .eq("checkout_item", id)
    .eq("checkout_user", user);
  console.log(data);
  console.log(error);
  if (error) {
    console.log(error);
    return NextResponse.json({
      success: false,
    });
  }
  return NextResponse.json({
    message:"produk berhasil dihapus",
    success: true,
  });
}
