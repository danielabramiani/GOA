import React, { useState } from 'react';

const Hw7 = () => {
  const [liked, setLiked] = useState(false);

  return (
    <button onClick={() => setLiked(!liked)}>
      {liked ? 'Unlike' : 'Like'}
    </button>
  );
};

export default Hw7;
