import { AbstractCache } from "./AbstractCache";

class Cache extends AbstractCache {
    remove(name: string): void {
        localStorage.removeItem(name)
    }
    set(name: string, value: any): void {
        localStorage.setItem(name, JSON.stringify(value))
    }
    get<T>(name: string, defaultValue?: T): null | T {
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

export default Cache