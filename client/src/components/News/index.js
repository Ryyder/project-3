import React, { Component } from "react";
import Newscard from "../Newscard"
import  "./style.css"
import axios from "axios";

// import API from "../../utils/API";


class News extends Component {
 
  state = {
    articles: [],
    candidate: this.props.candidate
  };

  componentDidUpdate(prevProps) {
    if(this.props.candidate !== prevProps.candidate){
      axios.get("/api/news/"+this.props.candidate).then((response)=>{
        console.log("response", response.data)
        this.setState({ articles:response.data });
      }).catch(err => console.log(err))
        
    }
  }





render() {
    // console.log(this.state.articles)
    return (
        <div className="cardDiv">{this.state.articles.map(article => {
          return (
            <Newscard imgurl={article.urlToImage} title={article.title} description={article.description} url={article.url}/> 
          );
        })}</div>
    );
}

}



export default News