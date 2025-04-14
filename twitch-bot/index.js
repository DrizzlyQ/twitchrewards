const tmi = require('tmi.js');
const axios = require('axios');

const client = new tmi.Client({
  identity: {
    username: process.env.TWITCH_BOT_USERNAME,
    password: process.env.TWITCH_OAUTH_TOKEN
  },
  channels: [process.env.TWITCH_CHANNEL]
});

let viewers = {};

setInterval(() => {
  for (let user in viewers) {
    axios.post('http://localhost:3001/api/points/add', {
      twitchName: user,
      points: 1
    });
  }
}, 60000);

client.on('message', (_, tags, message) => {
  const user = tags.username;
  viewers[user] = true;

  if (message === "!points") {
    client.say(process.env.TWITCH_CHANNEL, `@${user}, you are earning points!`);
  }
});

client.connect();