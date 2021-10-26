
type Paginate<T> = {
    total: number,
    currentPage: number,
    data: T[]
}

type GetParams<T> = Partial<T> & {  
    limit?: number
    page?: number
    sort?: string
}
export abstract class Service<T> {

    protected _url = ''
    protected _token  = false
    // constructor() { }

    hanleRequest() { }
    refreshToken() { }
    token() { 
        return this;
    }
    get<T>(url?: string, options?: Object) { 
        
    }

    getOne(){

    }
    post() { }
    put() { }
    delete() { }

    // create(...ref: Parameters<typeof post>) { 
    //     return this.post(...ref)
    // }
    // udpate(...ref: Parameters<typeof this.put>) { 
    //     return this.put(...ref)
    // }

    paginate(options?: GetParams<T>) { 
        return this.get(this._url, options)
    }
}