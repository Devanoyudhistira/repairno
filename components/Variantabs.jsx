import Image from "next/image";
import { TabsTrigger } from "./ui/tabs";

export default function Varianttab({ image, value }) {
    return <TabsTrigger className={`data-[state=active]:bg-transparent data-[state=active]:border-2 border-blue-600 w-max h-max data-[state=active]:text-white
        data-[state=active]:shadow-none p-0! bg-transparent border-0 ring-0 shadow-none`} value={value}>
        <Image src={image} alt={value} width={700} height={700} loading="eager" className="object-cover px-6 object-center w-full h-5 lg:w-35 lg:h-17  rounded-xl" />
    </TabsTrigger>
}