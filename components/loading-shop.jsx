"use client"

import { Skeleton } from "./ui/skeleton"
import { Spinner } from "./ui/spinner"

export default function Loadingshop() {
    return <div className="w-screen h-screen" >
        <Skeleton className={`w-full h-50 lg:h-80`} />
        <div className="w-full flex flex-col items-center justify-center gap-4 h-60" >
            <Spinner className={`size-16`} />
            <h1 className="text-2xl font-semibold" > Tolong tunggu sebentar </h1>
        </div>
    </div>
}
