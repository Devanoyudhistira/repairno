import { signIn, signout } from "@/action/auth";
import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { DoorOpen } from "lucide-react";
import Image from "next/image";
import { Open_Sans } from "next/font/google";
import { Field } from "@/components/ui/field";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";


const cursive = Open_Sans({
})

export default function Page() {
    return <main className={"w-screen px-2 h-screen flex flex-col items-center " + cursive.className} >
        <h1 className={`text-6xl mt-12 ${cursive.className} font-bold text-secondary capitalize`} > DevanoCom </h1>
        <h2 className="text-xl px-4 text-center mt-1 capitalize font-medium text-secondary" > find and buy the best electronic device for your life </h2>
        <Card className={`w-full border-0 ring-0 outline-0 self-center justify-self-center mt-30 px-10`} >
            <form className="w-full flex i tems-center justify-center" action={signIn} >
                <Button size="lg" variant="secondary" className={`bg-secondary h-15 w-full font-semibold text-white capitalize text-3xl`} > login </Button>
            </form>
            <Separator className={`h-20 bg-secondary -mb-3`}/>
            <h1 className="text-secondary self-center font-black text-xl" > Don't have account ? </h1>
            <Button size="lg" variant="outline" className={`font-semibold border-secondary -mt-4 h-15 text-secondary text-3xl`} > <Link href={"/signupform"} > sign up </Link></Button>
        </Card>

    </main>
}