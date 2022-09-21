const http = require( 'http' ),
      fs   = require( 'fs' ),
      // IMPORTANT: you must run `npm install` in the directory for this assignment
      // to install the mime library used in the following line of code
      mime = require( 'mime' ),
      dir  = 'public/',
      port = 3000

// const appdata = [
//   { 'model': 'toyota', 'year': 1999, 'mpg': 23 },
//   { 'model': 'honda', 'year': 2004, 'mpg': 30 },
//   { 'model': 'ford', 'year': 1987, 'mpg': 14} 
// ]

const appdata = [ 
]

const randomNames = ["Bill:", "Fred:", "Tom:", "Oprah:", "Christiano Ronaldo:", "Laurie Leshin:", "Richard:", "You:"]

const server = http.createServer( function( request,response ) {
  if( request.method === 'GET' ) {
    handleGet( request, response )    
  }else if( request.method === 'POST' ){
    handlePost( request, response ) 
  }
})

const handleGet = function( request, response ) {
  const filename = dir + request.url.slice( 1 ) 

  if( request.url === '/' ) {
    sendFile( response, 'public/index.html' )
  }else{
    sendFile( response, filename )
  }
}

const handlePost = function( request, response ) {
  let dataString = ''

  request.on( 'data', function( data ) {
      dataString += data 
  })

  request.on( 'end', function() {
    // console.log( JSON.parse( dataString ) )
    if (request.url === "/submit"){
      const postArray = JSON.parse(dataString)
      //do transformations 
      //parse it, store in appdata, stringify app data, then send it
        appdata.push(postArray) //newest post will be at end:
      
      const randomInt = Math.floor(Math.random() * 8)
      //modify newest post by adding random name:
      appdata[appdata.length-1].yourname = randomNames[randomInt] + appdata[appdata.length-1].yourname
      
      console.log(appdata[appdata.length-1].yourname, " <-- new, modified post")

      }
    
    response.writeHead(200, "OK", {'Content-Type': 'text/plain'})
    response.write( JSON.stringify( appdata ) )
    console.log("appData array as of last submit: ", appdata) //
    response.end() //this sends JSON.stringify(appdata) back
  })
}

const sendFile = function( response, filename ) {
   const type = mime.getType( filename ) 
   fs.readFile( filename, function( err, content ) {
     // if the error = null, then we've loaded the file successfully
     if( err === null ) {
       response.writeHeader( 200, { 'Content-Type': type })
       response.end( content )
     }else{
       // file not found, error code 404
       response.writeHeader( 404 )
       response.end( '404 Error: File Not Found' )
     }
   })
}

server.listen( process.env.PORT || port )
