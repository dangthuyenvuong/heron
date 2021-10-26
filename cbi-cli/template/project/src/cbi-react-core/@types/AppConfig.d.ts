import { AbstractCache, AbstractHttp, AbstractLog, AbstractTranslate } from "cbi-react-core";


declare type AppConfig = {
    env: string,
    debug: boolean,
    asset_url: string,
    timezone: string,
    locale: string,
    providers: {
        cache: AbstractCache,
        log: AbstractLog,
        http: AbstractHttp,
    }
}