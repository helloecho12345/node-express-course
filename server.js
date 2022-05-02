// gives access to express library by searchng node_modules for "express"
const express = require('express');
// creates an instance of the express constructor named "app"
const app = express();

// can now access methods used for making a server by including their name after app

const mockUserData=[
  {name: 'Mark'},
  {name: 'Jill'}
]
app.get('/users', function(req,res){
  res.json({
    success: true,
    message: 'successfully got users. Nice!',
    users: mockUserData
  })
})

// starts up the server locally on port 8000
// run this with terminal commande 'node server.js'
// Ctrl+C to end
app.listen(8000, function(){
  console.log("server is running")
})