require("dotenv").config();
var Spotify = require('node-spotify-api');
var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);
var moment = require('moment');




// run a request with axios, the first will be the action, the second is the value.
var commands = process.argv[2];
var value = process.argv[3];
//we will then create a switch-case statement
switch (commands) {
    case "concert-this":
        console.log("this is the first switch")
        concertThis(value);
        break;

    case "spotify-this-song":
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


// * Name of the venue

// * Venue location

// * Date of the Event (use moment to format this as "MM/DD/YYYY")

function concertThis() {
    //fs is a core node package for reading and writing files
    var axios = require("axios");

    var queryURL = "https://rest.bandsintown.com/artists/" + value + "/events?app_id=codingbootcamp"
    //run the axios.get function, grab the url and returns a promise
    axios.get(queryURL).then(function (response) {
        var results = response.data;
        // console.log(results)
        //for loop through objects
        for (var i = 0; i < 5; i++) {
            var time = moment(results[i].datetime).format("MMM Do YYYY")
            // console.log("-------------------------------------------------------")
            console.log("Name of Venue: " + results[i].venue.name)
            console.log("Located in: " + results[i].venue.city)
            console.log("date: " + time)
            // console.log(results[i])
        }
    })
        .catch(function (error) {
            if (error.response) {
                console.log(error.response.data)
            }
        })
}
// * Artist(s)

//      * The song's name

//      * A preview link of the song from Spotify

//      * The album that the song is from

//    * If no song is provided then your program will default to "The Sign" by Ace of Base

function spotifySong(search) {
    spotify.search({ type: 'track', query: search, limit: 1 }, function (err, data) {
        var results = data;
        if (err) {
            return console.log('Error occurred: ' + err);
        }

        //need to use for-in to loop through objects to grab song name
        if (results.tracks.total === 0) {

            console.log("The Sign")
        }

        for (var i in results) {
            // console.log(results[i])
            var spotifyResults =
                console.log("-------------------------------------------------------")
            //have to write another loop to loop through items
            for (var j = 0; j < results[i].items.length; j++) {
                console.log("Song name; " + results[i].items[j].name);
                console.log("link to preview song: " + results[i].items[j].preview_url);
                console.log("Album name: " + results[i].items[j].album.name);
            }
        };


    });

}

