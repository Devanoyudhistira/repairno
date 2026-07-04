"use client"

import { Field, FieldContent, FieldDescription, FieldGroup, FieldLabel, FieldSeparator, FieldTitle } from "@/components/ui/field"
import { RadioGroupItem, RadioGroup } from "@/components/ui/radio-group"
import { Input } from "@/components/ui/input"
import Paymentoption from "./payment-option"
export default function Paymentmethod() {
  return <RadioGroup name="payment-method" defaultValue="bank_tranfer" className="max-w-sm">
        <Paymentoption value="bank_tranfer" title={"kartu atm"} description={"bri,bca,bni,dll"} />
        <Paymentoption value="manual" title={"bayar langsung di toko"} description={"data pembelian anda akan disimpan di database dan akan konfirmasi di toko"} />
    </RadioGroup>
}