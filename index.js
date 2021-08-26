const express = require("express");
const app = express();

app.use(express.static("public"));

app.get("/", (request, response) => {
  response.sendFile(__dirname + "/views/index.html");
});

const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});

const Aoijs = require("aoi.js");
require('dotenv').config();
const bot = new Aoijs.Bot({
    token: process.env.TOKEN, 
    prefix: ['-','<@$clientID>'] 
});

bot.loadCommands(`./Commands/`)

bot.onMessage()

bot.status({
  text:"Now Online!",
  type:"PLAYING",
  status:"online",
  time: 12
})

bot.command({
  name:"ping",
  code:`Pong \`$ping ms\``
})