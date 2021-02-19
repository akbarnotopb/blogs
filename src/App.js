
import React from "react"


import HeaderComponent from "./component/HeaderComponent/HeaderComponent.jsx"
import SidebarComponent from "./component/SidebarComponent/SidebarComponent.jsx"
import BodyComponent from "./component/BodyComponent/BodyComponent.jsx"

import { findNavigationFromPath } from "./routes.js"

import { Provider } from "react-redux"
import reducer from "./reducer"
import { createStore } from "redux"

const myVariable = new URLSearchParams(window.location.search).get("path");
var path = { main : "/", child : null}
if(myVariable !== null){
  let holder = myVariable.substr(1,(myVariable).length).split("/")

  if(holder[0].length !== 0){
    path = { 
      main : "/"+holder[0],
      child : (holder.length !== 1)? ("/"+holder[1]): null
    }
  }
}

var current_nav = findNavigationFromPath(path)

const store = createStore(
  reducer,
  { navbarToggled : false, navigationToggled : current_nav},
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
  
function App(){
  return (
      <div className="App">
        <Provider store={store}>
            <HeaderComponent/>
            <SidebarComponent/>
            <BodyComponent store={store} init={current_nav}/>
        </Provider>
      </div>
  );
}

export default App;
