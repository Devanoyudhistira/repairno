"use server";

import supabase from "@/supabase/supabase";
import { revalidatePath } from "next/cache";

export async function updatestatus(id, status, prevState, formData) {
  const { data, error } = await supabase
    .from("repaired-item")
    .update({
      status: status,
    })
    .eq("id", id)
    .select("*")
    .single();

  console.log(data);
  revalidatePath("/admin/repair");
}

export async function deleterepair(id, prev, formdata) {  
  const { error } = await supabase.from("repaired-item").delete().eq("id", id);
  console.log(error)
  console.log(id)
  revalidatePath("/admin/repair");
  revalidatePath("/");
  if (error) return { message: "penghapusan gagal", error: true };
  return { message: "penghapusan berhasil", error: false };
}
