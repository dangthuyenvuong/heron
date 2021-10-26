import { useTranslate } from "cbi-react-core";
import { Button, Form, Input } from "antd";
import { CircularProgress } from 'views/ui/atoms';
import React, { useState } from 'react';

const FormItem = Form.Item;
export const ResetPassword: React.FC<{
    onFinish: (values: any) => void
    onFinishFailed: (errorInfo: any) => void
}> = ({ onFinish, onFinishFailed }) => {


    let [loader] = useState(false)

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
                            <h1>{t('auth.changePassword')}</h1>
                            <p>{t('auth.byChangePassword')}</p>
                        </div>
                        <div className="gx-app-logo">
                            <img style={{ width: 40 }} alt="example" src="/images/logo.svg" />
                        </div>
                    </div>
                    <div className="gx-app-login-content">
                        <Form className="gx-signin-form gx-form-row0" onFinish={onFinish} onFinishFailed={onFinishFailed}>
                            <FormItem name="password" rules={[
                                { required: true, whitespace: false, message: t('Password is required') },
                                { max: 32, message: t('Password max 32 letter') },
                                { min: 6, message: t('Password min 6 letter') },
                            ]}>
                                <Input placeholder="Password" type="password" />
                            </FormItem>

                            <FormItem name="confirmPassword" rules={[
                                {required: true, message: t('Confirm password is required')},
                                ({ getFieldValue }) => ({
                                    validator: (_, value) => {
                                        if (!value || getFieldValue('password') === value){
                                            return Promise.resolve()
                                        }
                                        return Promise.reject(new Error(t('The two passwords that you entered do not match!')))
                                    }
                                })
                            ]}>
                                <Input placeholder="Confirm Password" type="password" />
                            </FormItem>

                            <FormItem>
                                <Button type="primary" className="gx-mb-0" htmlType="submit">
                                    {t('auth.changePassword')}
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