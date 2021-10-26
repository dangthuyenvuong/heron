import AbstractHttp from "../Http/AbstractHttp"
import { URL } from '../URLHelper'

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


export abstract class AbstractModel<Model> {

    protected _url = ''
    abstract _http: AbstractHttp
    get(paginate?: GetParams<Model>): Paginate<Model> {
        return this._http.get<Paginate<Model>>(this._url, paginate)
    }
    getOne() { }
    create() { }
    delete() { }
    deleteOne() { }
    update() { }
    updateOne() { }

}