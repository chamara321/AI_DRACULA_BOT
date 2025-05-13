const axios = require('axios');
const fs = require('fs');
const path = require('path');

// Function to create and send a sticker
async function sendSticker(chatId, stickerUrl, client) {
    try {
        // Download the sticker image
        const response = await axios.get(stickerUrl, { responseType: 'arraybuffer' });

        // Save the sticker image as a .webp file
        const stickerPath = path.join(__dirname, 'sticker.webp');
        fs.writeFileSync(stickerPath, response.data);

        // Send the sticker via the client
        await client.sendMessage(chatId, { sticker: fs.readFileSync(stickerPath) });

        // Clean up the file after sending
        fs.unlinkSync(stickerPath);

        return "Sticker sent successfully!";
    } catch (error) {
        console.error("Error in sending sticker:", error);
        return "Failed to send the sticker. Please try again.";
    }
}

module.exports = {
    sendSticker
};
