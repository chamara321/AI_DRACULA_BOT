// config.js

module.exports = {
  // MEGA API Credentials
  mega: {
    email: 'your-email@example.com',  // MEGA login email
    password: 'your-password',        // MEGA login password
  },

  // MEGA API Base URL (optional if you want to set a custom URL)
  megaBaseUrl: 'https://mega.nz/',

  // Directories or Paths (optional)
  paths: {
    uploadDirectory: '/uploads/',      // Directory where files will be uploaded (optional)
    downloadDirectory: '/downloads/',  // Directory where files will be downloaded (optional)
  },

  // Logging settings (optional)
  logging: {
    enableLogging: true,      // Enable or disable logging
    logFilePath: './logs',    // Path where logs will be stored
  },

  // Encryption Settings (optional, for secure file handling)
  encryption: {
    enableEncryption: true,  // Enable encryption
    encryptionKey: 'your-encryption-key',  // Encryption key (if necessary)
  },

  // Other configurations (optional)
  otherSettings: {
    maxUploadSize: 500,  // Maximum upload size in MB
    defaultLanguage: 'en',  // Default language for the bot/system
  },
};
