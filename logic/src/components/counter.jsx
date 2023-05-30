import React, { useState } from 'react';

const CharacterCounter = () => {
  const [text, setText] = useState('');

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const characterCount = text.length;

  return (
    <div>
      <h2>Character Counter</h2>
      <textarea value={text} onChange={handleTextChange}></textarea>
      <p>Character Count: {characterCount}</p>
      <hr />
    </div>
  );
};

export default CharacterCounter;
