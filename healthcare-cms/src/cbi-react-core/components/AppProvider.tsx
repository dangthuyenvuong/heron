
import { EnhancedStore } from '@reduxjs/toolkit'
import React from 'react'
import { Helmet } from 'react-helmet'
import { Provider } from 'react-redux'
import { Router } from 'react-router-dom'
import { TranslateProvider } from './TranslateProvider'
// import { Theme } from '@material-ui/core'
import { getTranslate } from 'cbi-react-core'
import { history } from '../utils/history'

type AppProviderProp = {
    theme?: Theme,
    store: EnhancedStore
}

export const AppProvider: React.FC<AppProviderProp> = ({ children, store, theme }) => {

    return (
        <Router history={history}>
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
        </Router>
    )
}