import React from 'react';

function NameList() {
  const names = ["Daniel", "luka", "Gio", "ninuca", "chico"];

  return (
    <ul>
      {names.map((name) => (
        <li>{name}</li>
      ))}
    </ul>
  );
}

export default NameList;
