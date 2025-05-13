// command.js
const mega = require('megajs');
const readline = require('readline');

// MEGA Login credentials
const email = 'your-email@example.com';
const password = 'your-password';
const megaClient = mega();

// Setup readline interface for command-line interaction
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

/**
 * Login function to authenticate user
 */
async function loginToMega() {
    try {
        const user = await megaClient.login(email, password);
        console.log("Logged in successfully as:", user.email);
        return user;
    } catch (error) {
        console.error("Error logging in:", error);
    }
}

/**
 * List all files in MEGA
 */
async function listFiles() {
    const user = await loginToMega();
    if (user) {
        const rootFolder = await user.files();
        rootFolder.forEach(file => {
            console.log(`File name: ${file.name}`);
            console.log(`File size: ${file.size}`);
            console.log(`File URL: ${file.downloadUrl}`);
        });
    }
}

/**
 * Upload file to MEGA
 * @param {string} filePath - The path of the file to upload
 */
async function uploadFile(filePath) {
    const user = await loginToMega();
    if (user) {
        try {
            const file = await user.upload(filePath);
            console.log(`Uploaded file: ${file.name}`);
        } catch (error) {
            console.error("Error uploading file:", error);
        }
    }
}

/**
 * Download file from MEGA
 * @param {string} fileId - The file's unique ID on MEGA
 */
async function downloadFile(fileId) {
    const user = await loginToMega();
    if (user) {
        try {
            const file = await user.download(fileId);
            console.log(`Downloaded file: ${file.name}`);
        } catch (error) {
            console.error("Error downloading file:", error);
        }
    }
}

// Command-line interface logic to accept commands
function startCLI() {
    rl.question('Enter command (list, upload <file>, download <fileId>): ', (input) => {
        const args = input.split(' ');

        switch (args[0]) {
            case 'list':
                listFiles();
                break;
            case 'upload':
                if (args[1]) {
                    uploadFile(args[1]);
                } else {
                    console.log('Please provide a file path.');
                }
                break;
            case 'download':
                if (args[1]) {
                    downloadFile(args[1]);
                } else {
                    console.log('Please provide a file ID.');
                }
                break;
            default:
                console.log('Invalid command. Use: list, upload <file>, or download <fileId>');
        }

        rl.close();
    });
}

// Start the CLI
startCLI();
