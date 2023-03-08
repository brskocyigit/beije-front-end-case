import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { modalReducer } from "./reducers/modalReducer";

const reducers = combineReducers({
    modal:modalReducer
});

export type State = ReturnType<typeof reducers>

export const store = createStore(reducers,applyMiddleware(thunk))