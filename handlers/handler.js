const { EmbedBuilder } = require("discord.js");
const fs = require("fs");
const BOT = require("./Client");

/**
 *
 * @param {BOT} client
 */
module.exports = async (client) => {
  const { guildID, embed: ee } = client.config;
  // تحميل السلاش كوماند reload
  try {
    let arrayOfcommands = [];
    fs.readdirSync("./Commands/Slash").forEach((cmd) => {
      let commands = fs
        .readdirSync(`./Commands/Slash/${cmd}/`)
        .filter((file) => file.endsWith(".js"));
      for (cmds of commands) {
        let pull = require(`../Commands/Slash/${cmd}/${cmds}`);
        if (pull.name) {
          client.commands.set(pull.name, pull);
          arrayOfcommands.push(pull);
        } else {
          continue;
        }
      }
    });
    client.on("ready", async () => {
      // // لكل السيرفرات فعل سطر 30 وقفل سطر 32 &33 &34 
      await client.application.commands.set(arrayOfcommands);
     
    //  if (guildID) {
     //   client.guilds.cache.get(guildID).commands.set(arrayOfcommands);
     // }
    });
    console.log(`${client.commands.size} Slash Commands Loaded`);
  } catch (e) {
    console.log(e);
  }

  // لود للكوماند العادي
  try {
    fs.readdirSync("./Commands/Message").forEach((cmd) => {
      let commands = fs
        .readdirSync(`./Commands/Message/${cmd}/`)
        .filter((file) => file.endsWith(".js"));
      for (cmds of commands) {
        let pull = require(`../Commands/Message/${cmd}/${cmds}`);
        if (pull.name) {
          client.mcommands.set(pull.name, pull);
        } else {
          console.log(`${cmds} Command is not Ready`);
          continue;
        }
        if (pull.aliases && Array.isArray(pull.aliases))
          pull.aliases.forEach((alias) => client.aliases.set(alias, pull.name));
      }
    });
    console.log(`${client.mcommands.size} Message Commands lOADED`);
  } catch (e) {
    console.log(e);
  }
  // لود للايفنتات
  try {
    fs.readdirSync("./events/").forEach((file) => {
      const events = fs
        .readdirSync("./events/")
        .filter((file) => file.endsWith(".js"));
      for (let file of events) {
        let pull = require(`../events/${file}`);
        if (pull) {
          client.events.set(file, pull);
        }
      }
    });
    console.log(`${client.events.size} Events Loaded`);
  } catch (e) {
    console.log(e);
  }

  client.embed = (interaction, data) => {
    let user = interaction.user ? interaction.user : interaction.author;
    if (interaction.deferred) {
      interaction
        .followUp({
          embeds: [
            new EmbedBuilder()
              .setColor(ee.color)
              .setDescription(` ** ${data.substring(0, 3000)} **`)
              .setFooter({
                text: user.tag,
                iconURL: user.displayAvatarURL({ dynamic: true }),
              }),
          ],
        })
        .catch((e) => {});
    } else {
      interaction
        .reply({
          embeds: [
            new EmbedBuilder()
              .setColor(ee.color)
              .setDescription(` ** ${data.substring(0, 3000)} **`)
              .setFooter({
                text: user.tag,
                iconURL: user.displayAvatarURL({ dynamic: true }),
              }),
          ],
        })
        .catch((e) => {});
    }
  };
};
