// Helper function for testing
function myFunctionTest(expected, function2test) {
  if (expected === function2test()) {
    return "TEST SUCCEEDED";
  } else {
    return "TEST FAILED. Expected " + expected + " found " + function2test();
  }
}

// 2. max function
function max(a, b) {
  return a > b ? a : b;
}

// 3. maxOfThree function
function maxOfThree(a, b, c) {
  return max(max(a, b), c);
}

// 4. isVowel function
function isVowel(char) {
  return ["a", "e", "i", "o", "u"].indexOf(char.toLowerCase()) !== -1;
}

// 5. sum and multiply functions
function sum(arr) {
  return arr.reduce((acc, val) => acc + val, 0);
}

function multiply(arr) {
  return arr.reduce((acc, val) => acc * val, 1);
}

// 6. reverse function
function reverse(str) {
  return str.split("").reverse().join("");
}

// 7. findLongestWord function
function findLongestWord(words) {
  return Math.max(...words.map((word) => word.length));
}

// 8. filterLongWords function
function filterLongWords(words, i) {
  return words.filter((word) => word.length > i);
}

// 9. Map/Filter/Reduce modifications
const a = [1, 3, 5, 3, 3];

// a) multiply each element by 10
const b = a.map(function (elem, i, array) {
  return elem * 10;
});

// b) return array with all elements equal to 3
const c = a.filter(function (elem, i, array) {
  return elem === 3;
});

// c) return the product of all elements
const d = a.reduce(function (prevValue, elem, i, array) {
  return prevValue * elem;
});

// Test cases
console.log(
  "Expected output of max(20,10) is 20 and " +
    myFunctionTest(20, function () {
      return max(20, 10);
    }),
);
console.assert(max(20, 10) === 20, "max(20, 10) should be 20");

console.log(
  "Expected output of maxOfThree(5,4,44) is 44 and " +
    myFunctionTest(44, function () {
      return maxOfThree(5, 4, 44);
    }),
);
console.assert(
  maxOfThree(5, 4, 44) === 44,
  "maxOfThree(5, 4, 44) should be 44",
);

console.log(
  "Expected output of isVowel('a') is true and " +
    myFunctionTest(true, function () {
      return isVowel("a");
    }),
);
console.assert(isVowel("a") === true, "isVowel('a') should be true");

console.log(
  "Expected output of sum([1,2,3,4]) is 10 and " +
    myFunctionTest(10, function () {
      return sum([1, 2, 3, 4]);
    }),
);
console.assert(sum([1, 2, 3, 4]) === 10, "sum([1,2,3,4]) should be 10");

console.log(
  "Expected output of multiply([1,2,3,4]) is 24 and " +
    myFunctionTest(24, function () {
      return multiply([1, 2, 3, 4]);
    }),
);
console.assert(
  multiply([1, 2, 3, 4]) === 24,
  "multiply([1,2,3,4]) should be 24",
);

console.log(
  "Expected output of reverse('jag testar') is 'ratset gaj' and " +
    myFunctionTest("ratset gaj", function () {
      return reverse("jag testar");
    }),
);
console.assert(
  reverse("jag testar") === "ratset gaj",
  "reverse('jag testar') should be 'ratset gaj'",
);

console.log(
  "Expected output of findLongestWord(['hello', 'world', 'javascript']) is 10 and " +
    myFunctionTest(10, function () {
      return findLongestWord(["hello", "world", "javascript"]);
    }),
);
console.assert(
  findLongestWord(["hello", "world", "javascript"]) === 10,
  "findLongestWord(['hello', 'world', 'javascript']) should be 10",
);

console.log(
  "Expected output of filterLongWords(['hello', 'world', 'javascript'], 5) is ['javascript'] and " +
    myFunctionTest(["javascript"].toString(), function () {
      return filterLongWords(["hello", "world", "javascript"], 5).toString();
    }),
);
console.assert(
  filterLongWords(["hello", "world", "javascript"], 5).toString() ===
    ["javascript"].toString(),
  "filterLongWords(['hello', 'world', 'javascript'], 5) should be ['javascript']",
);

console.log("Map result:", b);
console.log("Filter result:", c);
console.log("Reduce result:", d);

console.log(
  "Expected output of b is [10,30,50,30,30] and " +
    myFunctionTest([10, 30, 50, 30, 30].toString(), function () {
      return b.toString();
    }),
);
console.assert(
  b.toString() === [10, 30, 50, 30, 30].toString(),
  "b should be [10,30,50,30,30]",
);

console.log(
  "Expected output of c is [3,3,3] and " +
    myFunctionTest([3, 3, 3].toString(), function () {
      return c.toString();
    }),
);
console.assert(c.toString() === [3, 3, 3].toString(), "c should be [3,3,3]");

console.log(
  "Expected output of d is 135 and " +
    myFunctionTest(135, function () {
      return d;
    }),
);
console.assert(d === 135, "d should be 135");
