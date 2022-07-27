import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from "redux-thunk"
import {composeWithDevTools} from 'redux-devtools-extension'
import { UserLoginReducer, UserRegisterReducer, UserUpdateReducer } from './Reducers/UserReducers'
import { noteCreateReducer, noteDeleteReducer, noteListReducer, noteUpdateReducer } from './Reducers/NotesReducer'


const reducer = combineReducers({
    userLogin:UserLoginReducer,
    userRegister:UserRegisterReducer,
    noteList:noteListReducer,
    noteCreate:noteCreateReducer,
    noteUpdate:noteUpdateReducer,
    noteDelete:noteDeleteReducer,
    userUpdate:UserUpdateReducer
})


const userInfofromStorage = localStorage.getItem("quinoteuser")? JSON.parse( localStorage.getItem("quinoteuser").trim() ): null

const initalstate={
    userLogin:{quinoteuser:userInfofromStorage}
}

const middleware = [thunk]

const store = createStore(
    reducer,
    initalstate,
    composeWithDevTools(applyMiddleware(...middleware))
    )

export default store