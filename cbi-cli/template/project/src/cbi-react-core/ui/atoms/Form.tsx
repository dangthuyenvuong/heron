import { Form as FormA } from 'antd'

type FormProp = {
    onSubmit?: (value: any) => void,
    layout?: "vertical" | "horizontal"
}
export const Form: React.FC<FormProp> = ({ children, layout = 'vertical', ...ref }) => {
    return <FormA layout={layout} {...ref}>{children}</FormA>
}