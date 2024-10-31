import React, { useState } from 'react';

function ColorChange() {
  const [color, setColor] = useState('');
  const [currentColor, setCurrentColor] = useState('black');

  const handleChange = (event) => {
    setColor(event.target.value);
  };

  const handleClick = () => {
    setCurrentColor(color);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter a color"
        value={color}
        onChange={handleChange}
      />
      <button onClick={handleClick}>Change Color</button>
      <p style={{ color: currentColor }}>
        This paragraph will change color!
      </p>
    </div>
  );
}

export default ColorChange;
