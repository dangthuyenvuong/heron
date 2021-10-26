import { AbstractCache } from "cbi-react-core"

class Cache extends AbstractCache{
    remove(name: string): void {
        localStorage.removeItem(name)
    }

    static instance : Cache
    static getInstance(){
        if(!this.instance){
            this.instance = new Cache()
        }
        return this.instance
    }
    private constructor(){ super() }
    set(name: string, value: any): void {
        localStorage.setItem(name, JSON.stringify(value))
    }
    get<T>(name: string, defaultValue?: T ): T {
        try {
            let value = localStorage.getItem(name)
            if (value) {
                return JSON.parse(value)
            }
            return defaultValue as T
        } catch (err) {
            return defaultValue as T
        }
    }
}

let cache = Cache.getInstance()
export default cache