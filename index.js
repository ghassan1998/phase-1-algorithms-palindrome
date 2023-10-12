function isPalindrome(word) {
  // Remove spaces and convert the string to lowercase
  word = removeSpacesAndConvertToLowercase(word);

  // Initialize two pointers, one at the beginning and one at the end of the string
  let leftPointer = 0;
  let rightPointer = word.length - 1;

  // Repeat until the left pointer is less than or equal to the right pointer
  while (leftPointer <= rightPointer) {
      // If the characters at the left and right pointers are not the same, return false
      if (word[leftPointer] !== word[rightPointer]) {
          return false;
      }

      // Move the pointers towards the center of the string
      leftPointer++;
      rightPointer--;
  }

  // If the loop completes without returning false, the string is a palindrome
  return true;
}

function removeSpacesAndConvertToLowercase(word) {
  // Remove spaces and convert the string to lowercase
  return word.replace(/ /g, '').toLowerCase();
}

// Example usage:
const word = "A man a plan a canal Panama";
const result = isPalindrome(word);
console.log(result); // This will log true

/* 
  Add your pseudocode here
  function isPalindrome(word)
    // Remove spaces and convert the string to lowercase
    word = removeSpacesAndConvertToLowercase(word)

    // Initialize two pointers, one at the beginning and one at the end of the string
    leftPointer = 0
    rightPointer = length(word) - 1

    // Repeat until the left pointer is less than or equal to the right pointer
    while leftPointer <= rightPointer
        // If the characters at the left and right pointers are not the same, return false
        if word[leftPointer] is not equal to word[rightPointer]
            return false

        // Move the pointers towards the center of the string
        leftPointer = leftPointer + 1
        rightPointer = rightPointer - 1

    // If the loop completes without returning false, the string is a palindrome
    return true

function removeSpacesAndConvertToLowercase(word)
    // Initialize an empty string to store the result
    result = ""

    // Loop through each character in the input string
    for each character in word
        // If the character is not a space, add it to the result after converting to lowercase
        if character is not a space
            result = result + lowercase(character)

    // Return the modified string with spaces removed and in lowercase
    return result
*/

/*
  Add written explanation of your solution here
The isPalindrome function is defined to check if a given string is a palindrome.
Inside the function, we call the removeSpacesAndConvertToLowercase function to remove spaces and convert the string to lowercase. This step ensures that we ignore spaces and character case during the palindrome check.
We initialize two pointers, leftPointer and rightPointer, which are used to compare characters in the string. leftPointer starts at the beginning of the modified string, and rightPointer starts at the end.
We enter a while loop that continues as long as leftPointer is less than or equal to rightPointer. This loop compares characters from the left and right sides of the string, moving towards the center.
Inside the loop, we check if the characters at the current leftPointer and rightPointer positions are not the same. If they are different, we return false, indicating that the string is not a palindrome.
If the loop completes without returning false, it means that all character pairs match, and we return true, indicating that the string is a palindrome.
The removeSpacesAndConvertToLowercase function is a helper function used to remove spaces from the input string and convert it to lowercase. This ensures that the palindrome check is case-insensitive and ignores spaces in the input string.

Finally, the example usage demonstrates how to call the isPalindrome function with a sample input string and print the result, which should be true if the string is a palindrome and false if it's not.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here`
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
