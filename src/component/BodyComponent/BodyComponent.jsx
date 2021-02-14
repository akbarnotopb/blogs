import React from "react"
import styles from "./BodyComponent.module.css"
import ReactMarkdown from 'react-markdown'

class BodyComponent extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            loading : true,
            text    : ""
        }
    }

    componentDidMount(){
        const request = new XMLHttpRequest()
        request.onreadystatechange = (result) => {
            if(result.target.status){
                this.setState({
                    text : result.target.responseText.split("https://github.com").join("https://raw.githubusercontent.com").split("/blob/").join("/")
                })
            }
        }
        request.open("GET","https://raw.githubusercontent.com/akbarnotopb/portofolio/main/Data%20Science/EDA/Covid%20Vaccinations%20EDA%20-%206%20Feb%202021.md")
        request.send()
    }

    render(){
        return (
            <article className={styles.body__component}>
                <ReactMarkdown children={this.state.text} />
            </article>
        )
    }

}

export default BodyComponent