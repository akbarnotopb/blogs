
import React from "react"
import HeaderComponent from "./component/HeaderComponent/HeaderComponent.jsx"
import SidebarComponent from "./component/SidebarComponent/SidebarComponent.jsx"
import BodyComponent from "./component/BodyComponent/BodyComponent.jsx"


class App extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      loading : false
    }
  }

  render(){
      return (
        <div className="App">
          {/* <HeaderComponent/> */}
          <SidebarComponent/>
          <BodyComponent/>
        </div>
    );
  }
}

export default App;
