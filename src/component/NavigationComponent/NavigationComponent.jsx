import React from "react"
import { Link } from "react-router-dom"
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
        const Subnavigations = []

        let counter = 0
        this.props.details.subnav.forEach(element => {
            const route = process.env.PUBLIC_URL+this.props.details.url + element.url
            Subnavigations.push(<SubnavigationComponent key={counter++} details={element} url={route} />)
        })

        return (
            <li className={`${styles.navigation__container} ${styles.navigation} disable-hightlight`}>
                {(this.props.details.subnav.length)!==0?
                    <span onClick={this.toggleThisNavbar}>
                        <span className={"fa "+ ((this.state.open === true)? " fa-angle-down":" fa-angle-double-right")}></span> {this.props.details.title} {(this.props.details.subnav.length !== 0)? `(${this.props.details.subnav.length})`:""}

                    </span> 
                    :
                    <Link to={process.env.PUBLIC_URL+this.props.details.url}>
                        <span className={"fa "+ ((this.state.open === true)? " fa-angle-down":" fa-angle-double-right")}></span> {this.props.details.title} {(this.props.details.subnav.length !== 0)? `(${this.props.details.subnav.length})`:""}
                    </Link>
                }

                <ul style={{ listStyle:"none", padding:0, display:(this.state.open === false)?"none":"initial" }}>
                    {Subnavigations}
                </ul>
            </li>
        )
    }
}

export default NavigationComponent