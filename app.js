const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;

//.get gets the route, res.send is the value you want to send for your request

app.get('/hello', (req, res) => {
    console.log(req.query);
    res.send('Hello ' + req.query.name);
}); 

app.get('/network', (req, res) => {
    axios.get('http://localhost:3001/world') //this returns a promise
    .then((networkResponse) => {
        res.send(networkResponse.data);
    }) //always want a .catch after a .then
    .catch(() => {
        res.send(':( did not work.');

    })
}); 


app.get('/add', (req, res) => res.send('0'));



app.listen(port, () => console.log(`Example app listening on port ${port}!`)); //.listen is what starts running the server and triggers the followingcallback
//after running with "node app.js" you can go to http://localhost:3000/