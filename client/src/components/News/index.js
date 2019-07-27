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

componentDidMount() {
  // this.setState({candidate: this.props.candidate})
  axios.get("/api/news/"+this.state.candidate).then((response)=>{
    console.log("response", response.data)
    this.setState({ articles:response.data });
  }).catch(err => console.log(err))
    
  

// fetch(
  //   "https://newsapi.org/v2/top-headlines?q="+this.state.candidate+"&apiKey=a7f110578c3c478b87d1d9c4c0477600"
  // )
  //   .then(res => res.json())
  //   .then(data => data.articles)
  //   .then(articles => {
  //     this.setState({ articles });
  //   });
}


render() {
    console.log(this.state.articles)
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