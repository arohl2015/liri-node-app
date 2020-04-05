//npm link to keys
require("dotenv").config();
//linking to the keys.js file
var keys = require("./keys.js");
// Info for Spotify
var spotify = new Spotify(keys.spotify);
var Spotify = require("node-spotify-api");

// Core node package for reading and writing files
var fs = require("fs");
// Create var for axios to pull OMDB API and Bands in Town API data
var axios = require("axios");
// Create Var for moment to format date/time correctly
var moment = require("moment");
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
    if (artist === undefined) {
        artist = "Pitbull";
    };
    var bandURL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";
    axios.get(bandURL).then(
        function (response) {
            console.log("Venue: " + );
            console.log("Location: " +);
            console.log("Date: " + );
            console.log("\n--------------\n");
        }
    );
    // spotify-this-song
    // show the following information about the song in your terminal/bash window
    // Artist(s)
    // The song's name
    // A preview link of the song from Spotify
    // The album that the song is from
    // If no song is provided then your program will default to "The Sign" by Ace of Base.
} else if (command === "spotify-this-song") {
    var song = process.argv[3];
    if (song === undefined) {
        song = "The Sign";
    };
    spotify.search


    console.log("Artist: " + );
    console.log("Song: " +);
    console.log("Preview Link: " + );
    console.log("Album: " + );
    console.log("\n--------------\n");

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
} else if (command === "movie-this") {
    var movie = process.argv[3];
    if (movie === undefined) {
        movie = "Mr. Nobody";
    };
    var movieURL = "http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy";
    axios.get(movieURL).then(
        function (response) {
        }

    console.log("Title: " + );
    console.log("Year Released: " +);
    console.log("IMDB Rating: " + );
    console.log("Rotten Tomatoes Rating: " + );
    console.log("Country Produced: " + );
    console.log("Language: " + );
    console.log("Plot: " + );
    console.log("Actors: " + );
    console.log("\n--------------\n");





// do-what-it-says
// Using the fs Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.
// It should run spotify-this-song for "I Want it That Way," as follows the text in random.txt.
// Edit the text in random.txt to test out the feature for movie-this and concert-this.
} else if (command === "do-what-it-says") {
    fs.readFile("random.txt", "utf8", function (err, data) {
        if (err) {
            return console.log(err);
        }
    }

