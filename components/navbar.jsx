import { ArrowLeft } from "lucide-react"
import Modetoggle from "./modetoggle"
import { Button } from "./ui/button"
import { ChevronLeft } from "lucide-react"
import Link from "next/link"
import { createClient } from "@/supabase/server"
import Navadmin from "./admin/navadmin"
import { useradmin, userimage } from "@/lib/userid"
import Image from "next/image"
import imageurl from "@/lib/imageurl"


export default async function Navbar({ singlepage, addcontext }) {
    const supabaseauth = await createClient()
    const isadmin = await supabaseauth.auth.getSession()
    const admin = isadmin.data.session
    const realadmin = await useradmin()
    console.log(realadmin)
    const profileimage = await userimage()
    return (<nav className="w-full h-14 border-secondary border-b-2 flex items-center justify-between px-3" >
        <h1 className="text-primary font-semibold text-xl" > {singlepage ?
            <span className="flex items-center gap-2" >
                <Link href={"/shop"} > <Button size="icon" variant="ghost" >
                    <ChevronLeft className="size-8" /> </Button>
                </Link>  {addcontext} </span>
            :
            "devacom"}  </h1>
        { !realadmin ? <Image src={imageurl(`/profile/${profileimage}`)} className="w-10 h-10 mr-3 rounded-full object-center object-cover" alt={profileimage} width={100} height={100} />  : 
        <div>
           {!admin && <Link href={"/sign-up"} className="text-2xl font-medium text-secondary" > Login </Link>}
            {admin ? <Navadmin /> : <Modetoggle />}
        </div>}
    </nav>)
}