import React from "react"
import styles from "./NavigationComponent.module.css"

import SubnavigationComponent from "./SubnavigationComponent/SubnavigationComponent.jsx"

class NavigationComponent extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            open : false
        }
    }

    toggleThisNavbar = ()=>{
        this.setState({
            open : !this.state.open
        })
    }

    render(){
        return (
            <li className={`${styles.navigation__container} ${styles.navigation} disable-hightlight`}>
                <span onClick={this.toggleThisNavbar}>
                    <span className={"fa "+ ((this.state.open === true)? " fa-angle-down":" fa-angle-double-right")}></span> Hackerrank (48)
                </span>
                <ul style={{ listStyle:"none", padding:0, display:(this.state.open === false)?"none":"initial" }}>
                    <SubnavigationComponent/>
                    <SubnavigationComponent/>
                    <SubnavigationComponent/>
                </ul>
            </li>
        )
    }
}

export default NavigationComponent