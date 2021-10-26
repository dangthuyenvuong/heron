import { Card, CardBody, CardHeader, useTranslate } from "cbi-react-core"

interface ImageCardProp extends React.HTMLAttributes<HTMLDivElement> {
    title: string
}

export const ImageCard: React.FC<ImageCardProp> = ({ title, ...ref }) => {
    const { t } = useTranslate()
    return (
        <Card>
            <CardHeader>{t(title)}</CardHeader>
            <CardBody>
                <img className="mw-100" src="https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp" />
            </CardBody>
        </Card>
    )
}