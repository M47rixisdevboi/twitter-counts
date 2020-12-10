var config = require("./config.js");
var Twit = require('twit');
var T = new Twit(config);

tweetIt();
setInterval(tweetIt, 86400000)

function tweetIt(){
var d = new Date();
var calc = 25 - d.getDate();
var tweet =  calc + " days left until Christmas! Ho Ho Ho! ❄⛄🎄";

T.post('statuses/update', { status: tweet }, tweeted);

function tweeted(err, data, response) {
    if (err) {
      console.log(err);
    } else {
      console.log('Success: ' + data.text);
      //console.log(response);
    }
  };
}