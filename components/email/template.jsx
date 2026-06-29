import { Card, CardDescription, CardTitle } from "../ui/card";

export default function Templatemail({title,va_number}){
   return <Card>
       <CardTitle > {title} </CardTitle>
       <CardDescription> {va_number} </CardDescription>
   </Card> 
}