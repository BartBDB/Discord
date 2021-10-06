const Discord = require("discord.js")
const client = new Discord.Client()
const config = require("./config.json")

//const commands = []

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`)
  client.user.setActivity('Prefix === $', ({type: "LISTENING"}))
  //commands.push("listemojis", "ping")
})

client.on("message", msg => {
  if (!msg.content.startsWith(config.prefix)) return
  if (!msg.content.startsWith(config.prefix) || msg.author.bot) return;

  if (msg.content === config.prefix + "ping") {
    msg.channel.send("pong");

  

    /*
    if(msg.author.id === client.user.id) return;
      msg.channel.send("Hello Zev")
    */
  }
})

/*client.on('message', msg => {
  if (msg.content === prefix + "listemojis")
  {
    const emojiList = msg.guild.emojis.cache.map(emoji => emoji.toString()).join(" ");
    msg.channel.send("The emojis in this guild are: " + emojiList)
  }
})*/

client.login(config.token)