//Question no 1
//Create an array named fruits that contains the following string elements: "apple","banana","mango","orange".
var fruits = ["apple", "banana", "mango", "orange"];
//Question no 2
// Declare an array named numbers that can contain only number elements and initialize it with the values 10,20,30and40
var numbers = [10, 20, 30, 40];
//Question no 3
//Acess the third element of a fruit array and assign it to a variable named thirdfruit.
var thirdfruit = fruits[2];
console.log(thirdfruit);
//Question no 4
//change the second element of number array in to 25
numbers[2] = 25;
console.log(numbers);
//Question no 5
//Add the element grape to the end of a fruit array using the method.
fruits.push("grapes");
console.log(fruits);
//Question no 6
//Remove the last element from the fruit array using the method and assign it to a variable named lastfruit.
var lastfruit = fruits.pop();
console.log(fruits);
//Question no 7
//Remove the first element from the fruit array by using the method and assign it to a value firstfruit.
var firstfruit = fruits.shift();
console.log(fruits);
//Question no 8
//Add the element kiwi in the beggining of the fruit array by using the method.
fruits.unshift("kiwi");
console.log(fruits);
//Question no 9
//Remove two element from  fruit array  starting from index using  the method
fruits.splice(1, 2);
console.log(fruits);
//Question no 10
//Insert the element "pineapple" and "pear" at the index of the fruit array using the method.
fruits.splice(1, 0, "pineapple", "pear");
console.log(fruits);
//Question no 11
//Create a new array named "citrusFruit" that contain the first two element of the fruit array using the method.
var citrusFruit = fruits.slice(0, 2);
console.log(citrusFruit);
//Question no 12
//Create a new array named lasrt two fruit that contain the last two elements of the fruit aaray using the method.
var lastTwoFruit = fruits.slice(-2);
console.log(lastTwoFruit);
