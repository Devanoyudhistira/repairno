import Image from "next/image";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";

export default async function Checkoutitem({ itemname, image, allvariant }) {
    return (
        <Card className={`py-1 px-1 border-none border-0 outline-0 ring-0`} >
            <div className="flex items-center gap-2" >
                <Image src={image} width={200} height={200} alt="haloo" className="w-8 h-8 rounded-lg object-center object-cover" />
                <div>
                    <h1> {itemname} </h1>
                    <ul className="text-xs flex items-center gap-1" >
                        {allvariant.map(e =>
                            <li key={e.name} >
                                <Badge variant="success" > {e.variant_category} : {e.name} </Badge>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </Card>
    )
}