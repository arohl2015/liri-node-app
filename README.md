# LIRI-Node-App

### Overview:
LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a Language Interpretation and Recognition Interface. LIRI is a command line node app that takes in parameters and gives you back data.

This app can take in one of the following commands:

 * `concert-this`
 * `spotify-this-song`
 * `movie-this`
 * `do-what-it-says`

 ### What Problem Does This App Solve?

 This app solves the problem of looking for information on multiple websites. By pulling data from OMDB, Spotify, and Bandsintown, an individual can search for their favorite artists and movies in one place.

 ### Running the App:

 1. `node liri.js concert-this <artist/band name here>`
 
     * Name of the venue
     * Venue location
     * Date of the Event (use moment to format this as "MM/DD/YYYY")

    *If no artist/band is provided, LIRI will default to Lady Gaga.*

![Default](/images/concert-this default.PNG)

![User](/images/concert-this search.PNG)

2. `node liri.js spotify-this-song '<song name here>'`

     * Artist(s)
     * The song's name
     * A preview link of the song from Spotify
     * The album that the song is from

   *If the user doesn't type a movie in, LIRI will default to "The Sign" by Ace of Base.*

![Defaultsong](/images/spotifydefault.PNG)

![Usersong](/images/spotifysearch.PNG)

3. `node liri.js movie-this '<movie name here>'`

     * Title of the movie.
     * Year the movie came out.
     * IMDB Rating of the movie.
     * Rotten Tomatoes Rating of the movie.
     * Country where the movie was produced.
     * Language of the movie.
     * Plot of the movie.
     * Actors in the movie.

   *If the user doesn't type a movie in, LIRI will default to output data for the movie 'Mr. Nobody.'*

![Defaultmovie](/images/moviedefault.PNG)

![Usermovie](/images/moviesearch.PNG)

4. `node liri.js do-what-it-says`

   * Using the `fs` Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.

   *In this case, it will run `spotify-this-song` for "I Want it That Way" by The Backstreet Boys.*

![Dowhat](/images/dowhatitsays.PNG)

### Technologies Used:
-	Javascript
-	Node.js
-	Axios npm
-	Moment npm
-	DotEnv npm
-	Node-Spotify-API npm
-   Spotify API
-	OMDB API
-	Bands in Town API

