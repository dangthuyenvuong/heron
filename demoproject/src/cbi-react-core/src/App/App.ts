import { AppConfig } from "../../@types/AppConfig";

type ProviderName = keyof AppConfig['providers']

let _rootProvider: AppConfig['providers'] = {} as AppConfig['providers'] 
export const loadProvider = ({ providers }: AppConfig) => {
    _rootProvider = providers
}

// export class App{
//    static get<T extends ProviderName>(name: T) :AppConfig['providers'][T]{
//     //    throw new Error('aaaa')
//        return _rootProvider[name]
//    }
// }

export const provider = <T extends ProviderName>(name: T) : AppConfig['providers'][T]=> _rootProvider[name]