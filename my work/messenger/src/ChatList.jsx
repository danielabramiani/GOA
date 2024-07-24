import React from 'react';

const ChatList = () => {
  const chats = [
    { id: 1, name: 'Daniel Abramiani' },
    { id: 2, name: 'jumberiko' },
  ];

  return (
    <div className="ChatList">
      <h2>Chats</h2>
      <ul>
        {chats.map(chat => (
          <li key={chat.id}>{chat.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ChatList;
