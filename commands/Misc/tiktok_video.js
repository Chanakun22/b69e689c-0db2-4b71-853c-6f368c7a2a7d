const { SlashCommandBuilder, EmbedBuilder, Client, ContextMenuCommandInteraction, CommandInteraction, ActivityType, ReactionUserManager } = require('discord.js');
const axios = require('axios');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('tiktok')
        .setDescription('Get the follower count of a TikTok user')
        .addStringOption(option =>
            option.setName('username')
                .setDescription('The TikTok username')
                .setRequired(true)),

    async run(interaction) {
        const username = interaction.options.getString('username');
        const url = `https://api.example.com/tiktok?username=${username}`; // Replace with your actual API endpoint

        try {
            const response = await axios.get(url);
            const followersCount = response.data.followers; // Adjust according to the actual API response structure
            await interaction.reply(`The user ${username} has ${followersCount} followers on TikTok.`);
        } catch (error) {
            console.error(error);
            await interaction.reply('There was an error fetching the TikTok follower count.');
        }
    },
};

