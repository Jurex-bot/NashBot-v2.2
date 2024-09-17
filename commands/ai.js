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
            return api.sendMessage('Hi Please enter a prompt or use help to see all commands.', event.threadID, event.messageID);
        }

        api.sendMessage('🔍|Processing your request...', event.threadID, event.messageID);

        try {
            const response = await axios.get(`${global.NashBot.END}new/gpt-3_5-turbo?prompt=${encodeURIComponent(input)}`);
            const result = response.data.result.reply;

            if (!result) {
                throw new Error('🚫No valid response received from the API Please use other commands type help to see all commands .');
            }

            api.sendMessage(
                `🅰️ℹ AI Response\n━━━━━━━━━━━━━━━━━━━\n${result}`,
                event.threadID,
                event.messageID
            );
        } catch (error) {
            api.sendMessage(`An error occurred while processing please use another commands for example: Ai2 or use help see all commands: ${error.message}`, event.threadID, event.messageID);
        }
    },
};
