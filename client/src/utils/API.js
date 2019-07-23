import axios from "axios";

// The getRecipes method retrieves recipes from the server
// It accepts a "query" or term to search the recipe api for
export default {
  getNews: function(query) {
    return axios.get("/api/news");
  },
  getTweets: function(query) {
    return axios.get("/api/tweets");
  }
};