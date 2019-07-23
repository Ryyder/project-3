import axios from "axios";

// The getRecipes method retrieves recipes from the server
// It accepts a "query" or term to search the recipe api for
export default {
  getNews: function() {
   axios.get("/api/news").then((response)=>{
     console.log("response", response)
   }).catch(err => console.log(err))
  }
};
