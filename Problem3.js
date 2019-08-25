/**
 *  Longest Substring Without Repeating Characters
 * @param {string} s
 * @return {number}
 * FAST : 16.81 % MEMORY :  14.16 %
 */
var lengthOfLongestSubstring = function(s) {
  let inputString = s;
  let allSubstrings = {};
  for ([index, letter] of inputString.split("").entries()) {
    let str = "";
    for (let i = index; i < inputString.length; i++) {
      if (str.includes(inputString[i])) break;
      str = str + inputString[i];
    }
    allSubstrings[str] = str.length ? str.length : 0;
  }
  return inputString.length ? Math.max(...Object.values(allSubstrings)) : 0;
};
