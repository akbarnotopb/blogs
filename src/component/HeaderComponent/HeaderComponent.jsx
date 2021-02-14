import React from "react"
import styles from "./HeaderComponent.module.css"
class HeaderComponent extends React.Component{
    
    componentDidMount(){
    }
    
    render(){
        return (
            <header className={styles.header__container}>
                <a href="." className={styles.header__name}>AKBARNOTOPB</a>
            </header>
        )
    }
}

export default HeaderComponent