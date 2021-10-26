import { FogotPassword } from "views/components/templates/FogotPassword";


export default () => {
    const onFinish = (values: any) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };
    return <FogotPassword onFinish={onFinish} onFinishFailed={onFinishFailed} />
}
