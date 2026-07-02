"use client"

import { useEffect, useState } from "react"
import { Card, CardContent } from "./ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel"
import { Dot } from "lucide-react"
import Image from "next/image"

export default function Slideitem({ image }) {
    const [api, setapi] = useState(0)
    const [current, setCurrent] = useState(0)
    const [count, setCount] = useState(0)

    useEffect(() => {
        if (!api) return
        setCount(api.scrollSnapList().length)
        setCurrent(api.selectedScrollSnap())
        api.on("select", () => {
            setCurrent(api.selectedScrollSnap())
        })
    }, [api, setCount])


    const data = Array.from({ length: 5 })
    return <div className="flex flex-col  gap-15 w-full   lg:w-1/2" >
        <Carousel className={`h-full m-0 -mb-18 lg:-mb-16 p-0  ml-3`} setApi={setapi} >
            <CarouselContent className={"w-full h-full p-0 bg-transparent"} >
                {data.map((_, index) => (
                    <CarouselItem className={"bg-transparent p-0 border-0"} key={index}>
                        <div className="flex items-center justify-center w-full h-max">
                            <Card className={"w-full ring-0 p-0 bg-transparent border-0"} >
                                <CardContent className="flex border-0 aspect-square  items-center justify-center">
                                    <Image src={image} className="object-center object-cover w-full h-max" alt="yeahhh" width={"300"} height={"300"} />
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
        </Carousel>
        <div className="flex items-center z-999 -mt-5 gap-2" >
            {data.map((e, i) =>
                <Dot className={current === i ? "size-10" : "size-7"} onClick={() => api.scrollTo(i)} key={i} />
            )}
        </div>
    </div>
}