const navbarToggleReducer = (state = false , action) =>{
    switch(action.type){
        case "TOGGLE_NAVBAR":
            return !state
        default:
            return state
    }
}

export default navbarToggleReducer