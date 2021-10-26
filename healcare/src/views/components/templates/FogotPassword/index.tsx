import { Button, Form, Typography, useTranslate } from "cbi-react-core";
import { Input } from "cbi-react-core";
import { Link } from "react-router-dom";
import { routerName } from "routers";
import './style.scss'

const { Title, Paragraph } = Typography
export const FogotPassword: React.FC<{
    onFinish: (values: any) => void,
    onFinishFailed: (errors: any) => void
}> = ({ onFinish, onFinishFailed }) => {
    let { t } = useTranslate()
    return (
        <div className="fogotpassword-form">
            <img alt="logo" className="logo" src="/images/logo.svg" />
            <Title>{t('Fogot password')}</Title>
            <Form
                className="form"
                name="basic"
                labelCol={{ span: 6 }}
                wrapperCol={{ span: 18 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label={t('Email')}
                    name="email"
                    rules={[
                        { required: true, message: t('Please input your email!') },
                        { pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g, message: t('Email not like format') }
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item wrapperCol={{ offset: 6, span: 18 }}>
                    <Button type="primary" htmlType="submit">
                        {t('Send email reset')}
                    </Button>
                </Form.Item>
            </Form>
            <Paragraph className="link-register">{t(`Have a account ?`)} <Link to={routerName.authLogin}>{t('Login')}</Link></Paragraph>

        </div>
    )
}