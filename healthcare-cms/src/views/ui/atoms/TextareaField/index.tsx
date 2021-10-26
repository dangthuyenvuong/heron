import { Label, Rule, Textarea } from "cbi-react-core"

interface TextareaFieldProp extends Pick<React.HTMLAttributes<HTMLDivElement>, 'className' | 'id'> {
    name?: string
    label: string
    rules?: Rule[]
}
export const TextareaField: React.FC<TextareaFieldProp> = ({ ...ref }) => {
    return (
        <Label {...ref}>
            <Textarea />
        </Label>
    )
}