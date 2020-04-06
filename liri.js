//npm link to keys
require("dotenv").config();
//linking to the keys.js file
var keys = require("./keys.js");
// Info for Spotify
var Spotify = require("node-spotify-api");
var spotify = new Spotify(keys.spotify);
// Core node package for reading and writing files
var fs = require("fs");
// Create var for axios to pull OMDB API and Bands in Town API data
var axios = require("axios");
// Create Var for moment to format date/time correctly
var moment = require("moment");
// Takes in all of the command line arguments listed below
var command = process.argv[2];
var parameter = process.argv.slice(3).join(" ") || "";

//Make it so liri.js can take in each of the following commands:

// concert-this
// render the following information about each event to the terminal:
// Name of the venue
// Venue location
// Date of the Event (use moment to format this as "MM/DD/YYYY")
function bandsintown(artist) {
    console.log("Artist", artist, "string");
    if (artist === "") {
        artist = "Pitbull";
    };
    var bandURL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";
    axios.get(bandURL).then(
        function (response) {
            var concerts = response.data;
            // console.log(response.data);
            for (let i = 0; i < concerts.length; i++) {
                console.log("Venue: " + concerts[i].venue.name);
                console.log("Location: " + concerts[i].venue.city + "," + concerts[i].venue.country);
                console.log("Date: " + moment(concerts[i].datetime).format("MM/DD/YYYY"));
                console.log("\n--------------\n");
            }
        }
    );
};
// spotify-this-song
// Artist(s)
// The song's name
// A preview link of the song from Spotify
// The album that the song is from
// If no song is provided then your program will default to "The Sign" by Ace of Base.
function mapartist(artist) {
    return artist.name
}

function songs(song) {
    if (song === "") {
        song = "The Sign, Ace of Base";
    };

    spotify.search({ type: 'track', query: song }, function (err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }

        //   console.log(data.tracks.items);
        var list = data.tracks.items;
        for (let i = 0; i < list.length; i++) {
            console.log("Artist: " + list[i].artists.map(mapartist));
            console.log("Song: " + list[i].name);
            console.log("Preview Link: " + list[i].preview_url);
            console.log("Album: " + list[i].album.name);
            console.log("\n--------------\n");
        }
    });
}
// movie-this  
// * Title of the movie.
//   * Year the movie came out.
//   * IMDB Rating of the movie.
//   * Rotten Tomatoes Rating of the movie.
//   * Country where the movie was produced.
//   * Language of the movie.
//   * Plot of the movie.
//   * Actors in the movie.
function movies(movie) {
    if (movie === "") {
        movie = "Mr. Nobody";
    };
    var movieURL = "http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy";
    axios.get(movieURL).then(
        function (response) {
            var movies = response.data;
            // console.log(response.data);
            console.log("Title: " + response.data.Title);
            console.log("Year Released: " + response.data.Year);
            console.log("IMDB Rating: " + response.data.Ratings[0].Value);
            console.log("Rotten Tomatoes Rating: " + response.data.Ratings[1].Value);
            console.log("Country Produced:" + response.data.Country);
            console.log("Language: " + response.data.Language);
            console.log("Plot: " + response.data.Plot);
            console.log("Actors: " + response.data.Actors);
            console.log("\n--------------\n");
            //attempted a for loop but it wouldn't console.log the data - moved to the format above
            // for (let i = 0; i < movies.length; i++) {
            // console.log("Title: " + movies[i].Title);
            // console.log("Year Released: " + movies[i].Year);
            // console.log("IMDB Rating: " + movies[i].Ratings[0].Value);
            // console.log("Rotten Tomatoes Rating: " + movies[i].Ratings[1].Value);
            // console.log("Country Produced:" + movies[i].Country);
            // console.log("Language: " + movies[i].Language);
            // console.log("Plot: " + movies[i].Plot);
            // console.log("Actors: " + movies[i].Actors);
            // console.log("\n--------------\n");
            // }
        });
    // Using the fs Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.
    // It should run spotify-this-song for "I Want it That Way," as follows the text in random.txt.
    // Edit the text in random.txt to test out the feature for movie-this and concert-this.

}
function dowhat() {
    fs.readFile("random.txt", "utf8", function (err, data) {
        if (err) {
            return console.log(err);
        }
    });
}

if (command === "concert-this") {
    bandsintown(parameter)
}

else if (command === "spotify-this-song") {
    songs(parameter)

} else if (command === "movie-this") {
    movies(parameter)

} else if (command === "do-what-it-says") {
    dowhat()
} else {
    console.log("invalid choice");
    process.exit(0);
}

