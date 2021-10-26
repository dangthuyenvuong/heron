import { authAction } from "app/store/auth";
import { useDispatch } from "react-redux";
import { SignIn } from "views/ui/templates";

export default () => {
  let dispatch = useDispatch()

  const onFinish = (values: any) => {
    console.log('login finish')
    dispatch(authAction.login(values))
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('login onFinishFailed')
  };

  console.log('Login')

  return <SignIn onFinish={onFinish} onFinishFailed={onFinishFailed} />
}