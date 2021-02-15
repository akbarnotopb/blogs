import React from "react"
import styles from "./SubnavigationComponent.module.css"
import { Link } from "react-router-dom"

const SubnavigationComponent = (props) => {
    return (
        <li className={styles.subnavigation}>
            <Link to={props.url}>
                 <span className="fa fa-angle-right"></span> {props.details.title}
            </Link>
        </li>
    )

}

export default SubnavigationComponent;