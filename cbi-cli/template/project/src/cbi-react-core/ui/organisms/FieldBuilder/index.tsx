import { Input, Checkbox } from 'antd'
import { useTranslate } from 'cbi-react-core'
import { Label, Rule } from '../../atoms'


type Field = {
    title: string,
    value?: any,
    name: string,
    type?: 'checkbox' | 'text' | 'textarea' | 'editor' | 'password',
    checked?: boolean,
    rules?: Rule[],
    placeholder?: string
}

type BuilderProp = {
    fields: Field[],
}

const pattern = {
    email: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
    url: /s/,
    phone: /s/
}


export const FieldBuilder: React.FC<BuilderProp> = ({ fields }) => {
    const { t } = useTranslate()


    return (
        <>
            {fields.map((e, i) =>
                <Label key={i} name={e.name} label={t(e.title)} rules={e.rules}>
                    {
                        e.type === 'checkbox' ? <Checkbox value={e.value} checked={e.checked} /> :
                            <Input placeholder={t(e.placeholder || '')} type={e.type} value={e.value} />
                    }
                </Label>
            )}

        </>
    )
}