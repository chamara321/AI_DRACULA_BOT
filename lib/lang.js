const langs = {
    sinhala: {
        welcomeMessage: "ආයුබෝවන්! AI Dracula Bot වෙත ඔබව සාදරයෙන් පිළිගනිමු.",
        helpMessage: "මෙහි ඔබට වඩාත් උපකාරී වන විකල්ප තිබේ: \n1. මගේ හැකියාවන් විවෘත කරන්න \n2. මට පණිවිඩයක් යවන්න \n3. වඩාත් වැඩි විස්තර ලබාගන්න",
        goodbyeMessage: "ඔබට සුබ දවසක්! නැවත හමුවෙමු.",
        errorMessage: "අසමත් විය! කරුණාකර නැවත උත්සාහ කරන්න.",
        aboutBot: "AI Dracula Bot පවතින්නේ පරිශීලකයන්ට පහසුකම් සැපයීමට සහ දත්ත සුරක්ෂිතව ඉටු කිරීමටයි.",
        commands: {
            start: "ආරම්භ කරන්න",
            stop: "බෝට්ටුව නවතා දමන්න",
            help: "උදව්",
            status: "තත්වය",
        },
        unknownCommand: "මෙම විධානය හඳුනා ගත නොහැක. කරුණාකර 'උදව්' කියන්න.",
        statusMessage: "බෝට්ටුව සක්‍රීයයි. ඔබට මට පණිවිඩයක් යවන්න.",
    },
    english: {
        welcomeMessage: "Welcome! You are warmly greeted by AI Dracula Bot.",
        helpMessage: "Here are some options to assist you: \n1. View my capabilities \n2. Send me a message \n3. Get more information",
        goodbyeMessage: "Have a great day! Hope to meet you again.",
        errorMessage: "Failed! Please try again.",
        aboutBot: "AI Dracula Bot is designed to assist users and ensure data security.",
        commands: {
            start: "Start",
            stop: "Stop Bot",
            help: "Help",
            status: "Status",
        },
        unknownCommand: "This command is not recognized. Please say 'Help'.",
        statusMessage: "The bot is active. You can send me a message.",
    }
};

let currentLang = 'sinhala'; // Default language is Sinhala

// Function to change the language
function changeLanguage(language) {
    if (langs[language]) {
        currentLang = language;
    } else {
        console.log("Selected language not supported.");
    }
}

// Function to get the message in the current language
function getMessage(key) {
    return langs[currentLang][key] || "Message not found.";
}

// Function to handle commands in the current language
function handleCommand(command) {
    const commandResponse = langs[currentLang].commands[command];
    return commandResponse ? commandResponse : langs[currentLang].unknownCommand;
}

module.exports = {
    changeLanguage,
    getMessage,
    handleCommand
};
