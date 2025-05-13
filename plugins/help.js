const lang = require('./lang'); // lang.js එක import කර ගැනීම

// Function to show help message based on language
function showHelp() {
    const welcomeMsg = lang.getMessage('welcomeMessage');
    const helpMsg = lang.getMessage('helpMessage');
    const aboutMsg = lang.getMessage('aboutBot');

    return `${welcomeMsg}\n\n${helpMsg}\n\n${aboutMsg}`;
}

module.exports = {
    showHelp
};
