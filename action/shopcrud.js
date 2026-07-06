"use server";

import supabase from "@/supabase/supabase";
import supabaseforimage from "@/supabase/supabaseforimage";
import { revalidatePath } from "next/cache";

export async function restock(id, jumlah, prev, formdata, ...args) {
  console.log(jumlah);
  const { error } = await supabase
    .from("shop")
    .update({ stock: jumlah })
    .eq("id", id);
  if (error) {
    return { error: true, message: "perubahan gagal" };
  }
  revalidatePath("/admin/shop");
  revalidatePath("/shop");
  return { success: true, message: "perubahan berhasil" };
}
// update nama
export async function updatename(id, prev, formdata) {
  const newname = formdata.get("newname");
  const { error } = await supabase
    .from("shop")
    .update({ name: newname })
    .eq("id", id);

  revalidatePath("/admin/shop");
  revalidatePath("/shop");
  if (error) return { message: "perubahan nama gagal", error: true };
  return { message: "perubahan nama berhasil", success: true };
}

export async function deleteitem(id, prev, formdata) {
  const { error } = await supabase.from("shop").delete().eq("id", id);
  revalidatePath("/admin/shop");
  revalidatePath("/shop");
  if (error) return { message: "penghapusan gagal", error: true };
  return { message: "penghapusan berhasil", success: true };
}
export async function updateprice(id, prev, formdata) {
  const newprice = Number(formdata.get("newprice").replace(/\./g, ""));
  const { error } = await supabase
    .from("shop")
    .update({ price: newprice })
    .eq("id", id);
  revalidatePath("/admin/shop");
  revalidatePath("/shop");
  if (error) return { message: "perubahan harga gagal", error: true };
  return { message: "perubahan harga berhasil", success: true };
}

export async function createitem(prev, formdata) {
  const name = formdata.get("nama");
  const variant_name = formdata.getAll("variant_name");
  const variant_category = formdata.getAll("category_variant");
  const variant_price = formdata.getAll("harga_variant");  
  const harga = Number(formdata.get("harga").replace(/\./g, ""));
  const image = formdata.get("gambar");
  const extension = image.name.split(".").at(-1);

  const finalname =
    Math.random()
      .toString(36)
      .substring(2, 10 + 2) +
    "." +
    extension;
  const description = formdata.get("deskripsi");
  const { data, error } = await supabase
    .from("shop")
    .insert({
      name,
      price: harga,
      description,
      gambar: "shop/" + finalname,
    })
    .select("id")
    .single();
    console.log(error)
    console.log(data)
  const allvariant = variant_category.map((category, i) => ({
    variant_category: category,
    name: variant_name[i],
    item: data.id,
    variant_price: Number(variant_price[i].replace(/\./g, "")),
  }));
  const { data:variantdata, error:varianterror } = await supabase.from("variant").insert(allvariant);
  console.log(varianterror)
  const upload = await supabaseforimage.upload(`shop/${finalname}`, image);
  revalidatePath("/admin/shop");
  revalidatePath("/admin/shop/create");
  revalidatePath("/shop");
}
