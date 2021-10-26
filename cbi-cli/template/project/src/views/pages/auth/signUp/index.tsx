import { SignUp } from "views/ui/templates/SignUp";

export default () => {


    const onFinish = (values: any) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    return <SignUp onFinish={onFinish} onFinishFailed={onFinishFailed} />
}