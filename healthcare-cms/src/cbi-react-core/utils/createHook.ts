const _global: any = {}

type Action<T> = (values: T) => (void | T)
type AddAction<T> = (callback: Action<T>) => void
type DoAction<T> = (values: T) => void
type CreateGlobalResponse<T> = [
    AddAction<T>,
    DoAction<T>
]

export const createHook = <T>(name: string): CreateGlobalResponse<T> => {

    const _global: Action<T>[] = []
    const addAction = (callback: (values: T) => void) => {
        _global.push(callback)
    }

    const doAction = (values: T) => {
        for(let i in _global){
            let res = _global[i](values)
            if(res){
                
            }
        }
    }
    return [
        addAction,
        doAction
    ]
}