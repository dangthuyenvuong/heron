import React, { useState } from "react";
import { Button, Checkbox, Form, Input } from "antd";
import { Link } from "react-router-dom";

// import { message } from "antd/lib/index";
import { useTranslate } from "cbi-react-core";
import { routerName } from "routers";
import { FacebookOutlined, GithubOutlined, GoogleOutlined, TwitterOutlined } from "@ant-design/icons";
import { CircularProgress } from "views/ui/atoms";

const FormItem = Form.Item;

export const SignUp: React.FC<{
    onFinish: (values: any) => void,
    onFinishFailed: (errors: any) => void
}> = ({ onFinishFailed, onFinish }) => {
    let { t } = useTranslate()

    let [loader] = useState(false)

    return (
        <div className="gx-app-login-wrap">
            <div className="gx-app-login-container">
                <div className="gx-app-login-main-content">
                    <div className="gx-app-logo-content">
                        <div className="gx-app-logo-content-bg">
                            <img src='https://via.placeholder.com/272x395' alt='Neature' />
                        </div>
                        <div className="gx-app-logo-wid">
                            <h1>{t('app.userAuth.signUp')}</h1>
                            <p>{t('app.userAuth.bySigning')}</p>
                            <p>{t('app.userAuth.getAccount')}</p>
                        </div>
                        <div className="gx-app-logo">
                            <img style={{ width: 40 }} alt="example" src="/images/logo.svg" />
                        </div>
                    </div>

                    <div className="gx-app-login-content">
                        <Form onFinish={onFinish} className="gx-signup-form gx-form-row0">
                            <FormItem name="userName" rules={[{ required: true, message: 'Please input your username!' }]}>
                                <Input placeholder="Username" />
                            </FormItem>

                            <FormItem name="email" rules={[{
                                required: true, type: 'email', message: 'The input is not valid E-mail!',
                            }]}>
                                <Input placeholder="Email" />
                            </FormItem>
                            <FormItem name="password" rules={[{ required: true, message: 'Please input your Password!' }]}>
                                <Input type="password" placeholder="Password" />
                            </FormItem>
                            <FormItem name="remember" valuePropName="checked"  initialValue={true}>
                                <Checkbox checked>{t('appModule.iAccept')}</Checkbox>
                                <span className="gx-link gx-signup-form-forgot">{t('appModule.termAndCondition')}</span>
                            </FormItem>
                            <FormItem>
                                <Button type="primary" className="gx-mb-0" htmlType="submit">
                                    {t('app.userAuth.signUp')}
                                </Button>
                                <span>{t('app.userAuth.or')}</span> <Link to={routerName.signin}>{t('app.userAuth.signIn')}</Link>
                            </FormItem>
                            <div className="gx-flex-row gx-justify-content-between">
                                <span>or connect with</span>
                                <ul className="gx-social-link">
                                    <li>
                                        <i className="anticon">
                                            <GoogleOutlined />
                                        </i>

                                        {/* <Icon type="google" 
                                        onClick={() => {
                                            this.props.showAuthLoader();
                                            this.props.userGoogleSignIn();
                                        }}
                                         /> */}
                                    </li>
                                    <li>
                                        <i className="anticon">
                                            <FacebookOutlined />
                                        </i>
                                        {/* <Icon type="facebook" 
                                        onClick={() => {
                                            this.props.showAuthLoader();
                                            this.props.userFacebookSignIn();
                                        }} 
                                        /> */}
                                    </li>
                                    <li>
                                        <i className="anticon">
                                            <GithubOutlined />
                                        </i>
                                        {/* <Icon type="github" 
                                        onClick={() => {
                                            this.props.showAuthLoader();
                                            this.props.userGithubSignIn();
                                        }}
                                         /> */}
                                    </li>
                                    <li>
                                        <i className="anticon">
                                            <TwitterOutlined />
                                        </i>
                                        {/* <Icon type="twitter" 
                                        onClick={() => {
                                            this.props.showAuthLoader();
                                            this.props.userTwitterSignIn();
                                        }}
                                         /> */}
                                    </li>
                                </ul>
                            </div>
                        </Form>
                    </div>
                    {loader ?
                        <div className="gx-loader-view">
                            <CircularProgress />
                        </div> : null}

                    {/* {showMessage &&
                        message.error(alertMessage)} */}
                </div>
            </div>
        </div>
    )
}