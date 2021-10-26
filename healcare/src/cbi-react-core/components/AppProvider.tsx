
import { EnhancedStore } from '@reduxjs/toolkit'
import React from 'react'
import { Helmet } from 'react-helmet'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { TranslateProvider } from './TranslateProvider'

import { Theme } from '@material-ui/core'
import 'antd/dist/antd.css'
import { getTranslate } from 'cbi-react-core'



type AppProviderProp = {
    // language?: string,
    // translate?: { [key: string]: { [key: string]: string } },
    theme?: Theme,
    store: EnhancedStore
}

export const AppProvider: React.FC<AppProviderProp> = ({ children, store, theme }) => {

    // let themStyle = useMemo(() => {
    //     return createTheme(theme)
    // }, [theme])

    return (
        <BrowserRouter>
            {/* <ThemeProvider theme={themStyle}> */}
            <TranslateProvider {...getTranslate()}>
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