import React, { Component } from "react";
// import API from "../../utils/API";


class News extends Component {
 
  state = {
    articles: [],
    candidate: "trump"
  };
componentDidMount() {
  fetch(
    "https://newsapi.org/v2/top-headlines?q="+this.state.candidate+"&apiKey=a7f110578c3c478b87d1d9c4c0477600"
  )
    .then(res => res.json())
    .then(data => data.articles)
    .then(articles => {
      this.setState({ articles });
    });
}


render() {
    console.log(this.state.articles)
    return (
        <div>{this.state.articles.map(article => {
          return (
             <p>{article.title}</p>
          );
        })}</div>
    );
}

}

export default News