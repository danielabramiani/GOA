import React, { useState } from 'react';

const ChatWindow = () => {
  const [messages, setMessages] = useState([
    { id: 1, text: 'Hi', sender: 'Daniel Abramiani' },
    { id: 2, text: 'Hi there my friend :)', sender: 'jumberiko'},
  ]);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    setMessages([...messages, { id: messages.length + 1, text: newMessage, sender: 'You' }]);
    setNewMessage('');
  };

  return (
    <div className="ChatWindow">
      <h2>Chat with Daniel</h2>
      <div className="ChatMessages">
        {messages.map(message => (
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
