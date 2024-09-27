// 1. Create a map copy function called manualMap
function manualMap(arr, callback) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
      newArr.push(callback(arr[i]));
    }
    return newArr;
  }
  
  // 2. Create a copy function of filter called manualFilter
  function manualFilter(arr, callback) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
      if (callback(arr[i])) {
        newArr.push(arr[i]);
      }
    }
    return newArr;
  }
  
  // 3. Capitalize all words in the list
  function capitalizeList(names) {
    return manualMap(names, function(name) {
      return name.toUpperCase();
    });
  }
  
  // 4. Return names that start with an uppercase letter and are no longer than 5
  function filterNames(names) {
    return manualFilter(names, function(name) {
      return /^[A-Z].{0,4}$/.test(name);
    });
  }
  
  // 5. Return multiples of 5 greater than 20
  function multiplesOf5GreaterThan20(numbers) {
    return manualFilter(numbers, function(num) {
      return num > 20 && num % 5 === 0;
    });
  }