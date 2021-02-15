import React from "react"
import ArticleComponent from "../ArticleComponent/ArticleComponent.jsx"

import {
    Switch,
    Route,
  } from "react-router-dom";
  import {ROUTE} from "../../routes.js"
  
class BodyComponent extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            redirect  : null,
            subscribe : null,
        }
    }
    
    render(){

        console.log(this.state)
        const routeComponent = []
        let counter = 0
        ROUTE.forEach(element=>{
            if(element.subnav.length === 0){
                const route = process.env.PUBLIC_URL+element.url
                routeComponent.push(
                <Route key={counter++} exact path={route}>
                    <ArticleComponent article={element.api}/>
                </Route>
                )
            }
            else{
                element.subnav.forEach(subnav => {
                const route = process.env.PUBLIC_URL+element.url+subnav.url
                routeComponent.push(
                    <Route  key={counter++} exact path={route}>
                    <ArticleComponent article={element.api} />
                    </Route>
                )
                })
            }
        })

        return(
            <Switch>
                {routeComponent}
            </Switch>
        )
    }
}

export default BodyComponent