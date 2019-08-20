<h1>########## liri-node-app ###########</h1>
<h2>1. Problem Definition</h2>
   This node app solves 3 distinct problems
   a) Search spotify to return information about a song that is typed in the console
   b) Search OMDB to return information about a movie that is typed in the console
   c) Search either a song or a movie using a data file if no search input is provided by first generating a random number
<h2>2. High-level overview of how the app is organized</h2>
   This app is organized into the following sections
   a) Setup block. This is where the packages are loaded, key and environment files are pulled in.
   b) Song search block. This is where the Spotify search call is made according to the node package and the return data is processed.
   c) Movie search block. This is where the OMDB search call is made using axios and the return data is processed.
   d) Read from file block. This is where the file is read and the data in the file is used to make a movie or a song search.
<h2>3. Start-to-finish instructions on how to run the app</h2>
   a) In the console window, type in "node liri.js spotify-this-song 'followed by a song name'". This will return the information about the song you asked for.
   b) In the console window, type in "node liri.js movie-this 'followed by a movie name'". This will return the information about the movie you asked for.
   c) In the console window, type in "node liri.js do-what-it-says". This will return the information about a movie or a song specified in a file.
   d) In the console window, type in "node liri.js". Since no additional input was provided, the app will return the information about a movie or a song of it own choice.
   e) In the console window, type in "node liri.js spotify-this-song without anything after that. This will return the information about a random song.
   f) In the console window, type in "node liri.js movie-this without anything after that. This will return the information about a random movie.
<h2>4. Screenshots, gifs or videos of the app functioning</h2>
   a) See github for it. A total of 10 screen shots have been provided and is in the folder screen-shots.
<h2>5. Link to a deployed version of the app</h2>
   a) Link to run the node app: https://github.com/patrickvenkat/liri-node-app
<h2>6. List the technologies used in the app</h2>
   a) Packages: Spotify Node API, OMBD node API, File System, Axios, Moment, dotenv.
   b) Files: .gitignore to store links to the key files. Key and env files to protect client ID and Secret from pushing up to GitHub.
<h2># 7. Your role in the app development</h2>
   a) Soup to nuts. Design, develop, test and deliver.