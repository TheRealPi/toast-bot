const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('Toast-Bot v2.1B up and toasty! :D');
});


client.on('message', message => {
  
    if(message.content.startsWith("$ping")) {
        message.channel.send("Pong! " + (new Date().getTime() - message.createdTimestamp + " ms"))        
  	}
});
// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);//where BOT_TOKEN is the token of our bot 
