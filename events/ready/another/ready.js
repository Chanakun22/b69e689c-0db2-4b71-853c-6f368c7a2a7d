const { SlashCommandBuilder, EmbedBuilder, Client, ContextMenuCommandInteraction, CommandInteraction, ActivityType } = require('discord.js');

module.exports = async (client, interaction) => {
  console.log(`${client.user.tag} is Ready`);
  
  client.user.setPresence({
    activities: [{ name: `Update status Server `, type: ActivityType.Watching }],
    status: 'online',
  });
  
  setInterval(async() =>{
    client.user.setPresence({
      activities: [{ name: `Update status Server `, type: ActivityType.Watching }],
      status: 'online',
    });
  }, 600000)

};