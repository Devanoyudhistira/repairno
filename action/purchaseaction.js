"use server";

import supabase from "@/supabase/supabase";

export async function purchase(id, variant ,prev,formdata) {
  const username = formdata.get("customer-name");
  const phone = formdata.get("customer-phone");
  const email = formdata.get("customer-email");
  const paymentmethod = formdata.get("payment-method");
  const {data:shopitem,error:shoperror} = await supabase.from("shop").select("*").eq("id",id).single("")
   const variantid = variant.map(e => e.id )
  const {data:variantitem,error:varianterror} = await supabase.from("variant").select("*").in("id",variantid)
  console.log(variantid)
  console.log(variantitem)
  // const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/purchase`, {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify({
  //     name: username,
  //     email: email,
  //     amount: shopitem.price ,
  //     item: shopitem.name,
  //     number: phone,
  //     id,
  //   }),
  // });
  // const result = await response.json();
  // console.log(result)
  // return result;
}
