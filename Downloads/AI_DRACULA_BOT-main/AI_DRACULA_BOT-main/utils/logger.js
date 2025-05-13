const fs = require('fs');
const path = require('path');

// Log file path
const logFilePath = path.join(__dirname, 'bot.log');

function log(message) {
  const timestamp = new Date().toISOString();
  const fullMessage = `[${timestamp}] ${message}`;

  // Console logging
  console.log(fullMessage);

  // File logging
  fs.appendFile(logFilePath, fullMessage + '\n', (err) => {
    if (err) console.error('Logging error:', err);
  });
}

module.exports = {
  log
};
