import Image from "next/image";
import { Card } from "./ui/card";

export default async function Checkoutitem() {

    return (
        <Card className={`py-1 px-1 border-none border-0 outline-0 ring-0`} >
            <div className="flex items-center gap-2" >
                <Image src={"/image/case.jpg"} width={200} height={200} alt="haloo" className="w-8 h-8 rounded-lg object-center object-cover" />
                <div>
                    <h1> nama barang </h1>
                    <ul className="text-xs flex items-center gap-1" >
                        <li> variant 1 </li>
                        <li> variant 2 </li>
                        <li> variant 3 </li>
                    </ul>
                </div>
            </div>
        </Card>
    )
}