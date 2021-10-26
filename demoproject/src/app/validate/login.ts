import { useForm } from "cbi-react-core";

type LoginFormProp = {
    username: string,
    password: string
}

export const useLoginForm = () => useForm<LoginFormProp>()