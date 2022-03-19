// FizzBuzz

const fizzBuzz = (e) => {
   if (typeof e !== "number") {
      console.log("Não é um número");
   } else {
      if (e % 3 === 0 && e % 5 === 0) {
         return "FizzBuzz";
      }
      if (e % 3 == 0) {
         return "Fizz";
      }
      if (e % 5 == 0) {
         return "Buzz";
      }
      return e;
   }
};

fizzBuzz(1);


//Reverse a string
const reverseString = str => str.split('').reverse().join('');


// conversor celcius para fehrenheit
const convertToFehr = celc => celc*1.8 + 32
console.log(convertToFehr(29));