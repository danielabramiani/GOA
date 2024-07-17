// https://www.codewars.com/kata/528d9adf0e03778b9e00067e/train/javascript

function mineLocation(field){
    let p = 0;
    let p1 = 0
    for (let i = 0; i < field.length;i++){
      for(let j= 0; j < field[i].length;j++){
        if (field[i][j] === 1){p1 = j; p = i}
      }}
    return [p,p1]
  }