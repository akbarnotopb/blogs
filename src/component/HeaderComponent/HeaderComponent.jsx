import React from "react"
import styles from "./HeaderComponent.module.css"

// import { useSelector } from "react-redux"
import { ToggleNavbar } from "../../action/navbartoggle.js"
import { useDispatch } from "react-redux"

function HeaderComponent(){
    const dispatch = useDispatch()
    return (
        <header className={styles.header__container}>
            <span className={"fa fa-navicon "+styles.header__toggle} onClick={() => dispatch(ToggleNavbar())}></span> 

            <a href="." className={styles.header__name}>AKBARNOTOPB</a>
        </header>
    )
}

export default HeaderComponent