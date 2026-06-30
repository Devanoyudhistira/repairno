"use client"
import Skeletonloading from "@/components/loadingskeleton";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
    return <article className="w-full px-3 grid gap-x-4 gap-y-3 mt-15 grid-cols-2 lg:grid-cols-4 md:grid-cols-3" >
        {Array.from({ length: 10 }).map((_, i) => (
            <Skeletonloading key={i} />            
        ))}
    </article>
}