import navbarToggleReducer from "./navbartoggle.js"
import navigationToggleReducer from "./navigationtoggle.js"

import { combineReducers } from "redux"

const combineReducer = combineReducers({
    navbarToggled : navbarToggleReducer,
    activeNavigation : navigationToggleReducer,
})

export default combineReducer