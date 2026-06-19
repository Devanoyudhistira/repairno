import Image from "next/image";

export default function Page() {
    return (
        <main className="w-screen min-h-full" >
            <div className="w-full" >
                <Image src={"/image/laptop1.jpg"} className="w-full h-75 object-cover object-center" alt="gambar product" width={600} height={600} />
                <div className="" >
                    <h1 className="text-2xl font-semibold px-2" > Laptop acer aspire e1 </h1>
                </div>
            </div>
        </main>)
}