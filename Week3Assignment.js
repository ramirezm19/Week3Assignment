//Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93. 
    //Programmatically subtract the value of the first element in the array from the value in the last element (do not use numbers to reference the last element, 
    //find it programmatically, ages[7] - ages[0] is not allowed.) Print the result to the console.
var ages = [93, 9, 23, 64, 2, 8, 28, 3];

firstAge = ages[0];
lastAge = ages[ages.length-1];

console.log(lastAge - firstAge); 


//Add a new age to your array and repeat the step above to ensure it is dynamic (works for arrays of different lenghts).
ages.push(40);
newAges = ages

newFirstAge = newAges[0];
newLastAge = newAges[ages.length-1];

console.log(newLastAge - newFirstAge);

//Use a loop to iterate through the array and calculate the average age. Print the result to the console.
var sum = 0
for (var number of newAges){
    sum+=number;
}
average = sum/newAges.length;
console.log(average);

//Create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.
//Use a loop to iterate through the array and calculate the average number of letters per name. Print the result to the console.
var names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];

let totalLetters = 0;
for (let i = 0; i <names.length; i++){
    totalLetters += names[i].length;
}
console.log(totalLetters/names.length);

//Use a loop to iterate through the array again and concatenate all the names together, separated by spaces, and print the result to the console.
 
for(let i = 0; i <names.length; i++){
    console.log(names.join(' '));
}


// //How do you access the last element of any array?
// array[array.length-1]

// //How do you access the first element of any array?
// array[0]

//Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array. For example:
// namesArray = ["Kelly", "Sam", "Kate"] // given this array
// nameLengths = [5, 3, 4] // create this new array

let nameLengths = names.map(function(element) {
    return element.length;
});
console.log(nameLengths);

// //Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. Print the result to the console.
let sum1 = 0

for (let i = 0; i < nameLengths.length; i++) {
    sum1 += nameLengths[i];
}
console.log(sum1);

//Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in "Hello", and 3, I would expect the function to return 'HelloHelloHello').
var phrase = "BusyBee"
var n = 4

function createBuzz(phrase, n) {
    return phrase.repeat(n);
    }
console.log(createBuzz(phrase,n));

// //Write a function that takes two parameters, word and n, as arguments and returns a full name (the full name should be the first and the last name separated by a space).
var word = "Jorge"
var n = "Ramos"

function createFullName(word, n){
    return word + " " + n;
}
console.log(createFullName(word, n));

//Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.
var numbers2 = [5, 7, 31, 57, 24]
let sum2 = 0

function sumMoreThanHundred(numbers2) {
    for (let i = 0; i < numbers2.length; i++){
        sum2 += numbers2[i];
    }
    if (sum2 >= 100) {
        return "true"
    }}
    console.log(sumMoreThanHundred(numbers2));

//Write a function that takes an array of numbers and returns the average of all the elements in the array.

var list = [2, 4, 6, 8]
var total = 0

function getAverage(list, total) {
    for (i = 0; i < list.length; i++) {
        total += list[i];
    }
    return average = total/list.length;
}
console.log(getAverage(list, total));

//Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.
var z = [1, 2, 3, 4, 5]
var y = [6, 7, 8, 9, 10]


function avgNum(x){
    let sum = 0;
    for (let i = 0; i < x.length; i++){
        sum += x[i];
    }
    return sum/x.length;
 }
console.log(avgNum(z));

function compareTo(z, y){
    return avgNum(z) > avgNum(y);
}
console.log(compareTo(z, y));

//Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket and returns true if it is hot outside and if moneyInPocket is greater than 10.50.

var isHotOutside = true
var moneyInPocket = 10.49

function willBuyDrink (isHotOutside, moneyInPocket) {
    if (isHotOutside && moneyInPocket >= 10.50){
    return true;
} else return false;
}
console.log(willBuyDrink(isHotOutside, moneyInPocket));


//Create a function of your own that solves a problem. In comments, write what the function does and why you created it.

let a = "1035"

function openFrontDoor(a){
    if (a === "1055"){
        return "Open";
    }
        return "Door Remains Locked"
    }
console.log(openFrontDoor(a));