// Load .env file
require('dotenv').config();

// Import libraries and modules
const { Client, LocalAuth } = require('whatsapp-web.js');
const mega = require('./megaClient');
const ethics = require('./ethics');
const sinhala = require('./sinhalaNLP');
const fs = require('fs');
const path = require('path');

// Initialize WhatsApp client
const client = new Client({
    authStrategy: new LocalAuth(),
    puppeteer: { headless: true }  // Run the bot in headless mode
});

// When WhatsApp client is ready
client.on('ready', () => {
    console.log('WhatsApp bot is ready!');
});

// Listen for incoming messages
client.on('message', async message => {
    console.log(`New message received: ${message.body}`);

    // Respond to ethical queries
    if (ethics.checkMessage(message.body)) {
        message.reply('This is an ethical response.');
    }

    // Handle Sinhala language responses
    const sinhalaResponse = sinhala.respond(message.body);
    if (sinhalaResponse) {
        message.reply(sinhalaResponse);
    }

    // Handle file uploads to MEGA (if any)
    if (message.hasMedia) {
        const media = await message.downloadMedia();
        await mega.uploadFile(media);
        message.reply('File uploaded to MEGA successfully!');
    }
});

// When client is authenticated
client.on('authenticated', () => {
    console.log('Client authenticated successfully!');
});

// Start the WhatsApp client
client.initialize();

// Example command for MEGA upload
// This function simulates a file upload using MEGA API
async function testMegaUpload() {
    const filePath = path.join(__dirname, 'exampleFile.txt');
    if (fs.existsSync(filePath)) {
        const fileBuffer = fs.readFileSync(filePath);
        await mega.uploadFile(fileBuffer);
        console.log('File uploaded to MEGA.');
    } else {
        console.log('File not found.');
    }
}

// Uncomment the line below to test MEGA file upload
// testMegaUpload();
