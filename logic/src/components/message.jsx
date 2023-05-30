import React, { useState } from 'react';

const MessageInput = () => {
  const [message, setMessage] = useState('');

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  return (
    <div>
      <h2>Message Input</h2>
      <input type="text" value={message} onChange={handleMessageChange} />
      <p>Message: {message}</p>
    </div>
  );
};

export default MessageInput;
