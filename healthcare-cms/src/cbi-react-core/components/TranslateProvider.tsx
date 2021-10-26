import { provider } from "cbi-react-core";
import React, { createContext, useCallback, useContext, useEffect, useState } from "react";

type TranslateContext = {
    t: (name?: string) => string,
    selectLanguage: (name: string) => void,
    language: string
}

const Context = createContext<TranslateContext>({} as TranslateContext)

type TranslateProp = {
    language?: string,
    translate?: { [key: string]: { [key: string]: string } }
}

let _selectLanguage: (name: string) => void
let _t: (name?: string) => string = (key?: string) => key || ''
let _language: string


// let _state: TranslateProp

export const TranslateProvider: React.FC<TranslateProp> = ({ children, language = 'en', translate = {} }) => {
    let [state, setState] = useState<Required<TranslateProp>>({
        language,
        translate
    })

    useEffect(() => {
        provider('cache').set('language', state.language)
    }, [state.language])

    const t = useCallback((name?: string) => {
        if(!name) return ''
        return state.translate?.[state.language]?.[name] || name
    }, [state])

    const selectLanguage = useCallback((name: string) => {
        setState({
            ...state,
            language: name
        })
    }, [state])

    useEffect(() => {

        _t = t
        // _state = state
        _selectLanguage = selectLanguage
        _language = state.language
    }, [state])


    return (
        <Context.Provider value={{ t, selectLanguage, language: state.language }}>
            {children}
        </Context.Provider>
    )
}

export const useTranslate = () => useContext(Context)

type TranslateType = () => ReturnType<typeof useTranslate>
export const locale: TranslateType = () => ({ t: _t, selectLanguage: _selectLanguage, language: _language })

/**
 * 
 * @param text Text to translate
 * @returns String
 * @example t('Hello') => Xin chào
 */

export const t = (text?: string) => _t(text)

