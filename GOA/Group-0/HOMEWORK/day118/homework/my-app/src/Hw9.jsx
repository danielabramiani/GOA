import React, { useState } from 'react';

const Hw9 = () => {
  const [checked, setChecked] = useState(false);

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={checked}
          onChange={() => setChecked(!checked)}
        />
        Enable Button
      </label>
      <button disabled={!checked}>Submit</button>
    </div>
  );
};

export default Hw9;
