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


    const data = [image, "/image/case.jpg", "/image/cooler.jpg"]
    return <div className="flex flex-col  w-full   lg:w-1/2" >
        <Carousel className={`h-full lg:mt-0 mt-10 lg:-mb-16 p-0  ml-3`} setApi={setapi} >
            <CarouselContent className={"w-full h-full p-0 bg-transparent"} >
                {data.map((e, index) => (
                    <CarouselItem className={"bg-transparent p-0 border-0"} key={index}>
                        <div className="flex items-center justify-center w-full h-max">
                            <Card className={"w-full ring-0 p-0 bg-transparent border-0"} >
                                <CardContent className="flex border-0 p-0 overflow-hidden aspect-square  items-center justify-center">
                                    <Image src={e} className="object-center lg:ml-10 ml-5 object-cover w-full h-full aspect-square" alt="yeahhh" width={"300"} height={"300"} />
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
        </Carousel>
        <div className="flex items-center ml-5 lg:mt-20 gap-6 mt-4" >
            {data.map((e, i) =>
                <Image
                    src={e}
                    alt="slide"
                    width={100}
                    height={100}
                    key={i}
                    onClick={() => api.scrollTo(i)}
                    className={`aspect-square object-cover rounded-md object-center lg:w-18 lg:h-18 w-10 h-10 transition ${current === i ? "border-4 border-secondary" : "border-0 "}`}
                />
            )}
        </div>
    </div>
}