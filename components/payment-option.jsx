import { Field, FieldContent, FieldDescription, FieldLabel, FieldTitle } from "./ui/field";
import { RadioGroupItem } from "./ui/radio-group";

export default function Paymentoption({title,description,value}) {
    return <FieldLabel htmlFor={title} >
        <Field orientation="horizontal">
            <FieldContent>
                <FieldTitle>{title}</FieldTitle>
                <FieldDescription className={"capitalize"} >
                    {description}
                </FieldDescription>
            </FieldContent>
            <RadioGroupItem value={value} id={title} />
        </Field>
    </FieldLabel>
}