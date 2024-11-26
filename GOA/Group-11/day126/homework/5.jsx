function renderMessage() {
    return <h2>This is a message rendered from a function!</h2>;
  }
  
  function ParentComponent() {
    return (
      <div>
        {renderMessage()}
      </div>
    );
  }
  