import React, { useState } from 'react';
import '../App.css'; 

function MessageInput({ onSendMessage }) {
  const [sender, setSender] = useState('');
  const [content, setContent] = useState('');

  const handleSenderChange = (e) => {
    setSender(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (sender && content) {
      onSendMessage({ sender, content });
      setSender('');
      setContent('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit(e);
    }
  };

  return (
    <form className="message-input" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Seu nome"
        value={sender}
        onChange={handleSenderChange}
      />
      <input
        type="text"
        placeholder="Digite sua mensagem"
        value={content}
        onChange={handleContentChange}
        onKeyPress={handleKeyPress}
      />
      <button type="submit">Enviar</button>
    </form>
  );
}

export default MessageInput;
