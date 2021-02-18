import React from "react"
import styles from "./SubnavigationComponent.module.css"

const SubnavigationComponent = (props) => {
    return (
        <li className={styles.subnavigation}>
            <span onClick={props.toggleSubNavigation}>
                 <span className="fa fa-angle-right"></span> {props.details.title}
            </span>
        </li>
    )

}

export default SubnavigationComponent;