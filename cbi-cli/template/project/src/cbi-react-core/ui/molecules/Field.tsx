import { useTranslate } from 'cbi-react-core'
import { Input, Label, Rule } from '../atoms'
import { RichTextEditor } from '../organisms'


type FieldProp = {
    label: string
    name?: string
    rules: Rule[],
    htmlType: 'input' | 'editor' | 'select' | 'checkbox' | 'radiogroup',
    type: 'radio' | ''
} & Pick<React.HTMLAttributes<HTMLLabelElement>, 'id' | 'className'>
export const Field: React.FC<FieldProp> = ({ type, ...ref }) => {
    return (
        <Label {...ref}>
            <Input />
        </Label>
    )
}

type TextFieldProp = {
    label: string
    name?: string
    placeholder?: string
    rules?: Rule[],
} & Pick<React.HTMLAttributes<HTMLLabelElement>, 'id' | 'className'>
export const TextField: React.FC<TextFieldProp> = ({ placeholder, ...ref }) => {
    const { t } = useTranslate()
    return (
        <Label  {...ref}>
            <Input placeholder={t(placeholder || '')} />
        </Label>
    )
}

type RichTextFieldProp = {
    label: string
    name?: string
    rules?: Rule[],
} & Pick<React.HTMLAttributes<HTMLLabelElement>, 'id' | 'className'>

export const RichTextField: React.FC<RichTextFieldProp> = ({ ...ref }) => {
    return (
        <Label {...ref}>
            <RichTextEditor />
        </Label>
    )
}