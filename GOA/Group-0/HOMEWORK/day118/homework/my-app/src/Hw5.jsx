import React, { useState } from 'react';

const Hw5 = () => {
  const [item, setItem] = useState('');
  const [items, setItems] = useState([]);

  const addItem = () => {
    if (item) {
      setItems([...items, item]);
      setItem('');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={item}
        onChange={(e) => setItem(e.target.value)}
        placeholder="Add an item"
      />
      <button onClick={addItem}>Add</button>
      <ul>
        {items.map((i, index) => (
          <li key={index}>{i}</li>
        ))}
      </ul>
    </div>
  );
};

export default Hw5;
