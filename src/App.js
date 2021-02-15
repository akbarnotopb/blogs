
import React from "react"


import HeaderComponent from "./component/HeaderComponent/HeaderComponent.jsx"
import SidebarComponent from "./component/SidebarComponent/SidebarComponent.jsx"
import BodyComponent from "./component/BodyComponent/BodyComponent.jsx"

import { Provider } from "react-redux"
import reducer from "./reducer"
import { createStore } from "redux"

import {
  BrowserRouter as Router,
} from "react-router-dom";

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

function App(){
  return (
      <div className="App">
        <Provider store={store}>
          <Router>
            <HeaderComponent/>
            <SidebarComponent/>
            <BodyComponent store={store}/>
          </Router>
        </Provider>
      </div>
  );
}

export default App;
