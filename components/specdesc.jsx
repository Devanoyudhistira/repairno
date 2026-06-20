export default function Specdesk({category,value,mode}) {
    return (
        <div className={`${mode && "text-success"} flex capitalize text-md lg:text-xl justify-between items-center`} >
            <h3 className="font-medium" > {category} </h3>
            <h3 className="uppercase  font-semibold" > {value} </h3>
        </div>
    )
}