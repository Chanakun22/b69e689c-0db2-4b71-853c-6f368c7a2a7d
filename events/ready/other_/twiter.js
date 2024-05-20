// const puppeteer = require('puppeteer');
// const { SlashCommandBuilder, EmbedBuilder, Client, ContextMenuCommandInteraction, CommandInteraction, ActivityType } = require('discord.js');

// async function getTikTokProfileData(username) {
//     var url = (`https://x.com/${username}`)
//     var url_img = (`https://x.com/${username}/photo`)
//     var ch_img = ('//*[@id="react-root"]/div/div/div[2]/main/div/div/div/div[1]/div/div[3]/div/div/div/div/div[1]/div[1]/div[2]/div/div[2]/div/a/div[4]/div')
//     var ch_name = ('//*[@id="react-root"]/div/div/div[2]/main/div/div/div/div[1]/div/div[3]/div/div/div/div/div[2]/div[1]/div/div[1]/div/div/span/span[1]')
//     var ch_following = ('//*[@id="react-root"]/div/div/div[2]/main/div/div/div/div[1]/div/div[3]/div/div/div/div/div[5]/div[1]/a/span[1]/span')
//     var ch_follower = ('//*[@id="react-root"]/div/div/div[2]/main/div/div/div/div[1]/div/div[3]/div/div/div/div/div[5]/div[2]/a/span[1]/span')
//     var ch_des = ('//*[@id="id__5xxklesq9yh"]/div/div/div/div/div/div/a/div/div[2]/div/img')
//     const browser = await puppeteer.launch();
//     const page = await browser.newPage()
//     await page.goto(url);
//     const page_img = await browser.newPage()
//     await page_img.goto(url_img);
//     let chname = await page.evaluate((ch_name) => {
//         let element = document.evaluate(ch_name, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
//         return element ? element.textContent : '';
//     }, ch_name);

//     let following = await page.evaluate((ch_following) => {
//         let element = document.evaluate(ch_following, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
//         return element ? element.textContent : '';
//     }, ch_following);

//     let img = await page_img.evaluate((ch_img) => {
//         let element = document.evaluate(ch_img, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
//         return document.querySelector('img').src;
//     }, ch_img);


//     let follower = await page.evaluate((ch_follower) => {
//         let element = document.evaluate(ch_follower, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
//         return element ? element.textContent : '';
//     }, ch_follower);

//     let des = await page.evaluate((ch_des) => {
//         let element = document.evaluate(ch_des, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
//         return document.querySelector('img').src;
//     }, ch_des);

//     // let likes = await page.evaluate((ch_likes) => {
//     //     let element = document.evaluate(ch_likes, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
//     //     return element ? element.textContent : '';
//     // }, ch_likes);

//     // let video = await page.evaluate((ch_video) => {
//     //     let element = document.evaluate(ch_video, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
//     //     return document.querySelector('video').src;
//     // }, ch_video);

//     return {
//         channelName: chname,
//         following: following,
//         img: img,
//         follower: follower,
//         // likes: likes,
//         url: url,
//         des:des,
//         // video: video,
//     };
// }
// module.exports = async (client) => {
//     const channel = await client.channels.cache.get('1241686994606620773');
//     const deletemessage = await channel.messages.fetch({ limit: 4 });
//     await deletemessage.forEach(async deletemessage => {
//         await deletemessage.delete();
//     });


//     try {
//         const username = 'TXT_members'
//         const data = await getTikTokProfileData(username);

//         const embed = new EmbedBuilder()
//             .setColor(0x0099FF) // Example color: blue
//             .setTitle(`@${username}`)
//             .setThumbnail(`${data.img}`)
//             .addFields(
//                 { name: '\u200B', value: ' ' },
//                 { name: 'Channel Name 📋', value: `= [${data.channelName}]`, inline: false },
//                 { name: 'Following 🌐', value: ` = [${data.following}] `, inline: false },
//                 { name: 'Follower 👤', value: `  = [${data.follower}] `, inline: false },

//                 // Add other fields asF needed
//             )
//             .setImage(`${data.des}`) 
//             .setURL(`${data.url}`)
//             .setTimestamp()
//             .setFooter({ text: `${data.channelName}` });
//         const message = await channel.send({ embeds: [embed] });
//         setInterval(async () => {
//             await embed.setFields(
//                 { name: '\u200B', value: ' ' },
//                 { name: 'Channel Name 📋', value: ` [${data.channelName}]`, inline: false },
//                 { name: 'Following 🌐', value: ` [${data.following}] `, inline: false },
//                 { name: 'Follower 👤', value: ` [${data.follower}] `, inline: false },

//             )
//                 .setURL(`${data.url}`)
                
//                 .setTimestamp()
//                 .setFooter({ text: `${data.channelName}` });
//             await message.edit({ embeds: [embed] });
//         }, 60000)
//     } catch (error) {
//         console.error(error);
//     }
// }


// /*  */