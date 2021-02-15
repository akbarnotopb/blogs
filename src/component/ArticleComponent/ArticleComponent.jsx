import React from "react"
import styles from "./ArticleComponent.module.css"
import ReactMarkdown from 'react-markdown'

class ArticleComponent extends React.Component{

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
        request.open("GET",this.props.article)
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

export default ArticleComponent