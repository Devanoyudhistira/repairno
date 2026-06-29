import { Card, CardContent, CardHeader } from "./ui/card";
import { Skeleton } from "./ui/skeleton";

export default function Skeletonloading() {
    return <Card size="md" className={`border-primary m-0 h-60 w-full gap-1 cursor-pointer transition-all hover:shadow-lg hover:-translate-y-1 border py-1 px-3 bg-primary-foreground`} >
        <Skeleton className="w-full h-60 mt-1 object-center object-cover" />
        <CardContent className={`px-0 py-1 m-0 gap-3 flex h-full flex-col  `} >            
                <Skeleton className={`w-50 h-6`} >  </Skeleton>            
                <Skeleton className={`w-75 h-13`} >  </Skeleton>            
        </CardContent>
    </Card>
}