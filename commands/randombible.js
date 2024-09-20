const axios = require('axios');

module.exports = {
  name: 'randombible',
  description: 'Fetch and display a random Bible verse',
  usage: '[nashPrefix]bibleverse',
  nashPrefix: false,
  execute: async (api, event, args, prefix) => {
    try {
      await api.sendMessage('🔄 please wait for random bible', event.threadID);

      const response = await axios.get(`${global.NashBot.ENDPOINT}random-bible-verse`);
      const bibleVerse = response.data.verse;

      const message = `
🔔 𝖣𝖺𝗂𝗅𝗒 𝖡𝗂𝖻𝗅𝖾 𝖵𝖾𝗋𝗌𝖾:

${bibleVerse}
`;

      await api.sendMessage(message, event.threadID, event.messageID);
    } catch (error) {
      console.error('Error fetching or sending the Bible verse:', error);
      await api.sendMessage('❌ Error fetching the Bible verse or please contact our brother and sister admin this is our admin list 🧑‍💼Brother Jureden 👨‍💼Brother Johnny 🕵‍♂️Brother Eric 👨‍🔧Brother Jurex 🧑‍💼Brother Jhanmark to provide verses on you.', event.threadID);
    }
  }
};





