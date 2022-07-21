const { CommandInteraction } = require("discord.js");
const BOT = require("../../../handlers/Client");

module.exports = {

  name: "ping",
  description: `get ping of bot`,
  userPermissions: ["SEND_MESSAGES"],
  botPermissions: ["SEND_MESSAGES"],
  category: "Information",
  cooldown: 10,
  /**
   *
   * @param {BOT} client
   * @param {CommandInteraction} interaction
   */
  leo: async (client, interaction) => {
    
    client.embed(interaction,`Ping :: \`${client.ws.ping}\``)
  },
};
