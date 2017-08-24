var twitterKey = require("./key.js");

var Twitter = require('twitter');
var request = require("request");

var liriCommand = process.argv[2];
var value = process.argv[3];


client = new Twitter({
    consumer_key: twitterKey.twitterKeys.consumer_key,
    consumer_secret: twitterKey.twitterKeys.consumer_secret,
    access_token_key: twitterKey.twitterKeys.access_token_key,
    access_token_secret: twitterKey.twitterKeys.access_token_secret,
  });



  switch (liriCommand) {
    case "my-tweets":
      myTweets();
      break;
  
    case "spotify-this-song":
      //deposit();
      break;
  
    case "movie-this":
      movie();
      break;
  
    case "do-what-it-says":
      //lotto();
      break;
  }


  function myTweets() {
    var params = {screen_name: 'linkstocheckout', count: 20};
    client.get('statuses/user_timeline', params, function(error, tweets, response) {
      if (!error) {
        for (var i = 0; i < 19; i++) {
            console.log(tweets[i].text + "\n");
        }
      }
    });
    }

    function movie() {
        if (value === "") {
            var queryUrl = "http://www.omdbapi.com/?i=tt0485947&plot=short&apikey=40e9cece";
            request(queryUrl, function(error, response, body) {
                
                  // If the request is successful
                  if (!error && response.statusCode === 200) {
                
                    console.log("Title: " + JSON.parse(body).Title);
                    console.log("Release Year: " + JSON.parse(body).Year);
                    console.log("IMDB Rating: " + JSON.parse(body).imdbRating);
                    //console.log("Rotten Tomatoes Rating: " + JSON.parse(body).Ratings[1].Value);
                    console.log("Filmed in: " + JSON.parse(body).Country);
                    console.log("Language: " + JSON.parse(body).Language);
                    console.log("Plot: " + JSON.parse(body).Plot);
                    console.log("Actors: " + JSON.parse(body).Actors);
                  }
                });
        }
        else {
            //var movieName = value;
            var queryUrl = "http://www.omdbapi.com/?t=" + value + "&y=&plot=short&apikey=40e9cece";
            request(queryUrl, function(error, response, body) {
                
                  // If the request is successful
                  if (!error && response.statusCode === 200) {
                
                    console.log("Title: " + JSON.parse(body).Title);
                    console.log("Release Year: " + JSON.parse(body).Year);
                    console.log("IMDB Rating: " + JSON.parse(body).imdbRating);
                    //console.log("Rotten Tomatoes Rating: " + JSON.parse(body).Ratings[1].Value);
                    console.log("Filmed in: " + JSON.parse(body).Country);
                    console.log("Language: " + JSON.parse(body).Language);
                    console.log("Plot: " + JSON.parse(body).Plot);
                    console.log("Actors: " + JSON.parse(body).Actors);
                  }
                });
        }

    }


    // Title of the movie.
    // Year the movie came out.
    // IMDB Rating of the movie.
    // Rotten Tomatoes Rating of the movie.
    // Country where the movie was produced.
    // Language of the movie.
    // Plot of the movie.
    // Actors in the movie.