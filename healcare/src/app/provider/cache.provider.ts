import { AbstractCache } from "cbi-react-core"

class Cache extends AbstractCache{

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
    get<T>(name: string, defaultValue?: T ): null | T {
        try {
            let value = localStorage.getItem(name)
            if (value) {
                return JSON.parse(value)
            }
            return defaultValue || null
        } catch (err) {
            return defaultValue || null
        }
    }
}

let cache = Cache.getInstance()
export default cache