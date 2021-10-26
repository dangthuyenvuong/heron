import { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { AppProvider, loadProvider } from 'cbi-react-core';
import { reducers } from './app/store';
import { renderRouter } from './routers';
import { en, vi } from './locales'
import app from 'config/app';
import './views/styles/index.scss';
import theme from 'views/theme';

loadProvider(app)

ReactDOM.render(
  // <React.StrictMode>
  <AppProvider
    reducers={reducers}
    language="en"
    translate={{ en, vi }}
    theme={theme}
  >
    <Suspense fallback={<div>Loading....</div>}>
      {renderRouter}
    </Suspense>
  </AppProvider >
  // </React.StrictMode>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
