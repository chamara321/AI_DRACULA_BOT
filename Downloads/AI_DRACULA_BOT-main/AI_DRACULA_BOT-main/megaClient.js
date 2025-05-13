// megaClient.js
const mega = require('megajs');

// MEGA Login credentials
const email = 'chamarasadakalum68@gmail.com';
const password = '0724551791';
const megaClient = mega();

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
 * Function to list all files in the root folder
 */
async function listFiles() {
    try {
        const user = await loginToMega();
        if (user) {
            const rootFolder = await user.files();
            rootFolder.forEach(file => {
                console.log("File name:", file.name);
                console.log("File size:", file.size);
                console.log("File URL:", file.downloadUrl);
            });
        }
    } catch (error) {
        console.error("Error fetching files:", error);
    }
}

/**
 * Function to upload a file to MEGA
 * @param {string} filePath - Path to the file you want to upload
 */
async function uploadFile(filePath) {
    try {
        const user = await loginToMega();
        if (user) {
            const file = await user.upload(filePath);
            console.log("File uploaded successfully:", file.name);
        }
    } catch (error) {
        console.error("Error uploading file:", error);
    }
}

/**
 * Function to download a file from MEGA
 * @param {string} fileId - The unique file ID from MEGA
 */
async function downloadFile(fileId) {
    try {
        const user = await loginToMega();
        if (user) {
            const file = await user.download(fileId);
            console.log("File downloaded successfully:", file.name);
        }
    } catch (error) {
        console.error("Error downloading file:", error);
    }
}

// Example Usage: Uncomment to test
// listFiles();
// uploadFile('path/to/your/file.txt');
// downloadFile('fileIdHere');
