"use server";

import supabase from "@/supabase/supabase";
import supabaseforimage from "@/supabase/supabaseforimage";
import { revalidatePath } from "next/cache";

export async function restock(id, jumlah, prev, formdata, ...args) {
  console.log(jumlah);
  // console.log(id)
  // console.log(args)
  const { error } = await supabase
    .from("shop")
    .update({ stock: jumlah })
    .eq("id", id);
  if (error) {
    return { error: true, message: "perubahan gagal" };
  }
  revalidatePath("/admin/shop");
  return { success: true, message: "perubahan berhasil" };
}
export async function updatename(id, prev, formdata) {
  const newname = formdata.get("newname");
  const { error } = await supabase
    .from("shop")
    .update({ name: newname })
    .eq("id", id);
}
export async function updateprice(id, prev, formdata) {
  const newprice = formdata.get("newprice");
  const { error } = await supabase
    .from("shop")
    .update({ price: newprice })
    .eq("id", id);
}

export async function createitem(prev, formdata) {
  const name = formdata.get("nama");
  const harga = Number(formdata.get("harga").replace(/\./g, "")) ;  
  const image = formdata.get("gambar");
  const extension = image.name.split(".").at(-1);
  const finalname =
    Math.random()
      .toString(36)
      .substring(2, 10 + 2) +
    "." +
    extension;
  const description = formdata.get("deskripsi");
  const { data, error } = await supabase.from("shop").insert({
    name,
    price: harga,
    description,
    gambar: "shop/"+finalname,
  });

  const upload = await supabaseforimage.upload(`shop/${finalname}`, image);
}
