import { CalendarTwoTone, EyeOutlined, PushpinOutlined } from "@ant-design/icons"
import { Button, Card, CardBody, CardFooter, CardHeader, useTranslate } from "cbi-react-core"
import { TextFieldSelect, TextSelectDatePicker } from "views/ui/atoms"

interface PublishCardProp extends React.HTMLAttributes<HTMLDivElement> {
}

export const PublishCard: React.FC<PublishCardProp> = ({ ...ref }) => {
    const { t } = useTranslate()

    const statusOptions = [
        { value: 'draft', title: t('Draft') },
        { value: 'Publish', title: t('Publish') },
        { value: 'Future ', title: t('Future') },
        { value: 'Pending  ', title: t('Pending') },
        { value: 'Private  ', title: t('Private') },
        { value: 'Trash  ', title: t('Trash') },
    ]

    const visibilityOptions = [
        { value: 'public', title: t('Public') },
        { value: 'password', title: t('Password Protected') },
        { value: 'private', title: t('Private') },
    ]

    return (
        <Card>
            <CardHeader>{t('Publish')}</CardHeader>
            <CardBody>
                <div className="flex items-center whitespace-nowrap">
                    <PushpinOutlined className="mr-2" />{t('Status')}:<TextFieldSelect className="font-normal" options={statusOptions} style={{ width: 200 }} defaultValue="draft" />
                </div>
                <div className="flex items-center whitespace-nowrap">
                    <EyeOutlined className="mr-2  " />{t('Visibility')}:<TextFieldSelect className="font-normal" options={visibilityOptions} style={{ width: 200 }} defaultValue="public" />
                </div>
                <div className="flex items-center whitespace-nowrap">
                    <CalendarTwoTone className="mr-2 " />{t('Publish')}:&nbsp;<TextSelectDatePicker text='Immediately' />
                </div>
            </CardBody>
            <CardFooter className="flex justify-between">
                <Button type="link" style={{ padding: 0, color: 'red' }}>{t('Move to Trash')}</Button>
                <Button type="primary">{t('Publish')}</Button>
            </CardFooter>
        </Card>
    )
}