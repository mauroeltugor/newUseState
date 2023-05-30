import React, { useState } from 'react';

const OptionSelector = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <h2>Select your favorite uppermoon</h2>
      <select value={selectedOption} onChange={handleOptionChange}>
        <option value="Kokushibo">Kokushibo </option>
        <option value="Doma">Doma</option>
        <option value="Akaza">Akaza</option>
      </select>
      <p>Your favorite is: {selectedOption}</p>
      <hr />
    </div>
  );
};

export default OptionSelector;
