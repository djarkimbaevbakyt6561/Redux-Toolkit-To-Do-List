import { combineReducers, createStore } from "redux";
import { authReducer } from "./auth";
import { loginReducer } from "./login";
import { todosReducer } from "./todos";

const rootReducer = combineReducers({
    auth: authReducer,
    login: loginReducer,
    todos: todosReducer,
})
export const store = createStore(rootReducer)