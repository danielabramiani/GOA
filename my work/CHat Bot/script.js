const commands = {
    "hello": greet,
    "hi": greet,
    "time": getTime,
    "date": getDate,
    "define": defineTerm,
    "calculate": calculateExpression,
    "flip": flipCoin,
    "roll": rollDice,
    "joke": tellJoke,
    "quote": generateQuote,
    "html": getHTMLDefinition,
    "css": getCSSDefinition,
    "js": getJSDefinition,
    "react": getReactDefinition,
    "python": getPythonDefinition,
    "java": getJavaDefinition,
    "c++": getCPPDefinition,
    "c#": getCSharpDefinition,
    "php": getPHPDefinition,
    "ruby": getRubyDefinition,
    "swift": getSwiftDefinition,
    "go": getGoDefinition,
    "help": displayHelp,
}

function defineTerm(term) {
    switch (term.toLowerCase()) {
        case "html":
            return getHTMLDefinition();
        case "css":
            return getCSSDefinition();
        case "js":
            return getJSDefinition();
        case "react":
            return getReactDefinition();
        case "python":
            return getPythonDefinition();
        case "java":
            return getJavaDefinition();
        case "c++":
            return getCPPDefinition();
        case "c#":
            return getCSharpDefinition();
        case "php":
            return getPHPDefinition();
        case "ruby":
            return getRubyDefinition();
        case "swift":
            return getSwiftDefinition();
        case "go":
            return getGoDefinition();
        default:
            return `Sorry, I don't have information on "${term}".`;
    }
}



function getHTMLDefinition() {
    return "HTML (Hypertext Markup Language) is the standard markup language for creating web pages and web applications.";
}

function getCSSDefinition() {
    return "CSS (Cascading Style Sheets) is a style sheet language used for describing the presentation of a document written in HTML.";
}

function getJSDefinition() {
    return "JavaScript is a programming language that enables you to create dynamically updating content, control multimedia, animate images, and much more.";
}

function getReactDefinition() {
    return "React is a JavaScript library for building user interfaces, developed by Facebook.";
}

function getPythonDefinition() {
    return "Python is a high-level, interpreted programming language known for its simplicity and readability.";
}

function getJavaDefinition() {
    return "Java is a high-level, class-based, object-oriented programming language developed by Sun Microsystems (now owned by Oracle).";
}

function getCPPDefinition() {
    return "C++ is a general-purpose programming language created as an extension of the C programming language.";
}

function getCSharpDefinition() {
    return "C# (pronounced 'C sharp') is a general-purpose, multi-paradigm programming language developed by Microsoft.";
}

function getPHPDefinition() {
    return "PHP is a server-side scripting language designed for web development but also used as a general-purpose programming language.";
}

function getRubyDefinition() {
    return "Ruby is a dynamic, object-oriented programming language designed for simplicity and productivity.";
}

function getSwiftDefinition() {
    return "Swift is a powerful and intuitive programming language developed by Apple for macOS, iOS, watchOS, and tvOS app development.";
}

function getGoDefinition() {
    return "Go, also known as Golang, is a statically typed, compiled programming language designed by Google.";
}

function greet() {
    return "Hello! How can I assist you today?";
}

function getTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    return `The current time is ${timeString}`;
}

function getDate() {
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return `Today is ${now.toLocaleDateString(undefined, options)}`;
}

function getWeather() {
    return "Sorry, I can't provide weather information at the moment.";
}

function calculateExpression(expression) {
    try {
        const result = eval(expression);
        return `The result of ${expression} is ${result}`;
    } catch (error) {
        return "Sorry, I couldn't calculate that expression.";
    }
}

function searchWeb(query) {
    return `Sorry, I can't perform web searches at the moment.`;
}

function flipCoin() {
    const result = Math.random() < 0.5 ? "Heads" : "Tails";
    return `You flipped a coin. It's ${result}.`;
}

function rollDice() {
    const result = Math.floor(Math.random() * 6) + 1;
    return `You rolled a ${result} on the dice.`;
}

function tellJoke() {
    return `Why don't scientists trust atoms? Because they make up everything!`;
}

function generateQuote() {
    return `If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success. -James Cameron`;
}

function displayHelp() {
    const commandList = Object.keys(commands).join(", ");
    return `Available commands: ${commandList}`;
}

function getBestLanguage() {
    return "The best programming Academy is GOA-Goal Oriented Academy The Best.";
}

function processInput(userInput) {
    const parts = userInput.split(" ");
    const command = parts.shift().toLowerCase();
    const argument = parts.join(" ");
    
    if (command in commands) {
        return commands[command](argument);
    } else {
        return "Sorry I don't understand that command Type 'help' for a list of available commands.";
    }
}

function sendMessage() {
    const userInput = document.getElementById("user-input").value.trim();
    const chatBox = document.getElementById("chat-box");

    if (userInput === "") return;

    displayMessage("You", userInput, chatBox);
    const reply = processInput(userInput);
    displayMessage("Bot", reply, chatBox);
    document.getElementById("user-input").value = "";
    chatBox.scrollTop = chatBox.scrollHeight;
}

function displayMessage(sender, message, chatBox) {
    const messageElement = document.createElement("p");
    messageElement.innerHTML = `<strong>${sender}:</strong> ${message}`;
    chatBox.appendChild(messageElement);

    function processInput(userInput) {
        const parts = userInput.split(" ");
        const command = parts.shift().toLowerCase();
        const argument = parts.join(" ");
        
        if (command in commands) {
            return commands[command](argument);
        } else {
            return "Sorry, I don't understand that command. Type 'help' for a list of available commands.";
        }
    }
}