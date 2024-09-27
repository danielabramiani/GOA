const foods = [
    {name :"pizza", 
    name2:"cookie", 
    name3:"khinkali"
    }];

foods.forEach(foods => {
    foods.getName2 = function(){
        return this.name2;
    };

    foods.getName = function(){
        return this.name1
    };

    foods.getName = function(){
        return this.name
    };
});


function manualReduce(arr, func, startingValue){
    let result = startingValue;
    for (let i = 0; i < arr.length; i++){
        result = func(result, arr[i])
    }
    return result;
}

const strArr = "data".split("")

const result = manualReduce(strArr, function(result, nextElement){
    return result + nextElement
}, "data")

console.log(result)

