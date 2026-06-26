"use server";

import supabase from "@/supabase/supabase";
import supabaseforimage from "@/supabase/supabaseforimage";
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
  console.log(error);
  console.log(id);
  revalidatePath("/admin/repair");
  revalidatePath("/");
  if (error) return { message: "penghapusan gagal", error: true };
  return { message: "penghapusan berhasil", error: false };
}
export async function createrepair(prev, formdata) {
  const merkname = formdata.get("namamerk");
  const modelname = formdata.get("namamodel");
  const ownername = formdata.get("namapelanggan");
  const ownerphone = formdata.get("nomerpelanggan");
  const harga = Number(formdata.get("biaya").replace(/\./g, ""));
  const image = formdata.get("gambar");
  const extension = image.name.split(".").at(-1);
  const finalname =
    Math.random()
      .toString(36)
      .substring(2, 10 + 2) +
    "." +
    extension;
  const problem = formdata.get("keluhan");
  const { data, error } = await supabase.from("repaired-item").insert({
    item_name: merkname,
    item_model: modelname,
    user_name:{nama:ownername,phone:ownerphone },
    problem,
    status:"pending",
    price:harga,
    image:finalname
  }).select("*");
  console.log(data)
  console.log(error)
  const upload = await supabaseforimage.upload(`repair/${finalname}`, image);
  revalidatePath("/admin/repair");
  revalidatePath("/admin/repair/create");
  revalidatePath("/");
}
