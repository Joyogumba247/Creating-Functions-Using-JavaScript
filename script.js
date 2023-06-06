// 1. Create a function that will be able to convert figures from Fahrenheit to Celsius.

function fahrenheitToCelsius(fahrenheit) {
    var celsius = (fahrenheit - 32) * 5 / 9;
    return celsius;
  }
  
  // Usage:
  var temperatureInFahrenheit = 77;
  var temperatureInCelsius = fahrenheitToCelsius(temperatureInFahrenheit);
  console.log(temperatureInCelsius); // Output: 25|



//  2. Create a function that will calculate the average of numbers in an array.
function calculateAverage(numbers) {
    var sum = 0;
    for (var i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }
    var average = sum / numbers.length;
    return average;
  }
  
  // Example usage:
  var numberArray = [2, 4, 6, 8, 10];
  var averageValue = calculateAverage(numberArray);
  console.log(averageValue); // Output: 6
  
// 3. Create a function that checks if a number, n is divisible by two numbers x and y. All inputs are positive, non-zero digits.
function isDivisible(n, x, y) {
    if (n % x === 0 && n % y === 0) {
      return true;
    } else {
      return false;
    }
  }
  
  // Example usage:
  var number = 12;
  var divisor1 = 3;
  var divisor2 = 4;
  
  if (isDivisible(number, divisor1, divisor2)) {
    console.log(number + " is divisible by " + divisor1 + " and " + divisor2);
  } else {
    console.log(number + " is not divisible by " + divisor1 + " and " + divisor2);
  }

//   4. Create a function that will output the first 100 prime numbers. 
function generatePrimeNumbers(count) {
    var primeNumbers = [];
    var number = 2;
  
    while (primeNumbers.length < count) {
      if (isPrime(number)) {
        primeNumbers.push(number);
      }
      number++;
    }
  
    return primeNumbers;
  }
  
  function isPrime(number) {
    if (number < 2) {
      return false;
    }
    
    for (var i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false;
      }
    }
  
    return true;
  }
  
  // Example usage:
  var primes = generatePrimeNumbers(100);
  console.log(primes);

//  5.  Create a function that will return a boolean specifying if a number is a prime number. 
function isPrime(number) {
    if (number < 2) {
      return false;
    }
  
    for (var i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false;
      }
    }
  
    return true;
  }
  
  // Example usage:
  var number = 17;
  var isNumberPrime = isPrime(number);
  console.log(isNumberPrime); // Output: true
  
//   6. Create a function that receives an array of numbers of diverse numbers and returns an array containing only positive numbers. 

function getPositiveNumbers(numbers) {
    var positiveNumbers = numbers.filter(function(number) {
      return number > 0;
    });
  
    return positiveNumbers;
  }
  
  // Example usage:
  var numberArray = [-2, 5, -8, 10, -3, 7];
  var positiveNumbersArray = getPositiveNumbers(numberArray);
  console.log(positiveNumbersArray);

//   7. Write a program that prints the numbers from 1 to 100. But for multiples of 3 prints "Fizz" instead of the number and for the multiples of 5 prints "Buzz". For numbers which are multiples of both 3 and 5 prints "FizzBuzz".
for (var i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }


//   8. The marketing team is spending way too much time typing in hashtags. Let’s create a hashtag generator for them, our hashtag generator will meet the following criteria; 
// It must start with a hash symbol, #.
// Ignore all spaces in the input.
// All words must have their first letter capitalized.
// If the final result is going to be longer than 140 characters, it should return false.
// If the input or result is an empty string, it should return false.

function generateHashtag(str) {
    if (str === "" || str.length > 140) {
      return false;
    }
  
    var words = str.split(" ");
  
    var capitalizedWords = words.map(function(word) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    });
  
    var hashtag = "#" + capitalizedWords.join("");
  
    if (hashtag.length > 140) {
      return false;
    }
  
    return hashtag;
  }
  
  // Example usage:
  var input = "hello world";
  var hashtag = generateHashtag(input);
  console.log(hashtag);
  
