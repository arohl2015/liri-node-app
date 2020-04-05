// Info for Spotify
require("dotenv").config();
var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);
var Spotify = require("node-spotify-api");

// Core node package for reading and writing files
var fs = require("fs");
// Create var for axios to pull OMDB API and Bands in Town API data
var axios = require("axios");
//Rest of variables
var moment = require("moment");
var request = require("request");
// Takes in all of the command line arguments listed below
var command = process.argv[2];

//Make it so liri.js can take in each of the following commands:

// concert-this
// render the following information about each event to the terminal:
// Name of the venue
// Venue location
// Date of the Event (use moment to format this as "MM/DD/YYYY")

if (command === "concert-this") {
    var artist = process.argv[3];
    var bandURL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";
    axios.get(bandURL).then(
        function(response) {
          console.log ("Venue: ");
          console.log ("Location: ")
          console.log ("Date: ")
        }
    )};
  
// spotify-this-song
// show the following information about the song in your terminal/bash window
// Artist(s)
// The song's name
// A preview link of the song from Spotify
// The album that the song is from
// If no song is provided then your program will default to "The Sign" by Ace of Base.
 else if (command === "spotify-this-song") {

}


// movie-this
// output the following information to your terminal/bash window:
//   * Title of the movie.
//   * Year the movie came out.
//   * IMDB Rating of the movie.
//   * Rotten Tomatoes Rating of the movie.
//   * Country where the movie was produced.
//   * Language of the movie.
//   * Plot of the movie.
//   * Actors in the movie.
else if () {
    if (search === undefined) {
        console.log ()
    }
}

else if () {
    "http://www.omdbapi.com/?t=" + process.argv[3] + "&y=&plot=short&apikey=trilogy";
  
  }
// do-what-it-says
// Using the fs Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.
// It should run spotify-this-song for "I Want it That Way," as follows the text in random.txt.
// Edit the text in random.txt to test out the feature for movie-this and concert-this.
fs.readFile("random.txt", "utf8", function(err, data) {
    if (err) {
        return console.log(err);
      }

  
  
  
  

  
  
 


    



