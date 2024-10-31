import React, { useState } from 'react';

const Hw11 = () => {
  const [text, setText] = useState('');

  return (
    <div>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type here"
      />
      <p>Character Count: {text.length}</p>
    </div>
  );
};

export default Hw11;
