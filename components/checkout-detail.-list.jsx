export default function Checkoutdetaillist({category,value}) {
    return <div className="w-full text-lg flex justify-between" >
        <h1 className=" font-medium" >{category}</h1>
        <h2 className=" font-bold text-secondary" >{value}</h2>
    </div>
}