import { AbstractHttp, provider } from "cbi-react-core";

class Http extends AbstractHttp {
    url_refresh_token = '/refresh-token';
    setToken(token: string): void {
        provider('cache').set('token', token)
    }
    getToken() {
        return provider('cache').get('token') as string || ''
    }
    setupHeader() : any | RequestInit['headers']{
        return {
            Authorization: this.getToken()
        }
    }
}

export default new Http