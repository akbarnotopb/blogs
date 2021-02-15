
import React from "react"
import HeaderComponent from "./component/HeaderComponent/HeaderComponent.jsx"
import SidebarComponent from "./component/SidebarComponent/SidebarComponent.jsx"
import BodyComponent from "./component/BodyComponent/BodyComponent.jsx"

import { useSelector } from "react-redux"

function App(){  
  return (
    <div className="App">
          <HeaderComponent/>
          <SidebarComponent/>
          <BodyComponent/>
        </div>
    );
}

export default App;
