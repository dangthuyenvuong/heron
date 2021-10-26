import { Avatar, Typography, Form, Input, Button } from "antd"
import { Card, CardBody, CardFooter, CardHeader, FieldBuilder, useTranslate } from "cbi-react-core"
import { User } from "."

export const General: React.FC<{
    user: User
}> = ({ user }) => {
    let { t } = useTranslate()

    return (
        <div className="grid grid-cols-1 md:grid-cols-6 md:gap-4">
            <div className="col-span-2">
                <Card>
                    <CardBody>
                        <div className="flex flex-col items-center">
                            <Avatar style={{ width: 200, height: 200 }} src={user.avatar} />
                            <Typography.Title level={5} className="mt-2">{user.name}</Typography.Title>
                        </div>
                    </CardBody>
                </Card>
            </div>
            <div className="col-span-4">
                <Form layout="vertical">
                    <Card>
                        <CardHeader>
                            {t('Profile')}
                        </CardHeader>
                        <CardBody>

                            <div className="grid grid-cols-2 gap-2">
                                <div className="col-span-1">
                                    <FieldBuilder
                                        fields={[
                                            { name: 'name', title: 'Name', placeholder: 'Name', rules: [{ required: true, message: '' }] },
                                            { name: 'phone', title: 'Phone', rules: [{ required: true }] },
                                            { name: 'state', title: 'State/Region', },
                                        ]}
                                    />
                                </div>
                                <div className="col-span-1">
                                    <FieldBuilder
                                        fields={[
                                            { name: 'email', title: 'Email', placeholder: 'example@gmail.com', rules: [{ pattern: 'email', message: 'Email not match pattern' }] },
                                            { name: 'country', title: 'Country' },
                                            { name: 'city', title: 'City', },
                                        ]}
                                    />
                                </div>
                            </div>

                        </CardBody>
                        <CardFooter>
                            <div className="flex justify-end">
                                <Button htmlType="submit" type="primary">{t('Save Changes')}</Button>
                            </div>
                        </CardFooter>
                    </Card>
                </Form>
            </div>
        </div>
    )
}