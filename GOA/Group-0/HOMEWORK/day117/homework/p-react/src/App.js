import React, { useState } from 'react';
function App() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleParagraph = () => {
    setIsVisible(!isVisible);
  };
  return (
    <div style={{ padding: '40px' }}>
      <button onClick={toggleParagraph}>
        {isVisible ? 'delete' : 'add'}
      </button>
      {isVisible && <p>hello world</p>}
    </div>
  );
}
export default App;