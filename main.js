const Discord = require("discord.js")
const client = new Discord.Client()
const config = require("./config.json")

const commands = []


client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`)
  client.user.setActivity('Prefix === $', ({type: "LISTENING"}))
  commands.push("listemojis ", "ping ", "kick ", "say ")
})

client.on("message", msg => {
  const args = msg.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  if (msg.author.bot) return;
  if (msg.content.indexOf(config.prefix) !== 0) return;

  //if(msg.author.id !== config.ownerID) return; I can use this to check if the message was sent by me

  if (command == "ping") { //Yknow, like that Atari game. Probably.
    msg.channel.send("pong");
  }

  if (command == 'kick') { //pretty self explainatory if i must say
    let member = msg.mentions.members.first();
    let reason = args.slice(1).join(" ")
    member.kick(reason);
  }

  if (command == 'say'){
    let text = args.join(" ") //This allows you to add spaces in arguments. It basically makes it one big argument instead of an array with god knows how many
    msg.delete(); //delete the sent message
    msg.channel.send(text) //send the arguments into the channel
  }

  if (command === "asl") {
    let [arg1, arg2, arg3] = args;
    msg.reply(`Hello ${msg.author.username}, you passed ${arg1}, ${arg2} and ${arg3}.`);
  }

  if (command === "help") {
    msg.channel.send('Available commands: ' + commands)
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