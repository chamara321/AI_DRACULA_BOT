const crypto = require('crypto');

// Simple hash function (use bcrypt or argon2 for production)
function hashPassword(password) {
  return crypto.createHash('sha256').update(password).digest('hex');
}

// Store hashed admin password (ideally from .env or secure DB)
const ADMIN_PASSWORD_HASH = 'your_prehashed_password_here'; // sha256 hashed password

function handleAdminCommands(senderPhone, command, client, message, adminPassword) {
  // Verify password hash
  if (hashPassword(adminPassword) !== ADMIN_PASSWORD_HASH) {
    client.sendMessage(message.from, 'Invalid admin password.');
    return;
  }

  // Now process admin commands safely
  switch (command) {
    case 'status':
      client.sendMessage(message.from, 'Bot is running securely.');
      break;

    case 'shutdown':
      client.sendMessage(message.from, 'Shutting down bot...');
      // Your shutdown logic here
      break;

    // add more commands...

    default:
      client.sendMessage(message.from, 'Unknown admin command.');
  }
}

module.exports = { handleAdminCommands, hashPassword };
