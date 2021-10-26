import { ForgotPassword } from "views/ui/templates";


export default () => {
    const onFinish = (values: any) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };
    return <ForgotPassword onFinish={onFinish} onFinishFailed={onFinishFailed} />
}
