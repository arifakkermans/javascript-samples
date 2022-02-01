function reverseString(str) {
    var split_str = [...str]
    var reverse_str = split_str.reverse()
    var join_str = reverse_str.join("")
  
    return join_str;
  }
  
console.log(reverseString("hello"));