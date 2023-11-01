const { Client, Intents } = require('discord.js');

// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

// When the client is ready, run this code (only once)
client.once('ready', () => {
	console.log('Ready!');
});
client.on("ready", async () => {
    client.channels.fetch('634207451645739008')
    .then(channel => {
        channel.send('@bones what about easter?');
    })
    
    });
// Login to Discord with your client's token
client.login('OTA5MTAwNzkyMTAxODcxNjg2.YY_YFw.SAxwOSnZVpgE365bUl42Ma3sBCk');