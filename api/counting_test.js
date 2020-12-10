var config = require("./config.js");
var Twit = require('twit');
var T = new Twit(config);

var d = new Date();
var d1 = new Date('December 11, 2020 00:00:00');
var d2 = new Date('December 11, 2020 00:00:00');
var d3 = new Date('December 11, 2020 00:00:00');
//const dt = new Date('December 24, 2020 00:00:00');

 d1.setDate(25);
 d2.setDate(26);
 d3.setDate(27);

///dt.setDate(25);
//console.log(dt)
 var calc = d1.getDate() - d.getDate();
if (d < d1.getDate()) { var tweet =  calc + " days left until Christmas! Ho Ho Ho! ❄⛄🎄";}
 else if(d == d1.getDate() && d < d2.getDate()) { var tweet = "Today is Christmas! Ho Ho Ho! ❄⛄🎄";}
    else if (d == d2.getDate() && d < d3.getDate()){ var tweet = "Today is also Christmas! Ho Ho Ho! ❄⛄🎄";}
      else { return;}

tweetIt();
setInterval(tweetIt, 86400000)

function tweetIt(){

  

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
