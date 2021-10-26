import { ChangeEvent, useState } from "react"

let patternModel: { [key: string]: RegExp } = {
    email: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1, 3}\.[0-9]{1, 3}\.[0-9]{1, 3}\.[0-9]{1, 3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    phone: /(84|0[3|5|7|8|9])+([0-9]{8})/,
    url: /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/
}

type FormState = {
    [k: string]: any
}

type RuleItem = {
    min?: number,
    max?: number,
    required?: true,
    pattern?: RegExp | string
}
type RuleState<T extends Object> = Partial<{
    [k in keyof T]: RuleItem
}>

type MessageState<T extends Object> = Partial<{
    [k in keyof T]: {
        [k in keyof RuleItem]: string
    }
}>


type ErrorState<T extends Object> = Partial<{
    [k in keyof T]: string
}>

type UseFormReturn<T> = {
    register: (name: keyof T, rule?: RuleItem, message?: any) => {
        name: keyof T,
        onChange: (event: ChangeEvent<HTMLInputElement>) => void,
        defaultValue: string
    },
    handleSubmit: Function,
    form: T,
    error: ErrorState<T>
}

export function useForm<T extends { [key: string]: any }>(initvalue?: T): UseFormReturn<T> {

    let [form] = useState<any>(initvalue || {})
    let [error, setError] = useState<ErrorState<T>>({})
    let [initRule] = useState<RuleState<T>>({})
    let [initMessage] = useState<MessageState<T>>({})

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
                errorObj[i] = initMessage?.[i]?.required || 'Trường này không được để trống'
                continue
            }

            if (r?.pattern) {
                let pattern = r.pattern
                if (r?.pattern && patternModel[r?.pattern as string]) {
                    pattern = patternModel[r.pattern as string]
                }
                if (form[i] && !(pattern instanceof RegExp && pattern.test(form[i]))) {
                    errorObj[i] = initMessage?.[i]?.pattern || 'Trường này không đúng định dạng'
                }
            }

            if (r?.min && form[i]?.length < r.min) {
                errorObj[i] = initMessage?.[i]?.min || `Trường này phải dài hơn ${r.min} ký tự`
            }

            if (r?.max && form[i]?.length > r.max) {
                errorObj[i] = initMessage?.[i]?.max || `Trường này không được nhiều hơn ${r.max} ký tự`
            }

        }

        return errorObj;
    }

    function register(name: keyof T, rule?: RuleItem, message?: any) {
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