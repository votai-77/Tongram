const axios = require('axios');

const BOT_TOKEN = 'bot';  // Thay bằng API Token từ BotFather
const USER_ID = 'YOUR_USER_ID';  // Thay bằng chat ID của bạn

async function approveLogin() {
    try {
        // Lấy danh sách yêu cầu đăng nhập từ Telegram
        const response = await axios.get(`https://api.telegram.org/bot${BOT_TOKEN}/getUpdates`);
        const updates = response.data.result;

        for (let update of updates) {
            if (update.callback_query && update.callback_query.from.id == USER_ID) {
                const queryId = update.callback_query.id;

                // Chấp nhận đăng nhập
                await axios.post(`https://api.telegram.org/bot${BOT_TOKEN}/answerCallbackQuery`, {
                    callback_query_id: queryId,
                    text: "✅ Đăng nhập thành công!"
                });

                console.log("✅ Đã xác nhận đăng nhập Telegram!");
                return true;
            }
        }
    } catch (error) {
        console.error("❌ Lỗi khi xác nhận đăng nhập:", error.message);
    }
    return false;
}

module.exports = { approveLogin };
