import { AppConfig } from "./@types/AppConfig";




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
 * 
 * @param name Provider name
 * @returns Provider
 * @example provider('cache') => AbstractCache
 */
export const provider = <T extends ProviderName>(name: T): AppConfig['providers'][T] => _rootProvider[name]


/**
 * Init translate
 * @param locale 
 */
export const loadLocale = (locale: TranslateObject) => {
    _translate = {
        ..._translate,
        ...locale,
        language: provider('cache').get('language') || locale.language
    }
}


let _translate: TranslateObject = {
    language: 'en',
    translate: {
        en: {}
    }
}


export const getTranslate = () => _translate


