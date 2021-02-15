const navigationToggleReducer = (state = process.env.PUBLIC_URL , action) =>{
    switch(action.type){
        case "TOGGLE_NAVIGATION":
            return  process.env.PUBLIC_URL+action.payload
        default:
            return state
    }
}

export default navigationToggleReducer