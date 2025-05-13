const lang = require('./lang'); // lang.js එක import කරගන්නවා

// Function to show the main menu
function showMenu() {
    const welcomeMsg = lang.getMessage('welcomeMessage');
    const menuMsg = lang.getMessage('menuMessage');

    return `${welcomeMsg}\n\n${menuMsg}`;
}

// Function to show available actions or commands
function showCommands() {
    const commands = lang.getMessage('commandsList');
    return `${commands}`;
}

module.exports = {
    showMenu,
    showCommands
};
