// gives access to express library by searchng node_modules for "express"
const express = require('express');
// creates an instance of the express constructor named "app"
const app = express();

// can now access methods used for making a server by including their name after app

// first endpoint
// this function will respond to a GET request at http://localhost:8000/users with a JSON file, which includes mockData under the key 'users'
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

// In Express, words with a colon in front of them in the url are treated as variables. You can access the value of each variable through req.params

app.get('/users/:id',function(req,res){
	console.log(req.params.id)
	res.json({
		success: true,
		message: 'got one user',
		user: req.params.id
	})
})
// OUTPUT : {"success":true,"message":"got one user","user":"mark"}
// check the terminal for the console.log of req.params.id. You should see the name 'mark', since it is the value we passed in place of the 'id' variable. Since we are running this in the terminal, our console.log will appear there (instead of the browser).

// starts up the server locally on port 8000
// run this with terminal commande 'node server.js'
// Ctrl+C to end
app.listen(8000, function(){
  console.log("server is running")
})