import React, { useState } from 'react';

const Hw3 = () => {
  const [visible, setVisible] = useState(true);

  return (
    <div>
      {visible && <p>This paragraph is toggled!</p>}
      <button onClick={() => setVisible(!visible)}>Toggle Visibility</button>
    </div>
  );
};

export default Hw3;
