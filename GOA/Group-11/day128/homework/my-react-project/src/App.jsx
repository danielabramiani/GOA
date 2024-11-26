import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Button from './components/Button';
import Card from './components/Card';
import Sidebar from './components/Sidebar';

const App = () => {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <div>
      <Header />
      <Sidebar />
      <main>
        <Card title="First Card" content="This is the content of the first card." />
        <Card title="Second Card" content="This is the content of the second card." />
        <Button label="Click Me" onClick={handleClick} />
      </main>
      <Footer />
    </div>
  );
};

export default App;
