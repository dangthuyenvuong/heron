
// import { Tabs } from "antd";
import { Button, Form, Typography, useTranslate } from "cbi-react-core";
import { Input } from "cbi-react-core";
import { Link } from "react-router-dom";
import { routerName } from "routers";
import './style.scss'

// const { TabPane } = Tabs
const { Title, Paragraph } = Typography


export const Register: React.FC<{
    onFinish: (values: any) => void,
    onFinishFailed: (errors: any) => void
}> = ({ onFinishFailed, onFinish }) => {
    let {t} = useTranslate()

    return (
        <div className="register-form">
            <img alt="logo" className="logo" src="/images/logo.svg" />
            <Title>{t('Register')}</Title>
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
                    label={t('Username')}
                    name="username"
                    rules={[{ required: true, message: t('Please input your username!') }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label={t('Password')}
                    name="password"
                    rules={[{ required: true, message: t('Please input your password!') }]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    label={t('Name')}
                    name="name"
                    rules={[{ required: true, message: t('Please input your name!') }]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 6, span: 18 }}>
                    <Button type="primary" htmlType="submit">
                        {t('Register')}
                    </Button>
                </Form.Item>
            </Form>
            <Paragraph className="link-register">{t(`Have a account ?`)} <Link to={routerName.authLogin}>{t('Login')}</Link></Paragraph>

        </div>
    )
}