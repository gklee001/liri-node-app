require("dotenv").config();
var Spotify = require('node-spotify-api');
var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);
var moment = require('moment');


// take two arguements set equal to process.argv[2 and 3]. The first will be the action, the second is the value.
var commands = process.argv[2];
var value = process.argv[3];
//we will then create a switch-case statement, the switch-case will direct which function gets run.
switch (commands) {
    case "concert-this":
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

//The function needs to search bands and render the following information:
// * Name of the venue
// * Venue location
// * Date of the Event (use moment to format this as "MM/DD/YYYY")

function concertThis() {
    //load the first package to read bands in town
    var axios = require("axios");
    var queryURL = "https://rest.bandsintown.com/artists/" + value + "/events?app_id=codingbootcamp"
    //run the axios.get function, grab the url and returns a promise
    axios.get(queryURL).then(function (response) {
        var results = response.data;
        console.log(results)
        //for loop through objects, limit it to 5, without limit it would pull up too much and at somepoint not provide venue name
        for (var i = 0; i < 5; i++) {
            var time = moment(results[i].datetime).format("MMM Do YYYY")
            console.log("-------------------------------------------------------")
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
//    * The song's name
//    * A preview link of the song from Spotify
//    * The album that the song is from
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


// * Title of the movie.
// * Year the movie came out.
// * IMDB Rating of the movie.
// * Rotten Tomatoes Rating of the movie.
// * Country where the movie was produced.
// * Language of the movie.
// * Plot of the movie.
// * Actors in the movie.

function movieThis() {
    var axios = require("axios");
    var queryURL = "https://www.omdbapi.com/?t=" + value + "&apikey=trilogy"

    axios.get(queryURL).then(
        function (response) {
            var results = response.data;
            console.log("Title of movie: " + results.Title)
            console.log("IMDB rating: " + results.Ratings[0].Value)
            console.log("Rotten Tomatoes rating: " + results.Ratings[1].Value)
            console.log("Country where movie was produced: " + results.Country)
            console.log("Language is in: " + results.Language)
            console.log("plot of the movie: " + results.Plot)
            console.log("Actors/Actress in the movie: " + results.Actors)
        }
    )
}


function doIt() {
    var fs = require("fs");
    //run readFile module
    fs.readFile("../../random.txt", "utf8", function (err, data) {
        if (err) {
            return console.log(err);
        }
        else {
            console.log(data)
            return data

        }
    })
    //random.txt is separated by comma, command and value
    var output = data.split(",");
    for (var i = 0; i < output.length; i++) {
        console.log(output[i])
    }
}
