
import { configureStore } from '@reduxjs/toolkit'
import React, { useMemo } from 'react'
import { Helmet } from 'react-helmet'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { TranslateProvider } from './TranslateProvider'



type AppProviderProp = {
    reducers?: {},
    language?: string,
    translate?: { [key: string]: { [key: string]: string } },
    theme?: Theme
}

export const AppProvider: React.FC<AppProviderProp> = ({ children, reducers = {}, translate, language, theme }) => {
    let store = useMemo(() => {
        return configureStore({
            reducer: reducers
        })
    }, [])

    // let themStyle = useMemo(() => {
    //     return createTheme(theme)
    // }, [theme])


    return (
        <BrowserRouter>
            {/* <ThemeProvider theme={themStyle}> */}
                <TranslateProvider translate={translate} language={language}>
                    <Provider store={store}>
                        <Helmet>
                            <meta charSet="utf-8" />
                        </Helmet>
                        {children}
                    </Provider>
                </TranslateProvider>
            {/* </ThemeProvider> */}
        </BrowserRouter>
    )
}