function joinArr(arr){
    for(let i = 0;i < arr.length;i++){
        return " ".join(arr[i]); 
    }
}

console.log(joinArr([123,"sdfasd",645,"dsad"]))