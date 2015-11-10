(function() {
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
////    ______                _   _                ////
////    |  ___|              | | (_)               ////
////    | |_ _   _ _ __   ___| |_ _  ___  _ __     ////
////    |  _| | | | '_ \ / __| __| |/ _ \| '_ \    ////
////    | | | |_| | | | | (__| |_| | (_) | | | |   ////
////    \_|  \__,_|_| |_|\___|\__|_|\___/|_| |_|   ////
////                                               ////
////                                               ////
////    ______               _   _                 ////
////    | ___ \             | | (_)                ////
////    | |_/ / __ __ _  ___| |_ _  ___ ___        ////
////    |  __/ '__/ _` |/ __| __| |/ __/ _ \       ////
////    | |  | | | (_| | (__| |_| | (_|  __/       ////
////    \_|  |_|  \__,_|\___|\__|_|\___\___|       ////
////                                               ////
////                                               ////
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////


// Q1
// Write a function called `sum` that takes two
// parameters and returns the sum of those 2 numbers.

var sum = function (a, b) {
  return a + b;
};

// Q2
// Write a function named `avg` that takes 3 parameters
// and returns the average of those 3 numbers.

var avg = function (a, b, c) {
  return (a + b + c)/ 3;
};

// Q3
// Write a function called `getLength` that takes one
// parameter (a string) and returns the length

var getLength = function (a) {
  return a.length;
};

// Q4
// Write a function called `greaterThan` that takes
// two parameters and returns `true` if the second
// parameter is greater than the first. Otherwise
// the function should return `false`.

var greaterThan = function (a, b) {
  if (a < b) {
    return true;
} else { 
    return false; }
};

// Q5
// Write a function called `greet` that takes a
// single parameter and returns a string that
// is formated like "Hello, Name!" where *Name*
// is the parameter that was passed in.

var greet = function (name) {
  return "Hello, " + name + "!";
};

// Q6
// Write a function called `madlib` that takes
// 4 or more parameters (words). The function 
// should insert the words into a pre-defined
// sentence. Finally the function should return
// that sentence.
// Note: When I say words and sentence I mean
// strings. For example:
// words: "quick", "fox", "fence"
// sentence: "quick brown fox jumps over the fence"

var madLib = function (num1, place, num2, erAdj, occupation) {
 return "Pro-Tip: every " + num1 + " hour(s), while drinking craft beer from " + place + ", spend " + num2 + " hour(s) playing ping-pong with JD. It will make you a way " + erAdj + " super-ninja-" + occupation + "/developer than 3WSchools ever could!";
};


///////////////////////////////////////////////////////
///////////////////////////////////////////////////////

// ---------------------
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// ---------------------

function max(a, b){
  if (a > b) {
    return a; 
} if (a < b) {
    return b; }
};

// ---------------------
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// ---------------------


function maxOfThree(a, b, c){
  var numbers = [a,b,c]
  numbers.reduce(function(largest, current) {
    if (current > largest) {
        largest = current;
    }
    return largest;
    }, Number.MIN_VALUE);
};

console.log(maxOfThree(2,6,4));
// ---------------------
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// ---------------------

function isVowel(char){

    var vowels = 'aeiou';

    if (vowels.indexOf(char) !== -1) {
      return true;
    } else {
      return false;
    }
}

// ---------------------
// Write a function translate() that will translate a text into "rÃ¶varsprÃ¥ket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
// ---------------------

function rovarspraket(phrase){

    var chars = phrase.split('');
    var finalPhrase = [];

    chars.forEach( function(char) {

      if (!isVowel(char)) {
        finalPhrase.push(char + 'o' + char);
      } else {
        finalPhrase.push(char);
      }

    });

    return finalPhrase.join('');

}

// ---------------------
// Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
// ---------------------

function reverse(string){
  return string.split('').reverse().join('');
}

// ---------------------
// Write a function findLongestWord() that takes an array of words and returns the length of the longest one.
// ---------------------

function findLongestWord(words){
    var longest = '';
        words.forEach(function(word){
            if (word.length > longest.length)
                longest = word;
        });
            return winner.length;
}

// ---------------------
// Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
// ---------------------

function filterLongWords(words, i){

  var x = words.filter( function (word) {
    return word.length > i;
  });
  
  return x;  
}

filterLongWords(['pear', 'banana', 'orange'], 4);

// ---------------------
// Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
// ---------------------

// create blank object
var obj = {};
function charFreq(string){
// declare a variable that splits string into seperate letters and sort them in alphabetical order
  var eachLetter = string.split('').sort('');
// map each letter and look for every instance of each letter until there's none left
  eachLetter.map(function(letter) {
// looks for letter in object
    if (letter in obj) {
// ++ adds an interval for every instance of a letter in the object
      obj[letter] ++;
// if no interval, letter count is 1
    } else {
      obj[letter] = 1;
    };
  });
  return obj;
}

}());