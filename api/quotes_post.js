var config = require("./config.js");
var Twit = require('twit');
var Q = new Twit(config);


var quotes = [
  "'Christmas isn't just a day, it's a frame of mind.' — Valentine Davies, Miracle on 34th Street",
  
  "'Christmas waves a magic wand over this world, and behold, everything is softer and more beautiful.' ― Norman Vincent Peale",
  
  "'One of the most glorious messes in the world is the mess created in the living room on Christmas day. Don't clean it up too quickly.' - Andy Rooney",
  
  "'What I don't like about office Christmas parties is looking for a job the next day.' ― Phyllis Diller",
  
  "'Christmas was on its way. Lovely, glorious, beautiful Christmas, upon which the entire kid year revolved.' ― Jean Shepherd, A Christmas Story",
  
  "'Let's just say that on this day, a million years ago, a dude was born who most of us think was magic. But others don't, and that's cool. But we're probably right. Amen.' ― Homer Simpson",
  
  "'Our hearts grow tender with childhood memories and love of kindred, and we are better throughout the year for having, in spirit, become a child again at Christmas-time.' ― Laura Ingalls Wilder",
  
  "'Nothing says holidays like a cheese log.' ― Ellen DeGeneres",
  
  "'Christmas is doing a little something extra for someone.' ― Charles Schulz",
  
  "'I throw a Christmas party at my house. It's not really a Christmas party, because I don't want to call it a Christmas party. But let's just say I put a lot of Christmas trees around the house, so it smells good.' ― Bill Murray",
  
  "'I will honor Christmas in my heart, and try to keep it all the year.' ― Ebenezer Scrooge in A Christmas Carol by Charles Dickens. ",
  
  "'My idea of Christmas, whether old-fashioned or modern, is very simple: loving others. Come to think of it, why do we have to wait for Christmas to do that?' — Bob Hope ",
  
  "'Unless we make Christmas an occasion to share our blessings, all the snow in Alaska won’t make it white.' — Bing Crosby",
  
  "'The best thing about Christmas is not the presents, but the people, the memories and the time you spend with them.' - Abyzls"



];



var counter = 0;


var g = new Date()
if (Date == Date("December 25 2020 00:00")){

  tweetIt2();
  setInterval(tweetIt2, 3600000)


function tweetIt2(){
    
    Swap()
    function Swap(){  
      switch(counter){
         case 0:
            tweet = quotes[0];
            counter++;
            break;

         case 1:
             tweet = quotes[1];
             counter++;
             break;

         case 2:
             tweet = quotes[2];
             counter++;
              break;
         case 3:
             tweet = quotes[3];
             counter++;
              break;

         case 4:
             tweet = quotes[4];
             counter++;
              break;

         case 5:
             tweet = quotes[5];
             counter++;
              break;

         case 6:
             tweet = quotes[6];
             counter++;
              break;

         case 7:
             tweet = quotes[7];
             counter++;
              break;

         case 8:
             tweet = quotes[8];
             counter++;
              break;

         case 9:
             tweet = quotes[9];
             counter++;
              break;

         case 10:
             tweet = quotes[10];
             counter++;
              break;

         case 11:
             tweet = quotes[11];
             counter++;
              break;

         case 12:
             tweet = quotes[12];
             counter++;
              break;

         case 13:
             tweet = quotes[13];
             counter++;
              break;

         default:
            tweet = "Merry Christmas! I hope you enjoyed today! I'll be back in 2021!";
            counter = 0;
              break;
  
  
      }
      
  }
 
  Q.post('statuses/update', { status: tweet }, tweeted);
    
    function tweeted(err, data, response) {
        if (err) {
          console.log(err);
        } else {
          console.log('Success: ' + data.text);
          //console.log(response);
        }
      };
      
    }
  
}