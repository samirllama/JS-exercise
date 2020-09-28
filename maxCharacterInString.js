// CHALLENGE 5: MAX CHARACTER
// Return the character that is most common in a string
// ex. maxCharacter('javascript') == 'a'


function maxCharacter(str) {
    const charMap = {};
    let maxNum = 0;
    let maxChar = '';
  
    str.split('').forEach(function(char) {
      if(charMap[char]) {
        charMap[char]++;
      } else {
        charMap[char] = 1;
      }
    });
  
    for(let char in charMap) {
      // debugger;
      if(charMap[char] > maxNum) {
        maxNum = charMap[char];
        maxChar = char;
      }
    }
  
    return maxChar;
}

// //////////////

// const sortedStr = str.split('').sort();
//   const maxChar = {char: '', count: 0};
//   const currentChar = {char: '', count: 0};

//   sortedStr.forEach(char => {
//     if(currentChar.char === char){
//       currentChar.count++;
//     } else {
//       if(maxChar.count < currentChar.count){
//         maxChar.char = currentChar.char;
//         maxChar.count = currentChar.count;
//       }
//       currentChar.char = char;
//       currentChar.count = 0;
//     }
//   });

//   return maxChar.char;
// }
