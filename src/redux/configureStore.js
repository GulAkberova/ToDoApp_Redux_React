import { legacy_createStore,combineReducers } from "redux";
import toDoReducer from "./reducers/toDoReducer";
const reducer= combineReducers({
    toDoReducer

})

function configureStore(){
    return legacy_createStore(reducer)
}
export default configureStore
