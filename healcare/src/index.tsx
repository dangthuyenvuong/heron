import { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { AppProvider, loadProvider, loadLocale } from 'cbi-react-core';
import { RouterPage } from './routers';
import { en, vi } from './locales'
import { app } from 'config';
// import 'views/styles/app.css';
import theme from 'views/theme';
import store from 'app/store';
// import "views/assets/vendors/style";
import "views/styles/wieldy.scss";
import React from 'react'

loadProvider(app)
loadLocale({
  translate: { en, vi },
  language: 'en'
})


ReactDOM.render(
  <React.StrictMode>
    <AppProvider
      store={store}
      theme={theme}
    >
      <Suspense fallback={<div>Loading....</div>}>
        <RouterPage />
      </Suspense>
    </AppProvider >
  </React.StrictMode>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
