import React, { useState } from 'react';

const Buy = () => {
  const [item, setItem] = useState('');
  const [itemsList, setItemsList] = useState([]);

  const inputHandler = (event) => {
    setItem(event.target.value);
  };

  const addItem = () => {
    if (item !== "") {
      setItemsList(prevItems => [...prevItems, item]);
      setItem("")
    }
  };

  return (
    <div>
      <div>
        <label>Add item</label>
        <input value={item} onChange={inputHandler} />
        <button onClick={addItem}>Add item</button>
        <ul>
            {itemsList.map( item => (<li>{item}</li>))}
        </ul>
      </div>
      <hr />
    </div>
  );
};

export default Buy;