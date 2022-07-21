// سلاش كوماند عادي
const { CommandInteraction, ApplicationCommandType } = require("discord.js");
const BOT = require("../../../handlers/Client");

module.exports = {
  name: "",
  description: ``,
  userPermissions: [],
  botPermissions: [],
  category: "",
  cooldown: 10,
  type: ApplicationCommandType.ChatInput,
  /**
   *
   * @param {BOT} client
   * @param {CommandInteraction} interaction
   * @param {String[]} args
   */
  leo: async (client, interaction, args) => {
    // الكود
  },
};


const {
  ContextMenuCommandInteraction,
  ApplicationCommandType,
} = require("discord.js");
const BOT = require("../../../handlers/Client");

module.exports = {
  name: "",
  category: "",
  type: ApplicationCommandType.Message,
  /**
   *
   * @param {BOT} client
   * @param {ContextMenuCommandInteraction} interaction
   */
  leo: async (client, interaction) => {
    // الكود
  },
};


// سلاش يوسر مع منشن يوسر
const {
  ContextMenuCommandInteraction,
  ApplicationCommandType,
} = require("discord.js");
const BOT = require("../../../handlers/Client");

module.exports = {
  name: "",
  category: "",
  type: ApplicationCommandType.User,
  /**
   *
   * @param {BOT} client
   * @param {ContextMenuCommandInteraction} interaction
   */
leo: async (client, interaction) => {
    // الكود
  },
};

// كوماند مع بريفكس
const { Message } = require("discord.js");
const BOT = require("../../../handlers/Client");

module.exports = {
  name: "",
  description: ``,
  userPermissions: [],
  botPermissions: [],
  category: "",
  cooldown: 10,
  /**
   *
   * @param {BOT} client
   * @param {Message} message
   * @param {String[]} args
   * @param {String} prefix
   */
  leo: async (client, message, args, prefix) => {
    // الكود

  },
};
