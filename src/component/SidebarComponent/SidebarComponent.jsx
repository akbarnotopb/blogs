import React from "react"
import styles from "./SidebarComponent.module.css"
import profpic from "../../images/myfoto.jpg"
import NavigationComponent from "../NavigationComponent/NavigationComponent.jsx"

class SidebarComponent extends React.Component{


    render(){

        console.log(process.env.PUBLIC_URL)
        return (
            <nav className={styles.navbar__container}>
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
                    <NavigationComponent/>
                    <NavigationComponent/>
                    <NavigationComponent/>
                    <NavigationComponent/>
                    <NavigationComponent/>
                    <NavigationComponent/>
                    <NavigationComponent/>
                    <NavigationComponent/>
                    <NavigationComponent/>
                    <NavigationComponent/>
                    <NavigationComponent/>
                    <NavigationComponent/>
                    <NavigationComponent/>
                    <NavigationComponent/>
                </div>
            </nav>
        )
    }

}

export default SidebarComponent