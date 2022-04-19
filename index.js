function isPalindrome(word) {
  // Write your algorithm here
  let reversed = word.split("").reverse().join("")
  if (word === reversed) {
    console.log(reversed)
    return true
  } else if (word !== reversed) {
    return false
  }
}


// const word = "sat"
// console.log(word.split("").reverse().join(""))
// const palin = "mom"
// isPalindrome("sat")

/*
  Add your pseudocode here
  if string is palindrome return true
  if string is not palindrome return false
  palindrome's are words that are spelled the same, when reversed
  Strings cant be reversed but arrays can
  convert string into a array
  split the string by spaces  .split() splits a string into an array
  reverse then join .reverse() reverses an array .join() combines characters in an array and turns them into strings
  reverse string and compare them

*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
