import { provider } from "cbi-react-core"
import { useLayoutEffect, useState } from "react"

// type Options = RequestInit
export const useFetch = <T>(url: string, options: RequestInit = {}, dependencies: any[] = []) => {
    let [loading, setLoading] = useState<boolean>(false)
    let [value, setValue] = useState<T>()
    let [error, setError] = useState<boolean>(false)

    useLayoutEffect(() => {
        setLoading(true)
        provider('http').fetch<T>(url, options)
            .then(res => {
                setValue(res)
            })
            .catch(error => {
                setError(error)
            }).finally(() => {
                setLoading(false)
            })
    }, dependencies)


    return {
        value, loading, error
    }
}