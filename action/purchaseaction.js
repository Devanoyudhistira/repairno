"use server";

import userid from "@/lib/userid";
import supabase from "@/supabase/supabase";
import { redirect } from "next/navigation";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
export async function purchase(id, variant, prev, formdata) {
  const username = formdata.get("customer-name");
  const phone = formdata.get("customer-phone");
  const email = formdata.get("customer-email");
  const paymentmethod = formdata.get("payment-method");
  const { data: shopitem, error: shoperror } = await supabase
    .from("shop")
    .select("*")
    .eq("id", id)
    .single("");
  const variantid = variant.map((e) => e.id);
  const { data: variantitem, error: varianterror } = await supabase
    .from("variant")
    .select("id")
    .in("id", variantid);
  const { data: purchasedata, error: purchaseerror } = await supabase
    .from("payment-shop-history")
    .insert({
      quantity: "1",
      item: shopitem.id,
      total_money: shopitem.price,
      status: "pending",
      email,
      customer_name: username,
      phone: phone,
      variant_item: variantitem.map((e) => e.id),
    });
  console.log(purchaseerror);
  const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/purchase`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: username,
      email: email,
      amount: shopitem.price,
      item: shopitem.name,
      number: phone,
      id,
    }),
  });
  const result = await response.json();
  console.log(result);
  return result;
}

export async function bulkpayment(
  item,
  variant,
  price,
  itemprice,
  itemname,
  prev,
  formdata,
) {
  const user_id = await userid();
  const order_id = `ORDER-${Math.ceil(Math.floor(Math.random() * 1000).toString())}`;
  const allproduct = item.map((e, i) => ({
    item: e,
    variantdata: variant[i],
    price: itemprice[i],
  }));
  const rows = allproduct.map((product) => ({
    order_id,
    item_id: product.item,
    variant_order: product.variantdata,
    price: product.price,
  }));
  console.log(rows);
  const { data, error } = await supabase.from("order_checkout").insert(rows);  
  const rowsid = rows.map((e, i) => e.item_id);
  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    line_items: [
      {
        price_data: {
          currency: "usd",
          product_data: {
            name: "item",
          },
          unit_amount: price, // $10.00
        },
        quantity: 1,
      },
    ],
    success_url: process.env.NEXT_PUBLIC_URL,
    cancel_url: process.env.NEXT_PUBLIC_URL,
  });

  console.log(session)

  const { data: order, error: ordererror } = await supabase
    .from("payment-shop-history")
    .insert({
      quantity: "1",
      item: item[0],
      total_money: price,
      status: "pending",
      order_id: order_id,
      user_id,
    });
    redirect(session.url)  
}
