import { HTTPStatus } from '../../constant'
import { URLHelper } from '..'
export abstract class AbstractHttp {
    abstract url_refresh_token : string
    hanleRequest() { }
    abstract setToken(token: string) : void
    abstract getToken(): string
    abstract setupHeader() : void | RequestInit['headers']

    
    private async handleStatus(response: Response) : Promise<any>{
        // switch (response.status) {
        //     case HTTPStatus.FORBIDEN:
        //         return await this.refreshToken()
        //     case HTTPStatus.UNAUTHORIZED:
        //         throw {
        //             status: HTTPStatus.UNAUTHORIZED,
        //             message: 'Unauthorized'
        //         }
        // }
        return true
    }
    private async refreshToken() {
        let token = this.getToken()
        if(token){
            let newToken = await this.post('/refresh-token',{
                headers: {
                    Authorization: token
                }
            })
            this.setToken(newToken.accessToken)
            token = newToken.accessToken
        }
        
        return token
        
    }
    get<T>(url: string, options?: URLGetParams): Promise<T> {
        if (options) {
            url += URLHelper.parse(options)
        }
        return this.callApi(url)
    }

    post(url: string, options?: RequestInit) { 
        return this.callApi(url, options)
    }
    put() { }
    delete() { }

    async callApi(...params: [input: RequestInfo, init?: RequestInit]) {
        let res = await fetch(...params);

        await this.handleStatus(res)
        
        return await res.json()
    }
}

fetch('adsfasdf', {
   
})