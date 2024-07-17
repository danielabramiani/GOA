function triangular( n ) {
    let output = [];
    if (n) {
      for (let i=0; i<=n; i++) {
        output.push(i);
      }
    }else{
      return 0;
    }
    return output.reduce((sum, current) => sum + current, 0);
  }
  //https://www.codewars.com/kata/525e5a1cb735154b320002c8/train/javascript