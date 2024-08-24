document.addEventListener('DOMContentLoaded', function() {
    const userName = localStorage.getItem('userName');
    if (window.location.pathname.includes('chat.html') && !userName) {
        window.location.href = 'index.html';
    } else if (userName) {
        initializeChat();
    }
});

function login() {
    const userName = document.getElementById('login-name').value.trim();
    if (userName) {
        localStorage.setItem('userName', userName);
        window.location.href = 'chat.html';
    } else {
        alert('Please enter your name to continue.');
    }
}

function initializeChat() {
    const userName = localStorage.getItem('userName');
    displayMessage(`Welcome, ${userName}! How can I assist you today? Type "help" for commands.`, 'bot');
}

function logout() {
    localStorage.removeItem('userName');
    window.location.href = 'index.html';
}

function sendMessage() {
    const input = document.getElementById('user-input');
    const message = input.value.trim();
    if (message) {
        displayMessage(message, 'user');
        processCommand(message);
        saveHistory(message);
    }
    input.value = '';
}

function displayMessage(message, sender) {
    const chatBox = document.getElementById('chat-box');
    const msgDiv = document.createElement('div');
    msgDiv.textContent = message;
    msgDiv.className = sender === 'user' ? 'user-message' : 'bot-message';
    chatBox.appendChild(msgDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function saveHistory(message) {
    let history = JSON.parse(localStorage.getItem('chatHistory')) || [];
    history.push(message);
    localStorage.setItem('chatHistory', JSON.stringify(history));
}

function showHistory() {
    let history = JSON.parse(localStorage.getItem('chatHistory')) || [];
    displayMessage('Chat History:', 'bot');
    history.forEach(msg => displayMessage(msg, 'user'));
}

function processCommand(input) {
    const commands = {
        "hello": () => greet(),
        "hi": () => greet(),
        "time": () => getTime(),
        "date": () => getDate(),
        "calculate": (input) => calculateExpression(input),
        "flip": () => flipCoin(),
        "roll": () => rollDice(),
        "joke": () => tellJoke(),
        "quote": () => generateQuote(),
        "help": () => displayHelp(),
    };

    const commandKeys = Object.keys(commands);
    const foundCommand = commandKeys.find(key => input.toLowerCase().includes(key));

    if (foundCommand) {
        commands[foundCommand](input);
    } else {
        displayMessage('Sorry, I did not understand that. Try asking something else or type "help" for options!', 'bot');
    }
}

function greet() {
    const userName = localStorage.getItem('userName');
    displayMessage(`Hello ${userName}! How can I help you today?`, 'bot');
}

function getTime() {
    displayMessage(`Current time is: ${new Date().toLocaleTimeString()}`, 'bot');
}

function getDate() {
    displayMessage(`Today's date is: ${new Date().toLocaleDateString()}`, 'bot');
}

function calculateExpression(input) {
    try {
        const result = eval(input.split("calculate ")[1]);
        displayMessage(`Result: ${result}`, 'bot');
    } catch (error) {
        displayMessage('Invalid calculation. Please try again.', 'bot');
    }
}

function flipCoin() {
    displayMessage(`The coin flip result is: ${Math.random() > 0.5 ? 'Heads' : 'Tails'}`, 'bot');
}

function rollDice() {
    displayMessage(`You rolled a dice and got: ${Math.floor(Math.random() * 6) + 1}`, 'bot');
}

function tellJoke() {
    displayMessage('Why do programmers prefer dark mode? Because light attracts bugs!', 'bot');
}

function generateQuote() {
    displayMessage('“Any fool can write code that a computer can understand. Good programmers write code that humans can understand.” – Martin Fowler', 'bot');
}

function displayHelp() {
    const commands = "Available commands: hello, time, date, calculate, flip, roll, joke, quote, and more!";
    displayMessage(commands, 'bot');
}