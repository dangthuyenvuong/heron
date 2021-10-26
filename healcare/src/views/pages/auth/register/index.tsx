import { Register } from "views/components/templates/Register";

export default () => {


    const onFinish = (values: any) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    return <Register onFinish={onFinish} onFinishFailed={onFinishFailed} />
}