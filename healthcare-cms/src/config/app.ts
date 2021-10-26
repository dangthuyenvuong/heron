/*
    |--------------------------------------------------------------------------
    | Autoloaded Service Providers
    |--------------------------------------------------------------------------
    |
    | The service providers listed here will be automatically loaded on the
    | request to your application. Feel free to add your own services to
    | this array to grant expanded functionality to your applications.
    |
    */

import Cache from "app/provider/cache.provider";
import Http from "app/provider/http.provider";
import Log from "app/provider/log.provider";
import { AppConfig } from "cbi-react-core/@types/AppConfig";

export const app: AppConfig = {
    asset_url: 'views/assets',
    debug: Boolean(process.env.DEBUG || false),
    locale: 'en',
    providers: {
        cache: Cache,
        http: Http,
        log: Log,
    },
    env: process.env.env || "development",
    timezone: process.env.timezone || "UTC"
}