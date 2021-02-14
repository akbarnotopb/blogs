import React from "react"
import styles from "./SubnavigationComponent.module.css"


const SubnavigationComponent = (props) => {

    return (
        <li className={styles.subnavigation}>
            <span> <span className="fa fa-angle-right"></span> Sub Alamat 1</span>
        </li>
    )

}

export default SubnavigationComponent;