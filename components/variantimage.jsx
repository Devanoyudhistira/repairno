import Image from "next/image";
import { TabsContent } from "./ui/tabs";

export default function Varianimage({image,value}) {
    return <TabsContent value={value} >
        <Image src={image} alt={value} width={700} height={700} loading="eager"
            className="object-cover px-6 object-center w-full h-50 lg:h-120 rounded-xl" />
    </TabsContent>
}