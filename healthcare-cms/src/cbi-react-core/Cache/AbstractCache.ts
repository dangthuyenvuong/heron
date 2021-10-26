export  abstract class AbstractCache {
    abstract get<T>(name: string, defaultValue?: T ): null | T 
    abstract set(name: string, value: any): void
    abstract remove(name: string): void
    rememberForever() { }
    forget() { }

    remember() { }
    pull(name: string) { }

    put(name: string, value: any | Function, ttl?: number) { }


    cache<T>(name: string, value: () => T | T): T {
        let val = this.get<T>(name)
        if (val) {
            return val
        }
        let valTemp = value?.() || value
        this.set(name, valTemp)
        return valTemp as T
    }


    has(key: string): boolean {
        return !!this.get(key)
    }

    increment(name: string) { }

    decrement(name: string) { }

    store(name: string) { }

    tags() { }

    flush() { }

}

