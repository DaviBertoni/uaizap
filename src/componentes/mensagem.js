import React from 'react';
import '../App.css';

function Message({ sender, content, onDelete }) {
  const handleDoubleClick = () => {
    onDelete();
  };

  const messageClassName = `message ${sender === 'eu' ? 'left' : 'right'}`;

  return (
    <div className={messageClassName} onDoubleClick={handleDoubleClick}>
      {sender !== 'eu' && <strong>{sender}: </strong>}
      {content}
    </div>
  );
}

export default Message;
