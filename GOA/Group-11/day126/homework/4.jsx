function StyledDiv() {
    const colorValue = "lightblue";
    const styleObject = {
      backgroundColor: colorValue,
      padding: "20px",
      borderRadius: "8px"
    };
  
    return (
      <div style={styleObject}>
        This div has a dynamic background color!
      </div>
    );
  }
  