import { Field, FieldContent, FieldDescription, FieldLabel, FieldTitle } from "./ui/field";
import { RadioGroupItem } from "./ui/radio-group";

export default function Paymentoption({ title, description, value, setSelect,category,id,select }) {    
    return <FieldLabel className={`transition bg-primary-foreground text-primary w-max border-2 has-data-[state=checked]:border-white 
             has-data-[state=checked]:bg-primary dark:has-data-[state=checked]:bg-primary dark:has-data-[state=checked]:text-primary-foreground has-data-[state=checked]:text-primary-foreground `}  htmlFor={title} >
        <Field orientation="horizontal">
            <FieldContent>
                <FieldTitle>{title}</FieldTitle>
                <FieldDescription className={"capitalize"} >
                    {description}
                </FieldDescription>
            </FieldContent>
            <RadioGroupItem onClick={() => {
                if (setSelect) setSelect(prev =>prev.map(item =>item.category === category ? { ...item, id: value }: item));}} className={"hidden"} value={value} id={title} />
        </Field>
    </FieldLabel>
}
