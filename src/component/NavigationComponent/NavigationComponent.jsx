import React from "react"
import styles from "./NavigationComponent.module.css"

import SubnavigationComponent from "./SubnavigationComponent/SubnavigationComponent.jsx"

class NavigationComponent extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            open : false,
        }
    }

    toggleThisNavbar = ()=>{
        if(this.props.details.subnav.length > 0 ){
            this.setState({
                open : !this.state.open
            })
        }else{
            this.dispatchNavigation({
                url : this.props.details.url,
                api : this.props.details.api,
                subnav :false,
            })
        }
    }


    dispatchNavigation = (toggledNavigation) =>{
        this.props.dispatch(toggledNavigation)
    }

    render(){
        const Subnavigations = []

        let counter = 0
        this.props.details.subnav.forEach(element => {
            let toggledNavigation = {
                url : this.props.details.url + element.url,
                api : element.api,
                subnav : true,
            }
            Subnavigations.push(<SubnavigationComponent key={counter++} details={element} toggleSubNavigation={()=>{this.dispatchNavigation(toggledNavigation)}} />)
        })

        return (
            <li className={`${styles.navigation__container} ${styles.navigation} disable-hightlight`}>
                <span onClick={this.toggleThisNavbar}>
                    <span className={"fa "+ ((this.state.open === true)? " fa-angle-down":" fa-angle-double-right")}></span> {this.props.details.title} {(this.props.details.subnav.length !== 0)? `(${this.props.details.subnav.length})`:""}
                </span> 
                <ul style={{ listStyle:"none", padding:0, display:(this.state.open === false)?"none":"initial" }}>
                    {Subnavigations}
                </ul>
            </li>
        )
    }
}

export default NavigationComponent