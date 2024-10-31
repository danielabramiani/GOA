import React, { useState } from 'react';

const Hw15 = () => {
  const [color, setColor] = useState('black');

  return (
    <div>
      <select onChange={(e) => setColor(e.target.value)}>
        <option value="black">Black</option>
        <option value="red">Red</option>
        <option value="blue">Blue</option>
        <option value="green">Green</option>
      </select>
      <h2 style={{ color }}>This text changes color!</h2>
    </div>
  );
};

export default Hw15;
