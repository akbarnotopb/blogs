import React from "react"
import styles from "./SidebarComponent.module.css"
import profpic from "../../images/myfoto.jpg"
import NavigationComponent from "../NavigationComponent/NavigationComponent.jsx"

import { ROUTE } from "../../routes.js"

import { ToggleNavbar } from "../../action/navbartoggle.js"
import  {NavigationTogle } from "../../action/navigationtoggle.js"
import { connect , useDispatch } from "react-redux"

function SidebarComponent(props){
        const toggle        = props.navbarToggled
        const navigation    = props.navigationToggled
        
        const navigations_component = []
        const dispatch  = useDispatch()

        let counter         = 0
        ROUTE.forEach(element => {
            navigations_component.push(
                <NavigationComponent open={("/"+navigation.url.substr(1,navigation.url.element).split("/")[0]) === element.url} active={("/"+navigation.url.substr(1,navigation.url.element).split("/")[0]) === element.url && !navigation.subnav} key={counter++} details={element} dispatch={(toggledNavigation) => {dispatch(NavigationTogle(toggledNavigation))}} />
            )
        })

        return (
            <nav className={`${styles.navbar__container} ` + ((toggle===true)?styles.navbar__container__small:'')}>
                {
                    (toggle)?<span onClick={()=>dispatch(ToggleNavbar())} className={"fa fa-close "+ styles.navbar__container__small__close}></span>:""
                }
                <div>
                    <div style={{ textAlign:"center" }}>
                        <figure className={styles.navbar__profpic__container}>
                            <img src={profpic} width="100%" alt=""/>
                        </figure>
                    </div>
                    <div className={styles.navbar__profile__description__container}>
                        <p>
                            <small>Written By</small>
                        </p>
                        <p style={{ color:"#f1c40f" }}>
                        <strong>Akbar Noto P.B</strong>
                        </p>
                        <p>
                            Data Science / Software Engineering / Back End Developer
                        </p>
                    </div>
                </div>
                <hr/>
                <div className="form-group">
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder={"Type Category / Title"} />
                        <span className="input-group-addon"> <span className="fa fa-search"></span> </span>
                    </div>
                </div>
                <div className={styles.navigation__component__container}>
                    {navigations_component}
                </div>
            </nav>
        )
    }
const mapStateToProps = (state) => {
    return { navbarToggled       : state.navbarToggled, 
             navigationToggled   : state.navigationToggled }
}

export default connect(mapStateToProps)(SidebarComponent)