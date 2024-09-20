const axios = require('axios');

module.exports = {
    name: 'ai',
    description: 'Interact with GPT-3.5 Turbo',
    cooldown: 3,
    nashPrefix: false,
    execute: async (api, event, args) => {
        const input = args.join(' ');
        const uid = event.senderID;

        if (!input) {
            return api.sendMessage('Hi po kapatid Please enter a prompt or use help to see all commands Salamat po sa Dios sa Pagkakataon na makapag lingkod sa inyo from my developer: Brad Jurex Aso.', event.threadID, event.messageID);
        }

        api.sendMessage('🔍|Sandali lang po hinahanap pa...', event.threadID, event.messageID);

        try {
            const response = await axios.get(`${global.NashBot.END}new/gpt-3_5-turbo?prompt=${encodeURIComponent(input)}`);
            const result = response.data.result.reply;

            if (!result) {
                throw new Error('🚫No valid response received from the API Please use other commands type help to see all commands or please contact our brother and sister admin this is our admin list 🧑‍💼Brother Jureden 👨‍💼Brother Johnny 🕵‍♂️Brother Eric 👨‍🔧Brother Jurex 🧑‍💼Brother Jhanmark .');
            }

            api.sendMessage(
                `[LIK€•★•🅡🅔🅧🅑🅞🅣𒅒 Response\n━━━━━━━━━━━━━━━━━━━\n${result} ————————————————————————————[⚠️important notice this bot is not for sale`,
                event.threadID,
                event.messageID
            );
        } catch (error) {
            api.sendMessage(`An error occurred while processing please use another commands for example: Ai2 or use help see all commands: ${error.message}`, event.threadID, event.messageID);
        }
    },
};
