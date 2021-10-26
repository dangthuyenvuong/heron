import { Button, Card, CardBody, FieldBuilder, Form, useTranslate } from "cbi-react-core"

export const ChangePassword: React.FC = () => {
    const { t } = useTranslate()
    return (
        <Card>
            <CardBody>
                <Form layout="vertical">
                    <FieldBuilder
                        fields={[
                            { name: 'password', title: 'Password', type: 'password', rules: [{ required: true, message: 'Password is required' }] },
                            {
                                name: 'newPassword', title: 'New Password', type: 'password',
                                rules: [
                                    { min: 6, max: 32, message: "New Password must be between 6 and 32 characters" },
                                    { required: true, message: 'New Password is required' }
                                ]
                            },
                            { name: 'conformPassword', title: 'Confirm Password', type: 'password' }
                        ]}
                    />
                    <Button type="primary" htmlType="submit">{t('Change Password')}</Button>
                </Form>
            </CardBody>
        </Card>
    )
}