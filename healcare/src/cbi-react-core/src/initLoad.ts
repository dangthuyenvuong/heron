import { AppConfig } from "../@types/AppConfig";



let _translate: TranslateObject = {
    language: 'en',
    translate: {
        en: {}
    }
}

let _rootProvider: AppConfig['providers'] = {} as AppConfig['providers']

type ProviderName = keyof AppConfig['providers']

/**
 * Init Provider
 * @param {providers: AppConfig}
 */
export const loadProvider = ({ providers }: AppConfig) => {
    _rootProvider = providers
}


/**
 * Init translate
 * @param locale 
 */
export const loadLocale = (locale: TranslateObject) => {
    _translate = {
        ..._translate,
        ...locale
    }
}

export const getTranslate = () => _translate

/**
 * 
 * @param name Provider name
 * @returns Provider
 * @example provider('cache') => AbstractCache
 */
export const provider = <T extends ProviderName>(name: T): AppConfig['providers'][T] => _rootProvider[name]
