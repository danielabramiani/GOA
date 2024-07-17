function backwardsPrime(start, stop){
  let result = [];
  for (let i = start; i <= stop; i++) {
    if (isPrime(i) && isReversePrime(i)) {
      result.push(i);
    }
  }
  return result;
}

function isPrime(num) {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function isReversePrime(num) {
  let reverseNum = +num.toString().split("").reverse().join("");
  if (num !== reverseNum) {
    return isPrime(reverseNum);
  }
  return false;
}
