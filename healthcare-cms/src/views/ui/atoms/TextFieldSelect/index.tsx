import { Select } from 'cbi-react-core'


const { Option } = Select

interface TextFieldSelectProp extends Pick<React.HTMLAttributes<HTMLSelectElement>, 'className' | 'style'> {
    options: {
        title: string,
        value: any
    }[],
    defaultValue?: any
}
export const TextFieldSelect: React.FC<TextFieldSelectProp> = ({ options, ...ref }) => {
    return (
        <Select bordered={false} {...ref} className={`cbi-text-field-select ${ref.className ?? ''}`} >
            {
                options.map(e => <Option key={e.value} value={e.value}>{e.title}</Option>)
            }
        </Select>
    )
}