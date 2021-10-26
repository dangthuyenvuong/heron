import { Avatar } from "antd"
import { User } from "app"
import { Button, Card, CardBody, FieldBuilder, Form, useTranslate, Typography, CardHeader, CardFooter } from "cbi-react-core"

export const ChangePassword: React.FC<{ user: User }> = ({ user }) => {
    const { t } = useTranslate()
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
                <Card style={{maxWidth: 500}}>
                    <Form layout="vertical">
                        <CardBody>
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
                        </CardBody>
                        <CardFooter className="flex justify-end">
                            <Button type="primary" htmlType="submit">{t('Change Password')}</Button>
                        </CardFooter>
                    </Form>
                </Card>
            </div>
        </div>
    )
}