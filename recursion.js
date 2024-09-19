/** product: calculate the product of an array of numbers. */

function product(nums, i = 0) {
  // base case when index reaches end
  if (i === nums.length) return 1;

  return nums[i] * product(nums, i + 1);
}

/** longest: return the length of the longest word in an array of words. */

function longest(words, i = 0) {
  // Base case: if we reach the end of the array, return 0
  if (i === words.length) return 0;

  // Recursive case: compare the length of the current word with the result of the rest
  let firstWordLength = words[i].length;
  let longestInRest = longest(words, i + 1);

  return Math.max(firstWordLength, longestInRest);
}

/** everyOther: return a string with every other letter. */

function everyOther(str, i = 0) {
  // base case return empty str if index reaches or exceed length of string
  if (i >= str.length) return '';

  return str[i] + everyOther(str, i + 2);
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, i = 0) {
  // base case if we checked all pairs and reacehed the middle char
  if (i >= str.length / 2) return true; // if reached the middle return true

  // check if current index char and char from corresponding index at the end are equal
  if (str[i] != str[str.length - i - 1]) return false;

  return isPalindrome(str, i + 1);
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, i = 0) {
  // base case if we've reached the end fo the array , return -1
  if (i >= arr.length) return -1;
  // base case if current element = val, return its index
  if (arr[i] === val) return i;

  return findIndex(arr, val, i + 1);
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, i = 0) {
  // base case if index reaches the middle of str, then all swaps have been made so return the reversed str
  if (i >= str.length / 2) return str;

  let newStr = str.split('');
  // swap characters at position i and the opposite end str.length - i - 1
  [newStr[i], newStr[str.length - i - 1]] = [newStr[str.length - i - 1], newStr[i]];

  // recusrively call function with updated string and next index
  return revString(newStr.join(''), i + 1);
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let stringsArr = [];

  for (let key in obj) {
    if (typeof obj[key] === 'string') {
      // if string , add to array
      stringsArr.push(obj[key]);
      // if value is another obj , we need to check the rest of the nested values by calling gatherStrings()
    } else if (typeof obj[key] === 'object' || obj[key] === null) {
      stringsArr = stringsArr.concat(gatherStrings(obj[key]));
    }
  }
  return stringsArr;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, left = 0, right = arr.length - 1) {
  // base case if left exceeds right, value is not in array
  if (left > right) return -1;

  // calculate middle index
  let mid = Math.floor((left + right) / 2);

  // base case if middle element is target value, return its index
  if (arr[mid] === val) return mid;

  // if target is < middle element, search left half
  if (val < arr[mid]) {
    return binarySearch(arr, val, left, mid - 1);
  } else {
    return binarySearch(arr, val, mid + 1, right);
  }
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
