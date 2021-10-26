import { URLHelper } from "cbi-react-core"
import { useEffect } from "react"

export const useStateWithQueryURL = (callback: Function, dependencies: string[] = ['page']) => {
    const queryObject = URLHelper.object<any>()

    let depen = dependencies.map(e => queryObject?.[e] || undefined)
    useEffect(() => {
        callback()
    }, depen)
}