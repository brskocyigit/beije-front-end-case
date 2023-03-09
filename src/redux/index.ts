import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { modalReducer } from "./reducers/modalReducer";
import { dailyPackageReducer, normalPackageReducer, tamponPackageReducer } from "./reducers/packageReducers";
import storage from 'redux-persist/lib/storage';
import {persistReducer} from 'redux-persist';
import persistStore from "redux-persist/es/persistStore";


const reducers = combineReducers({
    modal:modalReducer,
    normalPackage:normalPackageReducer,
    dailyPackage:dailyPackageReducer,
    tamponPackage:tamponPackageReducer,

});

const persistConfig = {
    key:'root',
    storage
}

const persistedReducer = persistReducer(persistConfig,reducers)

export type State = ReturnType<typeof reducers>

export const store = createStore(persistedReducer,applyMiddleware(thunk))
export const persistor = persistStore(store);