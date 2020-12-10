var config = require("./config.js");
var Twit = require('twit');
var I = new Twit(config);

var fs = require('fs'),
    path = require('path'),
    config = require(path.join(__dirname, 'config.js'));

upload_image();
 
function upload_image(images){
  images = require("./images.js")
    console.log('Opening an image...');
    var image_path = path.join(__dirname, './images.js'),
        b64content = fs.readFileSync(image_path, { encoding: 'base64', media_type: "image/png" });
    console.log('Uploading an image...');
    I.post('media/upload', { media_data: b64content }, uploaded )
    function uploaded (err, data, response) {
      var id = data.media_id_string
      var tweet = {
          status: "This is an image",
          media_ids: [id]

      }
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