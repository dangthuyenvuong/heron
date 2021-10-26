import { Card, CardBody, CardHeader, Radio, RadioGroup, useTranslate } from "cbi-react-core"

type RadioCardProp = {
    title: string,
    defaultValue?: string,
    values: {
        value: any,
        title: string
    }[],
} & Pick<React.HTMLAttributes<HTMLDivElement>, 'className'>
export const RadioCard: React.FC<RadioCardProp> = ({ title, values, defaultValue, ...ref }) => {
    const { t } = useTranslate()

    return (
        <Card {...ref}>
            <CardHeader>{t(title)}</CardHeader>
            <CardBody>
                <RadioGroup defaultValue={defaultValue}>
                    <div className="flex flex-col gap-2">
                        {
                            values.map(e => <Radio key={e.value} value={e.value}>{t(e.title)}</Radio>)
                        }
                    </div>
                </RadioGroup>
            </CardBody>
        </Card>
    )
}