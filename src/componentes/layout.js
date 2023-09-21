import React from 'react';
import '../App.css'; 
import Message from './mensagem';

function MessageList({ messages, onDelete }) {
  return (
    <div className="message-list">
      {messages.map((message, index) => (
        <Message
          key={index}
          sender={message.sender}
          content={message.content}
          onDelete={() => onDelete(index)}
        />
      ))}
    </div>
  );
}

export default MessageList;
