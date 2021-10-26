import { useTranslate } from "cbi-react-core";
import { Link } from "react-router-dom";
import './style.scss'
import { Button, Checkbox, Form, Input } from "antd";
import { FacebookOutlined, GithubOutlined, GoogleOutlined, TwitterOutlined } from '@ant-design/icons';
import { CircularProgress } from 'views/components/atoms';
import React, { useState } from 'react';

const FormItem = Form.Item;

export const Login: React.FC<{
    onFinish: (values: any) => void
    onFinishFailed: (errorInfo: any) => void
}> = () => {

    // const handleSubmit = (e: any) => {
    //     e.preventDefault();
    //     // this.props.form.validateFields((err, values) => {
    //     //     if (!err) {
    //     //         this.props.showAuthLoader();
    //     //         this.props.userSignIn(values);
    //     //     }
    //     // });
    // };

    let [loader] = useState(false)
    // let [showMessage, setShowMessage] = useState(false)

    let { t } = useTranslate()
    console.log('login')
    return (
        <div className="gx-app-login-wrap">
            <div className="gx-app-login-container">
                <div className="gx-app-login-main-content">
                    <div className="gx-app-logo-content">
                        <div className="gx-app-logo-content-bg">
                            <img src="https://via.placeholder.com/272x395" alt='Neature' />
                        </div>
                        <div className="gx-app-logo-wid">
                            <h1>{t('app.userAuth.signIn')}</h1>
                            <p>{t('app.userAuth.bySigning')}</p>
                            <p>{t('app.userAuth.getAccount')}</p>
                        </div>
                        <div className="gx-app-logo">
                            <img alt="example" src={require("views/assets/images/logo.png")} />
                        </div>
                    </div>
                    <div className="gx-app-login-content">
                        <Form className="gx-signin-form gx-form-row0">

                            <FormItem name="email" rules={[{
                                required: true, type: 'email', message: 'The input is not valid E-mail!',
                            }]} initialValue="demo@example.com">
                                <Input placeholder="Email" />
                            </FormItem>
                            <FormItem name="password" initialValue="demo#123" rules={[{ required: true, message: 'Please input your Password!' }]}>
                                <Input type="password" placeholder="Password" />
                            </FormItem>
                            <FormItem name="remember" valuePropName="checked" initialValue={true}>
                                <Checkbox>{t('appModule.iAccept')}</Checkbox>
                                <span className="gx-signup-form-forgot gx-link">{t('appModule.termAndCondition')}</span>
                            </FormItem>
                            <FormItem>
                                <Button type="primary" className="gx-mb-0" htmlType="submit">
                                    {t('app.userAuth.signIn')}
                                </Button>
                                <span>{t('app.userAuth.or')}</span>
                                <Link to="/signup">{t('app.userAuth.signUp')}</Link>
                            </FormItem>
                            <div className="gx-flex-row gx-justify-content-between">
                                <span>or connect with</span>
                                <ul className="gx-social-link">
                                    <li>
                                        <GoogleOutlined />

                                        {/* <Icon type="google" 
                                        onClick={() => {
                                            this.props.showAuthLoader();
                                            this.props.userGoogleSignIn();
                                        }}
                                         /> */}
                                    </li>
                                    <li>
                                        <FacebookOutlined />
                                        {/* <Icon type="facebook" 
                                        onClick={() => {
                                            this.props.showAuthLoader();
                                            this.props.userFacebookSignIn();
                                        }} 
                                        /> */}
                                    </li>
                                    <li>
                                        <GithubOutlined />
                                        {/* <Icon type="github" 
                                        onClick={() => {
                                            this.props.showAuthLoader();
                                            this.props.userGithubSignIn();
                                        }}
                                         /> */}
                                    </li>
                                    <li>
                                        <TwitterOutlined />
                                        {/* <Icon type="twitter" 
                                        onClick={() => {
                                            this.props.showAuthLoader();
                                            this.props.userTwitterSignIn();
                                        }}
                                         /> */}
                                    </li>
                                </ul>
                            </div>
                            <span
                                className="gx-text-light gx-fs-sm"> demo user email: 'demo@example.com' and password: 'demo#123'</span>
                        </Form>
                    </div>

                    {loader ?
                        <div className="gx-loader-view">
                            <CircularProgress />
                        </div> : null}
                    {/* {showMessage ?
                        message.error(alertMessage.toString()) : null} */}
                </div>
            </div>
        </div>
    );
}