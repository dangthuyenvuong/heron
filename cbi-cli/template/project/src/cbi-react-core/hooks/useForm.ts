import { ChangeEvent, useState } from "react"

let patternModel: { [key: string]: RegExp } = {
    email: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1, 3}\.[0-9]{1, 3}\.[0-9]{1, 3}\.[0-9]{1, 3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    phone: /(84|0[3|5|7|8|9])+([0-9]{8})/,
    url: /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/
}

export type RuleItem<T> = Partial<{
    min: number,
    max: number,
    required: true,
    pattern: RegExp | 'email' | 'phone' | 'url',
    confirm: keyof T,
    check: string,
}>
type RuleState<T> = Partial<{
    [k in keyof T]: RuleItem<T>
}>

type MessageFunction = () => string
type MessageState<T> = Partial<{
    [k in keyof T]: {
        [k in keyof RuleItem<T>]: string |  MessageFunction
    }
}>

type ErrorState<T> = Partial<{
    [k in keyof T]: string
}>

type UseFormReturn<T> = {
    register: (name: keyof T, rule?: RuleItem<T>, message?: any) => {
        name: keyof T,
        onChange: (event: ChangeEvent<HTMLInputElement>) => void,
        defaultValue: string
    },
    handleSubmit: Function,
    form: T,
    error: ErrorState<T>
}

interface FormOptions<T> {
    value?: T
    validate?: RuleState<T>
    message?: MessageState<T>
}

export function useForm<T>(options?: FormOptions<T>): UseFormReturn<T> {

    let [form] = useState<any>(options?.value || {})
    let [error, setError] = useState<ErrorState<T>>({})
    let [initRule] = useState<RuleState<T>>(options?.validate || {})
    let [initMessage] = useState<MessageState<T>>(options?.message || {})

    function inputChange(ev: ChangeEvent<HTMLInputElement>) {
        let name = ev.currentTarget.name as string
        let value = ev.currentTarget.value

        form[name] = value
    }

    function check() {

        let errorObj: any = {}

        for (let i in initRule) {
            let r = initRule[i]
            if (r?.required && !form[i]?.trim()) {
                errorObj[i] = initMessage?.[i]?.required || 'Tr?????ng n??y kh??ng ???????c ????? tr???ng'
                continue
            }

            if (r?.pattern) {
                let pattern = r.pattern
                if (r?.pattern && patternModel[r?.pattern as string]) {
                    pattern = patternModel[r.pattern as string]
                }
                if (form[i] && !(pattern instanceof RegExp && pattern.test(form[i]))) {
                    errorObj[i] = initMessage?.[i]?.pattern || 'Tr?????ng n??y kh??ng ????ng ?????nh d???ng'
                }
            }

            if (r?.min && form[i]?.length < r.min) {
                errorObj[i] = initMessage?.[i]?.min || `Tr?????ng n??y ph???i d??i h??n ${r.min} k?? t???`
            }

            if (r?.max && form[i]?.length > r.max) {
                errorObj[i] = initMessage?.[i]?.max || `Tr?????ng n??y kh??ng ???????c nhi???u h??n ${r.max} k?? t???`
            }

        }

        return errorObj;
    }

    function register(name: keyof T, rule?: RuleItem<T>, message?: any) {
        if (!form[name]) {
            form[name] = ''
        }

        if (rule) {

            initRule[name] = rule
        }

        if (message) {
            initMessage[name] = message
        }

        return {
            name,
            onChange: inputChange,
            defaultValue: form[name]
        }
    }
    function handleSubmit(callback: Function) {
        return (ev: any) => {
            ev.preventDefault()
            let errorObject = check()
            if (Object.keys(errorObject).length === 0) {
                callback(form)
            } else {
                setError(errorObject)
            }
        }
    }

    return {
        register,
        handleSubmit,
        form,
        error
    }
}