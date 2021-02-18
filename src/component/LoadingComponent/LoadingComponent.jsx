import React from "react"
import styles from "./LoadingComponent.module.css"

function LoadingComponent(){
    return (
        <span className={"fa fa-spinner "+styles.spinning+" "+styles.spinner}></span>
    )
}

export default LoadingComponent