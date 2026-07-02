"use server";

import { NextResponse } from "next/server";
import midtransClient from "midtrans-client";
import { Resend } from "resend";
import Templatemail from "@/components/email/template";
import MailMessage from "nodemailer/lib/mailer/mail-message";
import message from "@/function/mailfunction";

export async function POST(request) {
  const body = await request.json();
  const customername = body.name;
  const customeremail = body.email;
  const customerphone = body.number;
  const purchasedproduct = body.item;
  const purchasedid = body.id;
  //   const quantity = body.quantity;
  const amount = body.amount;

  const coreApi = new midtransClient.CoreApi({
    isProduction: false,
    serverKey: process.env.NEXT_MIDTRANS_SERVER,
    clientKey: process.env.NEXT_MIDTRANS_CLIENT,
  });
  const response = await coreApi.charge({
    payment_type: "bank_transfer",
    transaction_details: {
      order_id: Math.ceil(Math.floor(Math.random() * 1000).toString()),
      gross_amount: amount,
    },
    item_details: {
      name: purchasedproduct,
      id: purchasedid,
      price: amount,
      quantity: 1,
    },
    customer_details: {
      first_name: customername,
      email: customeremail,
      phone: customerphone,
    },
    bank_transfer: {
      bank: "bca",
    },
  });

  const purchaseresult = await response
  console.log(purchaseresult.va_numbers[0].va_number)
  const resend = new Resend(process.env.RESEND_API_KEY);

  message(purchaseresult.va_numbers[0].va_number,"percobaan pertama")
  // console.log(response);
  // console.log(process.env.NEXT_MIDTRANS_SERVER);
  // console.log(process.env.NEXT_MIDTRANS_CLIENT);
  return NextResponse.json(response);
}
