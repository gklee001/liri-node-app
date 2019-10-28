require("dotenv").config();
var Spotify = require('node-spotify-api');
var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);




//fs is a core node package for reading and writing files
var axios = require("axios");



//then run a request with axios, the first will be the action, the second is the value.
var commands = process.argv[2];
var value = process.argv[3];

//we will then create a switch-case statement
switch (commands) {
    case "concert-this":
        console.log("this is the first switch")
        concertThis(value);
        break;

    case "spotify-this-song":
        console.log("this is the 2 switch")
        spotifySong(value);
        break;

    case "movie-this":
        console.log("this is the 3 switch")
        movieThis(value);
        break;

    case "do-what-it-says":
        console.log("this is the 4 switch")
        doIt(value);
        break;
}

// * Artist(s)

//      * The song's name

//      * A preview link of the song from Spotify

//      * The album that the song is from

//    * If no song is provided then your program will default to "The Sign" by Ace of Base

function spotifySong() {
    spotify.search({ type: 'track', query: 'Cardi B', limit: 1 }, function (err, data) {
        var results = data;
        if (err) {
            return console.log('Error occurred: ' + err);
        }
        //need to use for in to loop through objects
        for (var i in results) {
            // console.log(results[i])
            var spotifyResults =
                "-------------------------------------------------------"
            //have to write another loop to loop through items
            for (var j = 0; j < results[i].items.length; j++) {
                console.log(results[i].items[j].name)
            }
        }
    });

}