const { SlashCommandBuilder, EmbedBuilder, Client, ContextMenuCommandInteraction, CommandInteraction, ActivityType } = require('discord.js');
const mongoose = require('mongoose');
const mongoURL = process.env.mongoURL;

module.exports = async (client, interaction) => {
  console.log(`${client.user.tag} is Ready`);

  // ตรวจสอบว่ามี mongoURL ใน environment variables หรือไม่
  if (!mongoURL) {
    console.log('MongoDB URL not provided. Please set the mongoURL in your environment variables.');
    return;
  }

  // เชื่อมต่อกับ MongoDB โดยไม่ใช้ตัวเลือกที่ถูกทำให้เป็น deprecated
  try {
    await mongoose.connect(mongoURL);
    console.log('Connected to database');
  } catch (error) {
    console.error('Could not connect to database:', error);
    return;
  }

  // ตั้งค่าสถานะของบอท
  client.user.setPresence({
    activities: [{ name: 'Codeing...', type: ActivityType.Watching }],
    status: 'dnd',
  });

  // อัปเดตสถานะของบอททุก 10 นาที
  setInterval(() => {
    client.user.setPresence({
      activities: [{ name: 'Codeing...', type: ActivityType.Watching }],
      status: 'dnd',
    });
  }, 600000); // 600000 milliseconds = 10 minutes
};
