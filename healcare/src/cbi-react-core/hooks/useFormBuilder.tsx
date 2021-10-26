import { RuleItem } from "cbi-react-core";

// interface FormField<T, V = RuleItem<T>> {
//     type?: 'text' | 'radio' | 'select' | 'checkbox'
//     label?: string,
//     name: string
//     validate?: RuleItem<T> | V
//     message?: {
//         [k in keyof V]?: String
//     }
// }

// type ErrorBuilder<T> = { [k in keyof T]?: string }

interface FormBuilder<T> {
    field: {
        [k in keyof T]: {
            defaultValue: any,
            rule: RuleItem<T>
            message: {
                [k in keyof Partial<RuleItem<T>>]: string
            }
        }
    }
    onSuccess?: Function,
}
const useFormBuilder = <T,>(options: FormBuilder<T>) => {

    // for (let i in options.field) {
    //     let f = options.field[i]

    // }

    // let { } = useForm({
    //     value: options.field
    // })

    return {
        Form: <div></div>
    }
}

export default useFormBuilder



// useFormBuilder({
//     field: {
//         username: Joi.string().required(t('Username is requried')).pattern('email', t('Username is Email')),
//         password: Joi.string().required(t('Password is required')).min(6).max(32),
//         confirm_password: Joi.string().required().confirm('passowrd')
//     },
//     onSuccess: (form: any) => {
//         console.log(form)
//     }
// })

