import { Field, FieldContent, FieldDescription, FieldLabel, FieldTitle } from "./ui/field";
import { RadioGroupItem } from "./ui/radio-group";

export default function Paymentoption({ title, description, value, setSelect,category }) {
    return <FieldLabel htmlFor={title} >
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
