import { useTranslate } from "cbi-react-core";
import { Link } from "react-router-dom";
import { Button, Form, Input } from "antd";
import { CircularProgress } from 'views/ui/atoms';
import React, { useState } from 'react';
import { routerName } from "routers";

const FormItem = Form.Item;
export const ForgotPassword: React.FC<{
    onFinish: (values: any) => void
    onFinishFailed: (errorInfo: any) => void
}> = ({ onFinish, onFinishFailed }) => {

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
    return (
        <div className="gx-app-login-wrap">
            <div className="gx-app-login-container">
                <div className="gx-app-login-main-content">
                    <div className="gx-app-logo-content">
                        <div className="gx-app-logo-content-bg">
                            <img src="https://via.placeholder.com/272x395" alt='Neature' />
                        </div>
                        <div className="gx-app-logo-wid">
                            <h1>{t('auth.forgotPassword')}</h1>
                            <p>{t('auth.byForgotPassword')}</p>
                        </div>
                        <div className="gx-app-logo">
                            <img style={{ width: 40 }} alt="example" src="/images/logo.svg" />
                        </div>
                    </div>
                    <div className="gx-app-login-content">
                        <Form className="gx-signin-form gx-form-row0" onFinish={onFinish} onFinishFailed={onFinishFailed}>
                            <FormItem name="email" rules={[{
                                required: true, type: 'email', message: 'The input is not valid E-mail!',
                            }]}>
                                <Input placeholder="Email" />
                            </FormItem>
                            <div className="text-right">
                                <Link to={routerName.signin}>{t('auth.haveAAccount')}</Link>
                            </div>
                            <FormItem>
                                <Button type="primary" className="gx-mb-0" htmlType="submit">
                                    {t('auth.sendEmail')}
                                </Button>
                            </FormItem>
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