import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import * as serviceWorker from './serviceWorker'
import './index.css'
import { Provider } from 'react-redux'
import { persistor, store } from './redux/index'
import { PersistGate } from 'redux-persist/integration/react'

const root = createRoot(document.getElementById('root')!) // createRoot(container!) if you use TypeScript
root.render(
    <PersistGate loading={null} persistor={persistor}>
        <Provider store={store}>
            <App />
        </Provider>
    </PersistGate>
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
