  // امر  main file
  
  const {
  Client,
  Collection,
  GatewayIntentBits,
  Partials,
} = require("discord.js");
const fs = require("fs");

class BOT extends Client {
  constructor() {
    super({
      messageCacheLifetime: 60,
      fetchAllMembers: false,
      messageCacheMaxSize: 10,
      restTimeOffset: 0,
      restWsBridgetimeout: 100,
      shards: "auto",
      allowedMentions: {
        parse: ["roles", "users", "everyone"],
        repliedUser: false,
      },
      partials: [
        Partials.Message, 
        Partials.Channel, 
        Partials.GuildMember, 
        Partials.Reaction, 
        Partials.GuildScheduledEvent, 
        Partials.User, 
        Partials.ThreadMember, 
      ],
      intents: [
        GatewayIntentBits.Guilds, 
        GatewayIntentBits.GuildMembers, 
        GatewayIntentBits.GuildBans, 
         GatewayIntentBits.GuildEmojisAndStickers,
        GatewayIntentBits.GuildIntegrations, 
        // GatewayIntentBits.GuildWebhooks, 
        //  GatewayIntentBits.GuildInvites, 
        // GatewayIntentBits.GuildVoiceStates, 
        // GatewayIntentBits.GuildPresences,
        GatewayIntentBits.GuildMessages, 
        GatewayIntentBits.GuildMessageReactions,
        GatewayIntentBits.GuildMessageTyping,
        GatewayIntentBits.DirectMessages, 
        GatewayIntentBits.DirectMessageReactions, 
        GatewayIntentBits.DirectMessageTyping, 
        GatewayIntentBits.MessageContent, 
      ],
    });

    this.events = new Collection();
    this.cooldowns = new Collection();
    this.mcommands = new Collection();
    this.commands = new Collection();
    this.aliases = new Collection();
    this.mcategories = fs.readdirSync("./Commands/Message");
    this.scategories = fs.readdirSync("./Commands/Slash");
    this.config = require('../settings/config')
  }

  build(token) {
    ["handler"].forEach((handler) => {
      require(`./${handler}`)(this);
    });
    this.login(token);
  }
}

module.exports = BOT;
