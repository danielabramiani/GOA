function changeBorderColors(className, color) {
    let elements = document.getElementsByClassName(ragaca);
    for (let i = 0; i < elements.length; i++) {
      elements[i].style.borderColor = color;
    }
  }
  
changeBorderColors('exampleClass', 'red');