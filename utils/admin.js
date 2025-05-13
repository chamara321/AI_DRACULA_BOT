// admin.js

// List of authorized admins
const admins = ['0785081135']; // Phone numbers of admins

// Check if the user is an admin
function isAdmin(userPhone) {
  return admins.includes(userPhone);
}

// Function to handle admin commands
function handleAdminCommands(userPhone, command) {
  if (isAdmin(userPhone)) {
    // Check the command and perform the corresponding action
    switch (command) {
      case 'restart':
        console.log('Restarting the bot...');
        restartBot(); // call the restartBot function you defined earlier
        break;

      case 'checkStatus':
        console.log('Checking bot status...');
        // Add bot status check logic here
        break;

      case 'updateSettings':
        console.log('Updating bot settings...');
        // Add settings update logic here
        break;

      default:
        console.log('Invalid admin command');
    }
  } else {
    console.log('User is not an admin');
  }
}

// Export the handleAdminCommands function
module.exports = handleAdminCommands;
