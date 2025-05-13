// restart.js

const { exec } = require('child_process');

// Restart the bot (or server)
function restartBot() {
  console.log('Restarting bot...');
  
  // Command to restart the bot (use the command suited to your bot's environment)
  exec('pm2 restart ai-dracula-bot', (error, stdout, stderr) => {
    if (error) {
      console.error(`Error restarting bot: ${error.message}`);
      return;
    }
    if (stderr) {
      console.error(`stderr: ${stderr}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
  });
}

// Export the restartBot function
module.exports = restartBot;
