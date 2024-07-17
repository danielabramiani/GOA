//What do you need to add to the second argument of a useEffect Hook to limit it to running only on the first render?

import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(getData())}, []
);

  return <DisplayData data={data} />;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);