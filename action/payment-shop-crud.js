"use server"

import supabase from "@/supabase/supabase";
import { revalidatePath } from "next/cache";


export async function changestatus(id, status, prevState, formData) {
  const { data, error } = await supabase
    .from("payment-shop-history")
    .update({
      status: status,
    })
    .eq("id", id)
    .select("*")
    .single();

  console.log(data);
  revalidatePath("/admin/shop/history");
}
export async function deletedata(id, status, prevState, formData) {
  const { data, error } = await supabase
    .from("payment-shop-history")
    .delete()
    .eq("id", id)
    .select("*")
    .single();

  console.log(data);
  revalidatePath("/admin/shop/history");
}