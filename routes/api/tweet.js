
var name = "realDonaldTrump";
var id_strings = [];

var T = new Twit({
  consumer_key: 'q0FiTHT26bJxIjldXF8g2EDVw',
  consumer_secret: 'WEBBW8erGtCBKA1gCDp8YCNpqTBLSkx3zwek0M0gdSE6gs3dYQ',
  access_token: '1136480334088814592-KHSFeLe6UTjEuavcNvrtZHTCZBEMfM',
  access_token_secret: 'zSpivL6RbF9pjCOisQqB5klBpB8fLC1S5iu27Sai1m1mv',
  timeout_ms: 60 * 1000,  // optional HTTP request timeout to apply to all requests.
  strictSSL: true,     // optional - requires SSL certificates to be valid.
})



// This function will query Twitter and return X Tweets from Y Candidate
function twitterSearch() {
  T.get('statuses/user_timeline', { screen_name: name, count: 2 }, function (err, data, response) {
    console.log(data);
    // console.log(data[0].id_str);
    for (let i = 0; i < numOfTweets; i++) {
      id_strings[i] = data[i].id_str
    }
    console.log(id_strings);
  })
}


