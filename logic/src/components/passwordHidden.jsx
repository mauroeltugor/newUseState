import React, { useState } from 'react';

const Toggle = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
        <div>
        <h2>Password</h2>
        <button onClick={toggleVisibility}>
            {isVisible ? 'Hide Password' : 'Show Password'}
        </button>
        {isVisible && <p>Your password: 123456*</p>}
        </div>
        <hr />
    </div>
  );
};

export default Toggle;
