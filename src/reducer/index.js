import navbarToggleReducer from "./navbartoggle.js"

import { combineReducers } from "redux"

const combineReducer = combineReducers({
    navbarToggled : navbarToggleReducer,
})

export default combineReducer