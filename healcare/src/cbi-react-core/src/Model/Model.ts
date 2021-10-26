import {  provider } from "cbi-react-core"

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

type DeleteResponse = {
    deleteCount: number
}

type UpdateResponse = {

}

export class Model<T>{
    protected url = ''
    protected http
    constructor() {
        this.http = provider('http')
    }
    paginate(paginate?: GetParams<T>) {
        return this.http.get<Paginate<T>>(this.url, { body: paginate || {} } as RequestInit)
    }
    getOne(id: string) {
        return this.http.get<T>(`${this.url}/${id}`)
    }
    create(value: T) {
        return this.http.post<T>(`${this.url}`, { body: value as any })
    }
    delete(id: string) {
        return this.http.delete<DeleteResponse>(`${this.url}/${id}`)
    }
    // deleteOne() { }
    update(id: string, value: Partial<T>) {
        return this.http.put<UpdateResponse>(`${this.url}/${id}`, { body: value as any })
    }
    // updateOne() { }
}