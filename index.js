// index.js

const { Client, MessageMedia } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
const fs = require('fs');
const dotenv = require('dotenv');
const http = require('http'); // 🆕 Add this line
const handleAdminCommands = require('./admin');

dotenv.config();

// Load environment variables
const { ADMIN_PHONE_NUMBER, ADMIN_PASSWORD, ACCESS_TOKEN, RECIPIENT_WAID, PHONE_NUMBER_ID, VERSION } = process.env;

// ✅ Create a minimal web server to keep Heroku happy
http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('AI Dracula Bot is running.\n');
}).listen(process.env.PORT || 3000); // Heroku provides PORT

// Initialize WhatsApp client
const client = new Client();

client.on('qr', (qr) => {
  qrcode.generate(qr, { small: true });
});

client.on('authenticated', () => {
  console.log('WhatsApp client authenticated');
});

client.on('ready', () => {
  console.log('WhatsApp client is ready');
});

client.on('message', (message) => {
  const senderPhone = message.from;

  if (senderPhone === '0785081135' || senderPhone === process.env.ADMIN_PHONE_NUMBER) {
    const command = message.body.toLowerCase();
    handleAdminCommands(senderPhone, command);
  } else {
    console.log(`Message from non-admin user: ${senderPhone}`);
    client.sendMessage(senderPhone, 'You are not authorized to perform actions.');
  }
});

client.initialize();
