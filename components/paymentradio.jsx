"use client"
import {
    Field,
    FieldContent,
    FieldDescription,
    FieldLabel,
    FieldTitle,
} from "@/components/ui/field"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
export default function Paymentradio() {
    return (
        <RadioGroup defaultValue="plus" className="w-full">
            <FieldLabel className={`transition bg-primary-foreground text-primary w-max border-2 has-data-[state=checked]:border-white 
             has-data-[state=checked]:bg-secondary dark:has-data-[state=checked]:bg-secondary dark:has-data-[state=checked]:text-primary-foreground has-data-[state=checked]:text-primary-foreground `} htmlFor="plus-plan">
                <Field className={`w-full`} orientation="horizontal">
                    <FieldContent>
                        <FieldTitle>pay using credit card</FieldTitle>
                        <FieldDescription>
                            Visa etc
                        </FieldDescription>
                    </FieldContent>
                    <RadioGroupItem className={"hidden"} value="plus" id="plus-plan" />
                </Field>
            </FieldLabel>
            <FieldLabel className={`transition bg-primary-foreground text-primary w-max border-2 has-data-[state=checked]:border-white 
             has-data-[state=checked]:bg-secondary dark:has-data-[state=checked]:bg-secondary dark:has-data-[state=checked]:text-primary-foreground has-data-[state=checked]:text-primary-foreground `} htmlFor="e-wallet">
                <Field orientation="horizontal">
                    <FieldContent>
                        <FieldTitle>pay with e wallet</FieldTitle>
                        <FieldDescription>PayPal etc</FieldDescription>
                    </FieldContent>
                    <RadioGroupItem className={"hidden"} value="w-wallet" id="e-wallet" />
                </Field>
            </FieldLabel>
        </RadioGroup>
    )
}