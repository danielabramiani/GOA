import React, { useState } from 'react';

const Hw8 = () => {
  const [password, setPassword] = useState('');
  const [show, setShow] = useState(false);

  return (
    <div>
      <input
        type={show ? 'text' : 'password'}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter password"
      />
      <label>
        <input
          type="checkbox"
          checked={show}
          onChange={() => setShow(!show)}
        />
        Show Password
      </label>
    </div>
  );
};

export default Hw8;
