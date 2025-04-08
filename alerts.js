const axios = require('axios');
async function sendTradeAlert(message) {
    try {
        await axios.post(process.env.TELEGRAM_WEBHOOK, {
            chat_id: process.env.TELEGRAM_CHAT_ID,
            text: message,
        });
        await axios.post(process.env.DISCORD_WEBHOOK, {
            content: message,
        });
        console.log('✅ Alerts sent to Telegram and Discord');
    } catch (err) {
        console.error('❌ Alert error:', err.message);
    }
}
module.exports = { sendTradeAlert };
