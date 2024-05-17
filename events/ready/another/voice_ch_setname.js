const { SlashCommandBuilder, EmbedBuilder, Client, ContextMenuCommandInteraction, CommandInteraction, ActivityType } = require('discord.js');

/**
 * 
 * @param {*} client 
 */
module.exports = async (client) => {
    const guild = client.guilds.cache.get('1169260319823106169');
    setInterval(async () => {
        const now = await new Date();
        const dateOptions = {
            year: "numeric", // "numeric" for year (e.g., 2024)
            month: "long", // "long" for full month name (e.g., January)
            day: "2-digit", // "2-digit" for zero-padded day of the month (e.g., 01)
        };
        const timeOptions = {
            hour: "2-digit", // "2-digit" for zero-padded hour (e.g., 01, 02, ..., 12)
            minute: "2-digit", // "2-digit" for zero-padded minute (e.g., 00, 01, ..., 59)
            second: "2-digit", // "2-digit" for zero-padded second (e.g., 00, 01, ..., 59)
            hour12: false, // Use 24-hour format (e.g., 13:00 instead of 1:00 PM)
        };
        const dateFormatter = await new Intl.DateTimeFormat("th-TH", dateOptions);
        const timeFormatter = await new Intl.DateTimeFormat("th-TH", timeOptions);
        const formattedDate = dateFormatter.format(now); // Format date
        const formattedTime = timeFormatter.format(now); // Format time
        let onlineMembers = await guild.members.cache.filter(m => m.presence?.status === 'online').size;
        let dndMembers = await guild.members.cache.filter(m => m.presence?.status === 'dnd').size;
        let idleMembers = await guild.members.cache.filter(m => m.presence?.status === 'idle').size;
        let onlineMemberCount = await onlineMembers + dndMembers + idleMembers;
        await client.channels.cache.get('1241002501713694751').setName(`🟢 ${onlineMemberCount -3}`)
        await client.channels.cache.get('1241015300376498298').setName(`updated : ${formattedTime}`)
        console.log(`update vocie ch setname at ${formattedTime}`)
    },60000)

}

// 