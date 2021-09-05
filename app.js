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

// // Dependencies
// const express = require('express');

// // Configure & Run the http server
// const app = express();

// app.use(express.static(__dirname, { dotfiles: 'allow' } ));

// app.listen(80, () => {
//   console.log('HTTP server running on port 80');
// });


// Dependencies
const fs = require('fs');
const http = require('http');
const https = require('https');
const express = require('express');

const app = express();

// Certificate
const privateKey = fs.readFileSync('/etc/letsencrypt/live/yourdomain.com/privkey.pem', 'utf8');
const certificate = fs.readFileSync('/etc/letsencrypt/live/yourdomain.com/cert.pem', 'utf8');
const ca = fs.readFileSync('/etc/letsencrypt/live/yourdomain.com/chain.pem', 'utf8');

const credentials = {
  key: privateKey,
  cert: certificate,
  ca: ca
};

app.use((req, res) => {
  res.send('Hello there !');
});

// Starting both http & https servers
const httpServer = http.createServer(app);
const httpsServer = https.createServer(credentials, app);

httpServer.listen(80, () => {
  console.log('HTTP Server running on port 80');
});

httpsServer.listen(443, () => {
  console.log('HTTPS Server running on port 443');
});