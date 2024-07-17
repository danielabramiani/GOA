// Render a <p> element without using JSX.
const paragraph = React.createElement('p', {}, 'This is a paragraph without using JSX!');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(paragraph);