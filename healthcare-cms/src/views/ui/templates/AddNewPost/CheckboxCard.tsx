import { Card, CardBody, CardHeader, Checkbox, useTranslate } from "cbi-react-core"



type CheckboxCardProp = {
    title: string,
    values: {
        value: any,
        title: string
    }[],
} & Pick<React.HTMLAttributes<HTMLDivElement>, 'className'>
export const CheckboxCard: React.FC<CheckboxCardProp> = ({ title, values }) => {
    const { t } = useTranslate()
    return (
        <Card>
            <CardHeader>{t(title)}</CardHeader>
            <CardBody>
                <div className="flex flex-col gap-2">
                    {
                        values.map(e => (
                            <div key={e.value}>
                                <Checkbox>{e.value}</Checkbox>
                            </div>
                        ))
                    }
                </div>
            </CardBody>
        </Card>
    )
}