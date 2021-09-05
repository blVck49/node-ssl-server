// const express = require("express")
// // const https = require("https")
// // const path = require("fs")
// // const fs = require("fs")
 
// const app = express()

// app.get('/', (req, res) => {
//     res.send('Hello from server')
// })

// // const sslServer = https.createServer(
// //     {
// //     key: '',
// //     cert: ''
// // }, app)

// // sslServer.listen(3443, () => console.log('Secure server on port 3443'))

// app.listen(3443, () => {
//     console.log("App listening on port 3443")
// })

// Dependencies
const express = require('express');

// Configure & Run the http server
const app = express();

app.use(express.static(__dirname, { dotfiles: 'allow' } ));

app.listen(80, () => {
  console.log('HTTP server running on port 80');
});