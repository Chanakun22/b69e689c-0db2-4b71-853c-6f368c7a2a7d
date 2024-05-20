const { SlashCommandBuilder, EmbedBuilder, Client, ContextMenuCommandInteraction, CommandInteraction, ActivityType } = require('discord.js');

/**
 * 
 * @param {*} client 
 */
module.exports = async (client) => {
    try{
    const guild = client.guilds.cache.get('1169260319823106169');
    setInterval(async () => {
        const now = new Date();
        const dateOptions = {
            year: 'numeric',    // "numeric" for year (e.g., 2024)
            month: 'long',      // "long" for full month name (e.g., January)
            day: '2-digit'      // "2-digit" for zero-padded day of the month (e.g., 01)
        };
        const dateFormatter = new Intl.DateTimeFormat('en-US', dateOptions);
        const formattedDate = dateFormatter.format(now); // Format date
        let onlineMembers = await guild.members.cache.filter(m => m.presence?.status === 'online').size;
        let dndMembers = await guild.members.cache.filter(m => m.presence?.status === 'dnd').size;
        let idleMembers = await guild.members.cache.filter(m => m.presence?.status === 'idle').size;
        let onlineMemberCount = await onlineMembers + dndMembers + idleMembers;
        await client.channels.cache.get('1241002501713694751').setName(`🟢 ${onlineMemberCount - 3}`)
        await client.channels.cache.get('1241658308788621333').setName(`📆${formattedDate}`)
    }, 60000)
    }
    catch(error){
        console.error(`voice channle setname Eror : ${error}`)
    }
}

// 