function findLongestWordLength(str) {
    let splitStr = str.split(" ");
    let longestWord = 0;
    for (let i = 0; i < splitStr.length; i++) {
      if (splitStr[i].length > longestWord) {
        longestWord = splitStr[i].length;
      }
    }
    return longestWord;
  }
  
console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));