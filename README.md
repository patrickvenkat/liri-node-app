######################## liri-node-app ###########################
<h1>1. Problem Definition</h1>
   <h3> This node app solves 3 distinct problems<h3>
   <h3> a) Search spotify to return information about a song that is typed in the console</h3>
   <h3> b) Search OMDB to return information about a movie that is typed <h3>in the console</h3>
   <h3> c) Search either a song or a movie using a data file if no search input is provided</h3>
<h1>2. High-level overview of how the app is organized</h1>
   <h3>This app is organized into the following sections</h3>
   <h3>a) Setup block. This is where the packages are loaded, key and environment files are pulled in.</h3>
   <h3>b) Song search block. This is where the Spotify search call is made according to the node package and the return data is processed.</h3>
   <h3>c) Movie search block. This is where the OMDB search call is made using axios and the return data is processed.</h3>
   <h3>d) Read from file block. This is where the file is read and the data in the file is used to make a movie or a song search.</h3>
<h1>3. Start-to-finish instructions on how to run the app</h1>
   </h3>a) In the console window, type in "node liri.js spotify-this-song 'followed by a song name'". This will return the information about the song you asked for.</h3>
   </h3>b) In the console window, type in "node liri.js movie-this 'followed by a movie name'". This will return the information about the movie you asked for.</h3>
   </h3>c) In the console window, type in "node liri.js do-what-it-says". This will return the information about a movie or a song specified in a file.</h3>
   </h3>d) In the console window, type in "node liri.js". Since no additional input was provided, the app will return the information about a movie or a song of it own choice.</h3>
<h1>4. Screenshots, gifs or videos of the app functioning</h1>
   <h3>a) See github for it</h3>
<h1>5. Link to a deployed version of the app</h1>
   <h3>a) Link to run the node app:</h3>
<h1>6. List the technologies used in the app</h1>
   <h3>a) Packages: Spotify Node API, OMBD node API, File System, Axios, Moment, dotenv.</h3>
   <h3>b) Files: .gitignore to store links to the key files. Key and env files to protect client ID and Secret from pushing up to GitHub.</h3>
<h1># 7. Your role in the app development</h1>
   <h3>#a) Soup to nuts. Design, develop, test and deliver.</h3>