import { Card, CardBody, CardHeader, Tags, useTranslate } from "cbi-react-core"

interface TagCardProp extends React.HTMLAttributes<HTMLDivElement> {
    title: string
}

export const TagCard: React.FC<TagCardProp> = ({ title, ...ref }) => {
    let { t } = useTranslate()
    return (
        <Card {...ref}>
            <CardHeader>{t(title)}</CardHeader>
            <CardBody className="flex flex-wrap whitespace-nowrap">
                <Tags />
            </CardBody>
        </Card>
    )
}