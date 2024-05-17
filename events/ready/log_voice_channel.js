const { voiceStateUpdate, SlashCommandBuilder, EmbedBuilder, Client, ContextMenuCommandInteraction, CommandInteraction, ActivityType } = require('discord.js');




module.exports = async (client) => {
    client.on('voiceStateUpdate', async (oldState, newState) => {
        const channel = await client.channels.cache.get('1240932283242905621');
        const now = await new Date();
        const dateOptions = { year: 'numeric', month: 'long', day: '2-digit' };
        const timeOptions = { hour: '2-digit', minute: '2-digit', hour12: false };
        const dateFormatter = await new Intl.DateTimeFormat('th-TH', dateOptions);
        const timeFormatter = await new Intl.DateTimeFormat('th-TH', timeOptions);
        const formattedDate = dateFormatter.format(now);
        const formattedTime = timeFormatter.format(now);

        if (oldState.channelId !== newState.channelId && oldState.channelId != null && newState.channelId != null) {
            const oldChannelName = oldState.channel ? oldState.channel.name : 'None';
            const newChannelName = newState.channel ? newState.channel.name : 'None';
            const icon_ = newState.guild.members.cache.get(newState.member.user.id);
            const embed = new EmbedBuilder()
                .setAuthor({ name: `${newState.member.user.tag}|Switch|`, iconURL: icon_.user.displayAvatarURL() })
                .setColor('Orange')
                .setDescription(`\`${newState.member.user.tag}\`|Switch to voice channel| \`${oldChannelName}\`➡️ \`${newChannelName}\``)
                .setFooter({ text: `${formattedDate} | ${formattedTime}   • Created by _nv23` })
            channel.send({ embeds: [embed] });
//console.log(`${newState.member.user.tag} moved from ${oldChannelName} to ${newChannelName}`);
        }
        else {
            if (oldState.channelId != null && newState.channelId == null) {
                //console.log(`${newState.member.user.tag} left ${oldState.channel.name}`);
                const icon_ = newState.guild.members.cache.get(newState.member.user.id);
                const embed = new EmbedBuilder()
                    .setAuthor({ name: `${newState.member.user.tag}|Left|`, iconURL: icon_.user.displayAvatarURL() })
                    .setColor('Red')
                    .setDescription(`\`${newState.member.user.tag}\` |Left from voice channel|➡️ \`${oldState.channel.name}\``)
                    .setFooter({ text: `${formattedDate} | ${formattedTime}   • Created by _nv23` })
                channel.send({ embeds: [embed] });

            }
            if (oldState.channelId == null && newState.channelId != null) {

                const icon_ = oldState.guild.members.cache.get(oldState.member.user.id);
                const embed = new EmbedBuilder()
                    .setAuthor({ name: `${oldState.member.user.tag} | Join`, iconURL: icon_.user.displayAvatarURL() })
                    .setColor('Green')
                    .setDescription(`\`${oldState.member.user.tag}\` |Join voice channel|➡️ \`${newState.channel.name}\``)
                    .setFooter({ text: `${formattedDate} | ${formattedTime} • Created by _nv23` })
                channel.send({ embeds: [embed] });

            }
        }
        // if (oldState.channel && !newState.channel) {
        //     // Unmute the user if they were previously muted
        //     if (oldState.member.voice.mute) {
        //         oldState.member.voice.setMute(false)
        //             .then(() => {
        //                 console.log(`${oldState.member.user.tag} has left the voice channel and was unmuted.`);
        //             })
        //             .catch((error) => {
        //                 console.error(`Error unmuting ${oldState.member.user.tag}: ${error.message}`);
        //             });
        //     }
        // }
    })
}
