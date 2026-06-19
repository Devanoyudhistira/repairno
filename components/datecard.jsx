import { Card,CardTitle,CardDescription } from "./ui/card"


export default function Datecard({status,tanggal}) {
    return <Card size="lg" className={` flex flex-col text-center items-center border gap-0 py-1 w-[45%] h-26 justify-center bg-${status}/15 border-${status}`}>
        <CardTitle className={`text-2xl text-primary font-semibold`} > {status === "success" ? "selesai" : " diperbaiki" } </CardTitle>
        <CardDescription className={`flex flex-col text-primary items-center gap-0`} >
           {tanggal !== "NA" && <h1 className="text-2xl font-bold" >senin</h1>}
           <span className="text-xl font-medium -mt-1" > {tanggal} </span>
        </CardDescription>
    </Card>
}