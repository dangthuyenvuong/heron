import { authAction } from "app/store/auth";
import { useDispatch } from "react-redux";
import { Login } from "views/components/templates";

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

  return <Login onFinish={onFinish} onFinishFailed={onFinishFailed} />
}