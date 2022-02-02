function largestOfFour(arr) {
    let largeNumbersArr = [];
    for (let i = 0; i < arr.length; i++){
      largeNumbersArr.push(Math.max(...arr[i]))
    }
    return largeNumbersArr;
  }
  
console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 52, 39], [1000, 1001, 857, 1]]));