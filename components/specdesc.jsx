export default function Specdesk({category,value}) {
    return (
        <div className="flex capitalize text-md justify-between items-center" >
            <h3 className="font-medium" > {category} </h3>
            <h3 className="uppercase  font-semibold" > {value} </h3>
        </div>
    )
}