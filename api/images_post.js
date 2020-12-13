var config = require("./config.js");
var Twit = require('twit');
var Y = new Twit(config);
var I = new Twit(config);


var fs = require('fs'),
    path = require('path'),
    config = require(path.join(__dirname, 'config.js'));

  
  
  
    

    

upload_image();



function upload_image(){

  
    console.log('Opening an image...');
    var image_path = path.join(__dirname, './images/img_1.png'),
    b64content = fs.readFileSync(image_path, { encoding: 'base64', media_type: "image/png" });
    console.log('Uploading an image...');
    Y.post('media/upload', { media_data: b64content }, uploaded )
    function uploaded (err, data, response) {
      var tweet = "This is an image"
         

      if (err) {
        console.log(err);
      } else {
        console.log('Success: ' + data.text);
        //console.log(response);
      };
      I.post('statuses/update',{ status: tweet }, tweeted)
      function tweeted(err, data, response) {
        if (err) {
          console.log(err);
        } else {
          console.log('Success: ' + data.text);
          //console.log(response);
        }
    }
    }
    
  }