import { combineReducers, applyMiddleware, createStore } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk"
import changeReducer from "./reducers/changeReducer"

const initialState = {

}

const reducers = combineReducers({
  change: changeReducer,
})

const store = createStore(reducers, initialState, composeWithDevTools(applyMiddleware(thunk)));

export default store;