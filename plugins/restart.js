const { exec } = require('child_process'); // child_process module එක import කරන්න

// Restart the bot
function restartBot() {
    console.log('Bot is restarting...');
    
    // Exits the current process and restarts it
    exec('node ' + process.argv[1], (error, stdout, stderr) => {
        if (error) {
            console.error(`Error restarting bot: ${error}`);
            return;
        }
        if (stderr) {
            console.error(`stderr: ${stderr}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
    });
}

module.exports = {
    restartBot
};
