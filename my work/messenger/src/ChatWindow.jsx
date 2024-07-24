import React, { useState } from 'react';

const ChatWindow = () => {
  const [messages, setMessages] = useState([
    { id: 1, text: 'Hi', sender: 'Daniel Abramiani' },
    { id: 2, text: 'Hey there! How can I help you today?', sender: 'jumberiko' },
  ]);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim() === '') {
      return; 
    }

    const newId = messages.length > 0 ? messages[messages.length - 1].id + 1 : 1;
    const newMessageObject = { id: newId, text: newMessage, sender: 'You' };
    setMessages([...messages, newMessageObject]);
    setNewMessage('');

    handleCommands(newMessage.trim());
  };

  const handleCommands = (message) => {
    const command = message.toLowerCase();

    switch (command) {
      case 'hello':
      case 'hi':
        respondToCommand('Hey! How are you?');
        break;
      case 'how are you?':
      case 'how are you':
        respondToCommand('I\'m doing great, thanks for asking!');
        break;
      case 'joke':
        respondToCommand('Why don\'t scientists trust atoms? Because they make up everything!');
        break;
      default:
        respondToCommand('I didn\'t quite get that. Can you please clarify?');
        break;
    }
  };

  const respondToCommand = (response) => {
    const newId = messages.length > 0 ? messages[messages.length - 1].id + 1 : 1;
    const responseMessage = { id: newId, text: response, sender: 'jumberiko' };
    setTimeout(() => {
      setMessages([...messages, responseMessage]);
    }, 500);
  };

  return (
    <div className="ChatWindow">
      <h2>Chat with Daniel</h2>
      <div className="ChatMessages">
        {messages.map((message) => (
          <div key={message.id} className={message.sender === 'You' ? 'sent' : 'received'}>
            <p>{message.text}</p>
          </div>
        ))}
      </div>
      <div className="ChatInput">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type your message..."
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default ChatWindow;
