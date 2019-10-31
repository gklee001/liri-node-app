# liri-node-app
Liri is an application that will search for concerts, songs, and movies!

Technologies Used:
-Node-Spotify-API 
https://www.npmjs.com/package/node-spotify-api
-Axios
https://www.npmjs.com/package/axios
-OMDB API
http://www.omdbapi.com
-Bands In Town API
http://www.artists.bandsintown.com/bandsintown-api
-Moment
https://www.npmjs.com/package/moment
-DontEnv
https://www.npmjs.com/package/dotenv


If you want to search what town your favorite artist is going to be in, you can search using "node liri.js concert-this 'name of artist'" and it will provide you the name of the venue, location, and date. Here is a screenshot of that:


![concert-this](assets/images/concert-this.JPG)







Liri can also pull up songs, a preview link to the song and provide the album name. You would type "node liri.js spotify-this-song 'name of song'" Heres an example of that!


![spotify-this-song)](assets/images/spotify-this-song.JPG)






If you search for a song that does not exist it will say "The Sign" instead. For example: "node lirir.js spotify-this-song '4948509374'"

![spotify-this-song-the-sign](assets/images/spotify-this-song-the-sign.JPG)





Another awesome command liri can do is look up movies! Liri will tell you the title of the movie, IMDB rating, Rotten Tomatoes rating, Country where it was produced, languages it is in, plot and actors/actress in the movie. You can run "node liri.js movie-this "Movie Name"


![movie-this](assets/images/movie-this.JPG)






And the final command it takes is "do-what-it-says" this will run the command "do-what-it-says" and run multiple strings located in my file random.txt, separted by new lines. Here is an example of what that looks like!

![do-what-it-says](assets/images/do-what-it-says.JPG)