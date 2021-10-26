import { useCallback, useEffect, useState } from "react"

export const useLocalStorage = (key: string, defaultValue: any | Function) => {
    return useStorage(key, defaultValue, window.localStorage)
}

export const useSessionStorage = (key: string, defaultValue: any | Function) => {
    return useStorage(key, defaultValue, window.sessionStorage)
}

const useStorage = (key: string, defaultValue: any | Function, storageObject: Storage) => {
    const [value, setValue] = useState(() => {
        const jsonvalue = storageObject.getItem(key)
        if (jsonvalue !== null) return JSON.parse(jsonvalue)

        if (typeof defaultValue === 'function') {
            return defaultValue()
        } else {
            return defaultValue
        }
    })

    useEffect(() => {
        if (value === undefined) return storageObject.removeItem(key)
        storageObject.setItem(key, JSON.stringify(value))
    }, [key, value, storageObject])

    const remove = useCallback(() => {
        setValue(undefined)
    }, [])

    return [value, setValue, remove]
}