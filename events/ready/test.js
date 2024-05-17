const { SlashCommandBuilder, EmbedBuilder, Client, ContextMenuCommandInteraction, CommandInteraction, ActivityType } = require('discord.js');




/**
 * Fetch sensor data and log it with formatted date and time
 * @param {Client} client - The Discord client
 */



module.exports = async (client) => {

    const channel = await client.channels.cache.get('1230150236543127614');
    // const deletemessage = await channel.messages.fetch({ limit: 1 });
    // await deletemessage.forEach(async deletemessage => {
    //     await deletemessage.delete();
    // });


    const embed = new EmbedBuilder()
        .setTitle("Home")
        .setDescription('Test API ESP32 & ESP8266')
        .setColor("#ff0000")

    const message = await channel.send({ embeds: [embed] });


    setInterval(async () => {
        try {
            var ser = await fetch('http://chanakun428.thddns.net:8003/')
            if (!ser.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            var data_ser = await ser.json()
            const now = await new Date();


            const dateOptions = {
                year: "numeric", // "numeric" for year (e.g., 2024)
                month: "long", // "long" for full month name (e.g., January)
                day: "2-digit", // "2-digit" for zero-padded day of the month (e.g., 01)
            };

            // Specify time options for formatting
            const timeOptions = {
                hour: "2-digit", // "2-digit" for zero-padded hour (e.g., 01, 02, ..., 12)
                minute: "2-digit", // "2-digit" for zero-padded minute (e.g., 00, 01, ..., 59)
                second: "2-digit", // "2-digit" for zero-padded second (e.g., 00, 01, ..., 59)
                hour12: false, // Use 24-hour format (e.g., 13:00 instead of 1:00 PM)
            };

            let dateFormatter = await new Intl.DateTimeFormat("th-TH", dateOptions);
            let timeFormatter = await new Intl.DateTimeFormat("th-TH", timeOptions);
            let formattedDate = dateFormatter.format(now); // Format date
            let formattedTime = timeFormatter.format(now); // Format time

            let voltage = await data_ser.Sen.voltage
            let fixed_voltage = parseFloat(voltage.toFixed(2));
            var current = data_ser.Sen.current
            let fixed_current = parseFloat(current.toFixed(2));
            var power = data_ser.Sen.power
            let fixed_power = parseFloat(power.toFixed(2));
            var energy = data_ser.Sen.energy
            let fixed_energy = parseFloat(energy.toFixed(2));
            var frequency = data_ser.Sen.frequency
            let fixed_frequency = parseFloat(frequency.toFixed(2));
            var pf = data_ser.Sen.pf
            let fixed_pf = parseFloat(pf.toFixed(2));

            embed.setColor('Green')
            await embed.setFields(
                { name: `voltage`, value: `\`${fixed_voltage}\` V`, inline: true },
                { name: "current", value: `\`${fixed_current}\` A`, inline: true },
                { name: "power", value: `\`${fixed_power}\` W`, inline: true },
                { name: "energy", value: `\`${fixed_energy}\` `, inline: true },
                { name: "frequency", value: `\`${fixed_frequency}\` HZ`, inline: true },
                { name: "pf", value: `\`${fixed_pf}\``, inline: true },
                { name: "\u200B", value: ` ` },
                // { name: '\u200B', value: ` ` },
                // { name: '\u200B', value: ` ` },
                { name: `Created by: \`${"_nv23"}\``, value: " " },
                { name: "Last Update", value: `${formattedDate} | ${formattedTime}` }
            );
            await message.edit({ embeds: [embed] });
        }
        catch (error) {
            if (error.code === 'ECONNREFUSED') {
                console.error('Error: Server is unreachable.');
                // Handle server unreachable scenario (e.g., retry after some time)
            } else {
                console.error('Error fetching sensor data:', error.message);
                embed.setColor('Red')
            }

        }
    }, 3000);
}
