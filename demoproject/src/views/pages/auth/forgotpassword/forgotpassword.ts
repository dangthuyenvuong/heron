import { mapValueToProp } from "cbi-react-core"
import { ForgotPassowrd } from "./forgotpassword.template"

const useForgotPassowrd = () => {
    return {
        
    }
}

export type ForgotPasswordProp = ReturnType<typeof useForgotPassowrd>

export default mapValueToProp(ForgotPassowrd, useForgotPassowrd)