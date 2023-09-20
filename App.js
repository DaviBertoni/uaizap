import React, { useState } from 'react';
import './App.css';
import MessageList from './componentes/layout'; 
import MessageInput from './componentes/botaoMensagem';

function App() {
  const [messages, setMessages] = useState([]);

  const sendMessage = (message) => {
    setMessages([...messages, message]);
  };

  const deleteMessage = (index) => {
    const newMessages = [...messages];
    newMessages.splice(index, 1);
    setMessages(newMessages);
  };

  return (
    <div className="App">
      <h1>UAIZAP</h1>
      <MessageList messages={messages} onDelete={deleteMessage} />
      <MessageInput onSendMessage={sendMessage} />
    </div>
  );
}

export default App;