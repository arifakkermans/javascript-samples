function repeatStringNumTimes(str, num) {
    let multiStr = "";
    if (num === 0 | num <= 0) {
        return "";
    } else if (num === 1)
        return str;
    else {
        while (num > 0) {
            multiStr += str;
            num--;
        }
    }
    return multiStr;
}

console.log(repeatStringNumTimes("abc", 3));
