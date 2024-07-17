//Use destructuring to extract only the person's state.

const person = {
    name: 'Jesse',
    age: 30, 
    address: {
      city: 'Houston',
      state: 'Texas',
      country: 'USA'
    }
  }
  
  displayMessage(person)
  
  function displayMessage({ 
  address: { state }
   }) {
    const message = 'I live in ' + state + '.';
  }