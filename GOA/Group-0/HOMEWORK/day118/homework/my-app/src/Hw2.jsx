import React, { useState } from 'react';

const Hw2 = () => {
  const [text, setText] = useState('Hello');

  return (
    <div>
      <h2>{text}</h2>
      <button onClick={() => setText(text === 'Hello' ? 'Goodbye' : 'Hello')}>
        Toggle Text
      </button>
    </div>
  );
};

export default Hw2;
