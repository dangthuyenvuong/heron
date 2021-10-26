import React, { createContext, useCallback, useContext, useEffect, useState } from "react";

type TranslateContext = {
    t: (name: string) => string,
    selectLanguage: (name: string) => void
}

const Context = createContext<TranslateContext>({} as TranslateContext)

type TranslateProp = {
    language?: string,
    translate?: { [key: string]: { [key: string]: string } }
}

let _selectLanguage: (name: string) => void
let _t: (name: string) => string = (key: string) => key


// let _state: TranslateProp

export const TranslateProvider: React.FC<TranslateProp> = ({ children, language = 'en', translate = {} }) => {
    let [state, setState] = useState<Required<TranslateProp>>({
        language,
        translate
    })

    const t = useCallback((name: string) => {
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
    }, [state])


    return (
        <Context.Provider value={{ t, selectLanguage }}>
            {children}
        </Context.Provider>
    )
}

export const useTranslate = () => useContext(Context)

type TranslateType = () => ReturnType<typeof useTranslate>
export const locale: TranslateType = () => ({ t: _t, selectLanguage: _selectLanguage })

/**
 * 
 * @param text Text to translate
 * @returns String
 * @example t('Hello') => Xin chào
 */

export const t = (text: string) => _t(text)

