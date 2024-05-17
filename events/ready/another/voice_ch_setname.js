const { SlashCommandBuilder, EmbedBuilder, Client, ContextMenuCommandInteraction, CommandInteraction, ActivityType } = require('discord.js');

/**
 * 
 * @param {*} client 
 */
module.exports = async (client) => {
    const guild = client.guilds.cache.get('1169260319823106169');
    let onlineMembers = await guild.members.cache.filter(m => m.presence?.status === 'online').size;
    let dndMembers = await guild.members.cache.filter(m => m.presence?.status === 'dnd').size;
    let idleMembers = await guild.members.cache.filter(m => m.presence?.status === 'idle').size;
    let onlineMemberCount = await onlineMembers + dndMembers + idleMembers;
    setInterval(async () => {
        await client.channels.cache.get('1240992973316030514').setName(`📶 ${onlineMemberCount -3}`)
    },60000)

}

// 