import { Form } from 'antd'
import { useTranslate } from 'cbi-react-core'

export type Rule = {
    required?: boolean,
    message?: string,
    pattern?: RegExp | 'email' | 'phone' | 'url',
    min?: number,
    max?: number
    confirm?: string,
}

const pattern = {
    email: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
    url: /s/,
    phone: /s/
}
type LabelProp = {
    name?: string
    label: string
    rules?: Rule[]
} & Pick<React.HTMLAttributes<HTMLLabelElement>, 'id' | 'className'>
export const Label: React.FC<LabelProp> = ({ children, label, rules, ...ref }) => {
    const { t } = useTranslate()
    return (
        <Form.Item label={t(label)} {...ref} rules={rules?.map(e => ({
            ...e,
            pattern: typeof e.pattern === 'string' ? pattern[e.pattern] : e.pattern,
            message: e.message ? t(e.message) : undefined,
        }))}>
            {children}
        </Form.Item>
    )
}