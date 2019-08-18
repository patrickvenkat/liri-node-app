// Start: Setup block************************************************
require("dotenv").config();
// Include the axios npm package
let axios = require("axios");
let fs = require("fs");
// Include the spotify npm package
let Spotify = require("node-spotify-api");
let keys = require("./keys.js");
let spotify = new Spotify(keys.spotify);
// End: Setup block***************************************************

// Start: Process the command line input for song search*************
let songName = "";
//Take input from the command line and display information about the song
if (process.argv[2] == "spotify-this-song") {
    for (i=3; i<process.argv.length; i++){
        songName += process.argv[i] + " ";
    }
    //Call the search song function.
    searchSpotify(songName);
  }
// End: Process the command line input for song search****************

//Start: Song search function block of code**************************
function searchSpotify(songName){
  // Make a request to Spotify
  spotify.search({type: 'track', query: songName})
    .then(function (spotifyData) {
      if (spotifyData.tracks.total != 0){
        console.log(`
        **********Information is below for your song, ${spotifyData.tracks.items[0].name} *************
        `)
        let dataForFile = `
        **********Information is below for your song, ${spotifyData.tracks.items[0].name} *************`
        appendToLogFile(dataForFile);
        // Loop through and print the artists from the array.
        for (a=0; a<spotifyData.tracks.items[0].artists.length; a++){
          console.log(`
          Artist ${a+1}----------: ${spotifyData.tracks.items[0].artists[a].name}
          `);
          dataForFile =`
          Artist ${a+1}----------: ${spotifyData.tracks.items[0].artists[a].name}`
          appendToLogFile(dataForFile);
        }
        // Print the name, preview url and the album name.
          console.log(`
          The song's name---: ${spotifyData.tracks.items[0].name}
          The preview URL---: ${spotifyData.tracks.items[0].preview_url}
          The album name----: ${spotifyData.tracks.items[0].album.name}
        `)
          dataForFile =`
          The song's name---: ${spotifyData.tracks.items[0].name}
          The preview URL---: ${spotifyData.tracks.items[0].preview_url}
          The album name----: ${spotifyData.tracks.items[0].album.name}
        `
        appendToLogFile(dataForFile);
      } else{
        console.log(`
      **********Information is below for your song, ${songName} *************
        Sorry! Song not found!
        `);
        let dataForFile = `
      **********Information is below for your song, ${songName} *************
        Sorry! Song not found!
        `
        appendToLogFile(dataForFile);
      }
      songName = "";
    })
    .catch(function(error) {
      if (error.Response == "False") {
        // The server responded with a status code
        // that falls out of the range of 2xx
        console.log("---------------Data---------------");
        console.log(error.response.data);
        console.log("---------------Status---------------");
        console.log(error.response.status);
        console.log("---------------Status---------------");
        console.log(error.response.headers);
      } else if (error.request) {
        console.log(error.request);
      } else {
        // Something happened in setting up the request that 
        // triggered an Error
        console.log("Error", error.message);
      }
      console.log(error.config);
      songName = "";
  });
}
// End: Song search function block of code*****************************

// Start: Process the command line input for movie search*************
let movieName = "";
//Take input from the command line and display information about the movie
// Note: The movie can be any number of words and code will still be able to process it.
if (process.argv[2] == "movie-this") {
    for (i=3; i<process.argv.length; i++){
        movieName += process.argv[i] + " ";
    }
    // Call the searchMovie function
    searchMovie(movieName);
  }
// End: Process the command line input for movie search*************

//Start: Movie search function block of code**************************
function searchMovie(movieName){
  // Then run a request with axios to the OMDB API with the movie specified
  axios.get("http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy")
  .then(function(response) {    
      if (response.data.Response == "True"){
        console.log(`
        **********Information is below for your movie, ${movieName} *************
        The movie title is----------------------:${response.data.Title}
        The Year the movie came out-------------:${response.data.Year}
        The Rotten Tomatoes rating of the movie-:${response.data.Ratings[1].Value}
        The Country where the movie was produced:${response.data.Country}
        The Language of the movie---------------:${response.data.Language}
        The Plot of the movie-------------------:${response.data.Plot}
        The Actors in the movie-----------------:${response.data.Actors}
        The IMDB rating of the movie------------:${response.data.imdbRating}
        The response of the call----------------:${response.data.Response}
        `);
        let dataForFile = `
        **********Information is below for your movie, ${movieName} *************
          The movie title is----------------------:${response.data.Title}
          The Year the movie came out-------------:${response.data.Year}
          The Rotten Tomatoes rating of the movie-:${response.data.Ratings[1].Value}
          The Country where the movie was produced:${response.data.Country}
          The Language of the movie---------------:${response.data.Language}
          The Plot of the movie-------------------:${response.data.Plot}
          The Actors in the movie-----------------:${response.data.Actors}
          The IMDB rating of the movie------------:${response.data.imdbRating}
        `
        appendToLogFile(dataForFile);
      } else{
        console.log(`
        **********Information is below for your movie, ${movieName} *************
          Sorry! ${response.data.Error}
        `);
        let dataForFile = `
        **********Information is below for your movie, ${movieName} *************
          Sorry! ${response.data.Error}
        `
        appendToLogFile(dataForFile);
      }
      movieName = "";
    })
    .catch(function(error) {
      if (error.Response == "True") {
        // The server responded with a status code
        //  that falls out of the range of 2xx
        console.log("---------------Data---------------");
        console.log(error.response.data);
        console.log("---------------Status---------------");
        console.log(error.response.status);
        console.log("---------------Status---------------");
        console.log(error.response.headers);
        } else if (error.request) {
          console.log(error.request);
        } else {
          // Something happened in setting up the request that 
          // triggered an Error
          console.log("Error", error.message);
        }
        console.log(error.config);
        movieName = "";
  });
}
// End: Movie search function block of code**************************

// Start: Process the command line input for do-what-it-says*************
if (process.argv[2] == "do-what-it-says"){
    // Call the searchMovie function
    doWhatItSays();
  }
  else if(process.argv.length <= 2){
    searchForRandomSongorMovie();
  }
// End: Process the command line input for do-what-it-says****************

// Start: File read and processing function block of code*****************
function doWhatItSays(){
  fs.readFile("random.txt", "utf8", function(error, data) {
    // Log the error to the console in case there is an error.
    if (error) {
      return console.log(error);
    }
    // Then split it by commas to make it more readable and create an array
    var dataArr = data.split(",");
    // Loop through the array to execute the request
    for (n=0; n<dataArr.length; n++){
      if (dataArr[n] == "spotify-this-song"){
        searchSpotify(dataArr[n+1]);
      }else if (dataArr[n] == "movie-this"){
        searchMovie(dataArr[n+1]);
      }
    }
    // if (dataArr[0] == "spotify-this-song"){
    //   searchSpotify(dataArr[1]);
    // }
  });
}
// End: File read and processing function block of code*******************

// Start: File read and processing random movie or song block of code*****************
function searchForRandomSongorMovie(){
  fs.readFile("random.txt", "utf8", function(error, data) {
    // Log the error to the console in case there is an error.
    if (error) {
      return console.log(error);
    }
    // Then split it by commas to make it more readable and create an array
    var dataArr = data.split(",");

    // Loop through the array to execute the request
    console.log(`You didnt enter a movie or a song. So, the app will random pick a movie or a song for you`);
    let randomSongOrMovie = Math.floor(Math.random() * dataArr.length);

    if (randomSongOrMovie % 2 != 0){
      randomSongOrMovie --;
    } 
  
    if (dataArr[randomSongOrMovie] == "spotify-this-song"){
      searchSpotify(dataArr[randomSongOrMovie + 1]);
    } else if (dataArr[randomSongOrMovie] == "movie-this"){
      searchMovie(dataArr[randomSongOrMovie + 1]);
    }             

  });
}
// End: File read and processing function block of code*******************

// Start: Write to log file processing function block of code*************
function appendToLogFile(textInput){
  fs.appendFile("liriLog.txt", textInput, function(err) {
    // If an error was experienced we will log it.
    if (err) {
      console.log(err);
    }
    // If no error is experienced, we'll log the phrase "Content Added to Log File" to our node console.
    else {
      console.log("Content Added to Log File!");
    }
  });
}
// End: Write to log file processing function block of code************