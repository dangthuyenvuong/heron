import { useForm } from "cbi-react-core";

type RegisterFormProp = {
    field: {
        username: string,
        password: string
    }
}

export const useRegisterForm = () => useForm<RegisterFormProp>()

