import { HTTPStatus } from 'cbi-react-core'
import { URLHelper } from '..'

export class AbstractHttp {
    protected url_refresh_token = ''
    protected setToken(token: string) { }
    protected getToken(): string {
        return ''
    }
    protected setupHeader(): void | RequestInit['headers'] {
        return {
            Authorization: this.getToken()
        }
    }

    protected async handleStatus(response: Response): Promise<any> {
        switch (response.status) {
            case HTTPStatus.FORBIDEN:
                return await this.refreshToken()
            case HTTPStatus.UNAUTHORIZED:
                throw {
                    status: 401,
                    message: 'Unauthorized'
                }
        }
        return true
    }
    protected async refreshToken() {
        let token = this.getToken()
        if (token) {
            let newToken = await this.post<{ accessToken: string }>('/refresh-token', {
                headers: {
                    Authorization: token
                }
            })
            this.setToken(newToken.accessToken)
            token = newToken.accessToken
        }

        return token

    }
    fetch<T>(url: string, options?: RequestInit) {
        options = Object.assign(options, this.setupHeader())
        return this.callApi<T>(url, options)
    }

    get<T>(url: string, options?: RequestInit): Promise<T> {
        if (options?.body) {
            url += URLHelper.parse(options?.body || {} as any)
        }
        options = Object.assign(options, this.setupHeader(), { method: 'GET' })
        return this.callApi<T>(url, options)
    }

    post<T>(url: string, options?: RequestInit): Promise<T> {
        options = Object.assign(options, this.setupHeader(), { method: 'POST' })
        return this.callApi<T>(url, options)
    }
    put<T>(url: string, options?: RequestInit): Promise<T> {
        options = Object.assign(options, this.setupHeader(), { method: 'PUT' })
        return this.callApi<T>(url, options)
    }
    delete<T>(url: string, options?: RequestInit): Promise<T> {
        options = Object.assign(options, this.setupHeader(), { method: 'DELETE' })
        return this.callApi<T>(url, options)
    }

    private async callApi<T>(...params: [input: RequestInfo, init?: RequestInit]) {
        let res = await fetch(...params);

        await this.handleStatus(res)

        return await res.json() as T
    }
}