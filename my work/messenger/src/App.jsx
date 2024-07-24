import React from 'react';
import ChatList from './ChatList';
import ChatWindow from './ChatWindow';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Messenger</h1>
      </header>
      <div className="App-body">
        <ChatList />
        <ChatWindow />
      </div>
    </div>
  );
}

export default App;
