const { processMessage } = require('./sinhalaNLP');  // Sinhala NLP function එක import කරන්න
const { getResponse } = require('./msg');           // Message response function import කරන්න
const { ethicsCheck } = require('./ethics');        // Ethics check function import කරන්න

// AI main handler
async function aiHandler(message, user) {
    try {
        // Step 1: Check ethics of the message
        const isEthical = ethicsCheck(message);
        if (!isEthical) {
            return "Your message seems to violate ethical guidelines. Please rephrase.";
        }

        // Step 2: Process the message for Sinhala NLP
        const processedMessage = await processMessage(message);

        // Step 3: Get bot response
        const response = await getResponse(processedMessage);

        // Return response to the user
        return response;

    } catch (error) {
        console.error("Error in AI handling:", error);
        return "Something went wrong! Please try again later.";
    }
}

module.exports = {
    aiHandler
};
