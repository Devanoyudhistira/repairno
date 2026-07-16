import { Field, FieldContent, FieldDescription, FieldLabel, FieldTitle } from "./ui/field";
import { RadioGroupItem } from "./ui/radio-group";

export default function Paymentoption({ title, description, value, setSelect, category, price,id, select }) {
    const normalize = (str) =>str.toLowerCase().replace(/\s+/g, "");
    return <FieldLabel className={`transition bg-primary-foreground text-primary w-max border-2 has-data-[state=checked]:border-white 
             has-data-[state=checked]:bg-secondary dark:has-data-[state=checked]:bg-secondary dark:has-data-[state=checked]:text-primary-foreground has-data-[state=checked]:text-primary-foreground `} htmlFor={title} >
        <Field orientation="horizontal">
            <FieldContent>
                <FieldTitle>{title}</FieldTitle>
                <FieldDescription className={"capitalize"} >
                    {description}
                </FieldDescription>
            </FieldContent>
            <RadioGroupItem onClick={() => {
                setSelect(prev => prev.map(item =>normalize(item.category) === normalize(category) ? { ...item, id: value, name: title,price:price } : item));
            }} className={"hidden"} value={value} id={title} />
        </Field>
    </FieldLabel>
}
