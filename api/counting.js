var config = require("./config.js");
var Twit = require('twit');
var TT = new Twit(config);


var d1 = new Date('2020-12-25');
var d2 = new Date('2020-12-26');
var d3 = new Date('2020-12-27');

console.log(d1); // output:2020-12-25T00:00:00.000Z, 25
console.log(d2); // output:2020-12-26T00:00:00.000Z, 26
console.log(d3); // output:2020-12-27T00:00:00.000Z, 27


tweetIt();
setInterval(tweetIt, 60000)

function tweetIt(){
var ts = Date.now();
var dt = new Date(ts);

if (dt < d1) { 
  var calc = d1.getDate() - dt.getDate();
    var tweet = calc + " days left until Christmas! Ho Ho Ho!❄⛄🎄"
     }
 else if(dt >= d1 && dt < d2) { 
     var tweet = "Today is Christmas! Ho Ho Ho!❄⛄🎄 "
  }
    else if(dt >= d2 && dt < d3) {
        var tweet = "Today is also Christmas! Ho Ho Ho! ❄⛄🎄"
    }
     else {
     return;}

TT.post('statuses/update', {status: tweet}, tweeted);

function tweeted(err, data, response) {
    if (err) {
      console.log(err);
    } else {
      console.log('Success: ' + data.text);
      //console.log(response);
    }
  };
  
}
