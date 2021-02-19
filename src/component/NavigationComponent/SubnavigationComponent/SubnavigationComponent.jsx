import React from "react"
import styles from "./SubnavigationComponent.module.css"
import { connect  } from "react-redux"
const SubnavigationComponent = (props) => {
    const ismeactive = props.navigationToggled.subnav?("/"+props.navigationToggled.url.substr(1,props.navigationToggled.url.element).split("/")[1] === props.details.url):false
    console.log(ismeactive)
    return (
        <li className={`${styles.subnavigation} ${ismeactive? styles.active__subnavigation : ""}`} onClick={props.toggleSubNavigation}>
            <span >
                 <span className="fa fa-angle-right"></span> {props.details.title}
            </span>
        </li>
    )
}

const mapStateToProps = (state) => {
    return { navigationToggled   : state.navigationToggled }
}
export default connect(mapStateToProps)(SubnavigationComponent);