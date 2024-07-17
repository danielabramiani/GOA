function repeats(arr){
    return arr.filter((v,i,arr)=>arr.indexOf(v)==arr.lastIndexOf(v)).reduce((a,b)=>a+b,0)
  };
  //https://www.codewars.com/kata/59f11118a5e129e591000134