import React from "react"
import styles from "./ArticleComponent.module.css"
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'
import LoadingComponent from "../LoadingComponent/LoadingComponent.jsx"

class ArticleComponent extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            loading : true,
            text    : "",
            api     : this.props.article,
            url     : this.props.url,
        }
    }

    componentDidUpdate(prevProps){
        if(prevProps.article !== this.props.article){
            this.setState({
                loading : true
            }, () =>{
                this.updateContent()
            })
        }
    }

    updateContent(){
        const request = new XMLHttpRequest()
        request.onreadystatechange = (result) => {
            if(result.target.status){
                this.setState({
                    text : result.target.responseText.split("https://github.com").join("https://raw.githubusercontent.com").split("/blob/").join("/"),
                    loading :false,
                })
            }
        }
        request.open("GET",this.props.article)
        request.send()
    }

    componentDidMount(){
        this.updateContent()
    }

    render(){
        return (
            <article className={styles.body__component} title={this.state.url}>
                {(this.state.loading===true)?<LoadingComponent/>:<ReactMarkdown plugins={[ gfm ]} children={this.state.text} />}
            </article>
        )
    }

}

export default ArticleComponent