import { Spinner } from "@/components/ui/spinner";

export default function Loadingwishlist() {
    return <div className="w-screen h-screen flex flex-col items-center justify-center" >
        <Spinner className={"size-13 lg:size-30"} />
        <h1 className="text-2xl lg:text-4xl font-semibold " > loading </h1>
    </div>
}