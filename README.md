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
     * Will default to Lady Gaga if the user does not input an artist/band name

EXAMPLES: 
![DefaultConcert](/images/concert-this default.png)

![UserConcert](/images/concert-this search.png)

