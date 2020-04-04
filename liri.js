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
var search = process.argv[3];

// //Make it so liri.js can take in one of the following commands:
// concert-this
// spotify-this-song
// movie-this
// do-what-it-says

if (command === "concert-this") {
  var bitURL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";
} else {
    
}


