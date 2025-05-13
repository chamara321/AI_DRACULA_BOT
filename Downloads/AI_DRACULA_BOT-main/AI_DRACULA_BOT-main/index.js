// index.js

const { Client, MessageMedia } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
const fs = require('fs');
const dotenv = require('dotenv');
const handleAdminCommands = require('./admin'); // Import admin handling script

dotenv.config();

// Load environment variables
const { ADMIN_PHONE_NUMBER, ADMIN_PASSWORD, ACCESS_TOKEN, RECIPIENT_WAID, PHONE_NUMBER_ID, VERSION } = process.env;

// Initialize WhatsApp client
const client = new Client();

// Event listener when QR code is ready
client.on('qr', (qr) => {
    qrcode.generate(qr, { small: true });
});

// Event listener when the client is authenticated
client.on('authenticated', () => {
    console.log('WhatsApp client authenticated');
});

// Event listener when the client is ready
client.on('ready', () => {
    console.log('WhatsApp client is ready');
});

// Event listener for incoming messages
client.on('message', (message) => {
    // Check if the incoming message is from an authorized admin
    const senderPhone = message.from;

    // If the message is from an admin, handle the command
    if (senderPhone === ADMIN_PHONE_NUMBER) {
        const command = message.body.toLowerCase(); // Convert to lowercase for easier command matching

        // Handle admin commands
        handleAdminCommands(senderPhone, command);
    } else {
        console.log(`Message from non-admin user: ${senderPhone}`);
        // Optionally, reply with a message like: 'You are not authorized to send commands.'
        client.sendMessage(senderPhone, 'You are not authorized to perform actions.');
    }
});

// Start the client
client.initialize();
