const navigationToggleReducer = (state = {
    url :"/",
    api :"https://raw.githubusercontent.com/akbarnotopb/portofolio/main/Data%20Science/EDA/Covid%20Vaccinations%20EDA%20-%206%20Feb%202021.md",
    subnav : false,
} , action) =>{
    switch(action.type){
        case "TOGGLE_NAVIGATION":
            return  action.payload
        default:
            return state
    }
}

export default navigationToggleReducer