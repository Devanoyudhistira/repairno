import { signIn, signout } from "@/action/auth";
import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { DoorOpen } from "lucide-react";
import Image from "next/image";

export default function Page() {
    return <main className="w-screen flex flex-col items-center justify-center " >
        <Navbar />
        <Card className={`p-3 mt-4`} >
            <form action={signIn} className="" >
                <Button variant="outline" className={`flex-row`} type="submit">
                    <h1 className="text-xl font-medium" > google login </h1>
                    <Image alt="google" src={"/icon/google.svg"} width={100} height={200} className="object-center object-cover w-5 h-5" />
                </Button>
            </form>
            <form action={signout} className="" >
                <Button variant="destructive" className={`flex-row`} type="submit">
                    <h1 className="text-xl font-medium" > sign out </h1>
                    <DoorOpen/>
                </Button>
            </form>
        </Card>
    </main>
}