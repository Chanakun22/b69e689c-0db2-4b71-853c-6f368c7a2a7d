const { SlashCommandAssertions, ContextMenuCommandAssertions, ContextMenuCommandBuilder, SlashCommandBuilder } = require("discord.js");
const pets = require("../data/pets.json")
const data = new SlashCommandBuilder()
    .setName('pets')
    .setDescription('find from thsi list')
    .addStringOption((option) =>
        option.setName('pet')
            .setDescription('The pet to check')
            .setRequired(true)
            .setAutocomplete(true)

    );
async function run({ interaction }){
    const targetPetId = interaction.options.getString('pet');
    const pet = pets.find(pet => pet.id === targetPetId);

    interaction.reply(`Pet: ${pet.name}`)
}


module.exports = {data, run}