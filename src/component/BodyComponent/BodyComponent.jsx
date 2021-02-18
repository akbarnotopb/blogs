import React from "react"
import { connect } from "react-redux"
import ArticleComponent from "../ArticleComponent/ArticleComponent.jsx"

function BodyComponent(props){
    window.history.pushState({path:`?path=${props.url}`},'',`?path=${props.url}`);
    return(
        <ArticleComponent page={props.url} article={props.api}/>
    )
}

const mapStateToProps = (state) => {
    return { api : state.navigationToggled.api, 
             url : state.navigationToggled.url }
  }
  

export default connect(mapStateToProps)(BodyComponent)