console.log(x); // undefined(not an error)
var x = 10;

function example() {
    if (1) {
        var count = 10;
    }
    console.log(count);
}
example(); // 10

function greet() {
    console.log("hello");
}
greet(); // "hello"

sayhello(); // "hi"
function sayhello() {
    console.log("hello from sayhello");
}

const greetexpr = function() {
    console.log("hello , this is a function expression");
};
greetexpr(); // call aftrer declaration

const greetname = function greeting() {
    console.log("hello , this is a named function expression");
};
greetname(); // call aftrer declaration


function process(callback) {
    console.log("processing...");
    callback();
}

function done() {
    console.log("task completed.");
}
process(done);// passing function as argument



function higherOrderFunction(func) {
    console.log("calling the passed function:");
    func();
}

function sayHi() {
    console.log("Hi from callback");
}

higherOrderFunction(sayHi); // passing function as argument



//normal function expression
const greetnormal=function(){
    return "Hello!"+name;
};

//arrow function expression
const greetArrow=(name)=>{
    return "Hello!"+name;
};
console.log(greet("Alice"));
console.log(greetArrow("Bob"));
//
const add=(a,b)=>a+b;
console.log(add(5,3));//8

const square=n=>n*n;
console.log(square(4));//16

//
const fruit = ["apple", "banana", "cherry"];
const newlength=fruit.push("orang");   // end of the array
console.log(fruit); // ["apple", "banana", "cherry", "orange"]
console.log(newlength); // 4
console.log(fruit.length); // 4

//

const fruit = ["apple", "banana", "cherry"];
const newlength=fruit.unshift("orange");
console.log(fruit); // ["apple", "banana", "cherry", "orange"]
console.log(newlength); // 4
console.log(fruit.length); // 4

//
const fruit = ["apple", "banana", "cherry"];
const newlength=fruit.shift();// removes first element
console.log(fruit); // ["apple", "banana", "cherry", "orange"]
console.log(newlength); // 4
console.log(fruit.length); // 4

//
let fruit = ["apple", "banana", "cherry", "date"];

// extract from index 1 to 3 (not including 3)
let slicedFruits = fruit.slice(1, 3);
console.log(sliced); // ["banana", "cherry"]

console.log(fruit); // original array remains unchanged

//negative index counts from the end
let lastTwoFruits = fruit.slice(-2);
console.log(lastTwo); // ["cherry", "date"]

//
let numbers = [1, 4, 7, 12, 15];

// find the first number greater than 10
let found = numbers.find(num => num > 10);

console.log(found); // 12) {

//
//even numbers
let nums = [3, 5, 7, 8, 10];
let evenNums = nums.filter(num => num % 2 === 0);
console.log(evenNums); // [8, 10]

//
//length grater than 4
let names = ["Alice", "Bob", "Charlie", "David"];   
let longNames = names.filter(name => name.length > 4);
console.log(longNames); // ["Alice", "Charlie", "David"]

//
let numbers = [1, 2, 3, 4, 5];
let doubled = numbers.map(num => num * 2);
console.log(numbers); // [1, 2, 3, 4, 5]
console.log(doubled); // [2, 4, 6, 8, 10]

//map method
let numbers = [1, 2, 3, 4, 5];
let squared = numbers.map(num => num * num);
console.log(numbers);   // [1, 2, 3, 4, 5]
console.log(squared);   // [1, 4, 9, 16, 25]

//map method
let prices=[100, 200, 300];
let counted = prices.map(price => price +price + 100);
console.log(counted);   

//
let persons=["Alice", "Bob", "Charlie"];
const addmr=persons.map(m=>"Mr. "+m);
console.log(addmr); //["Mr. Alice", "Mr. Bob", "Mr. Charlie"]

//filter method
let ages=[12, 17, 22, 29, 34, 15];
const adults=ages.filter(a=>a>=18);
console.log(adults); //[22, 29, 34]

//
let collage = {
    name:"students";
    id:12345;
    location:"New York";    
}
console.log(collage.name); // "students"
console.log(collage["id"]); // 12345

//
let collage = {
    name:"students";
    id:12345;
    location:"New York";    
}
collage.location="Los Angeles"; // update location
collage["id"]=54321; // update id
console.log(collage.location); // "Los Angeles"
console.log(collage.id); // 54321

//arrays of objects grade students
let students=[
    {name:"Alice", age:20, grade:"A"},
    {name:"Bob", age:22, grade:"B"},
    {name:"Charlie", age:24, grade:"A"}
];
//using map to get names of students 
let names=students.map(s=>s.name);
console.log(names); //["Alice", "Bob", "Charlie"]

//using filter and map get the names marks 80 and bellow
let marks=[
    {name:"Alice", score:85},
    {name:"Bob", score:75},
    {name:"Charlie", score:90},
    {name:"David", score:65},
];
let lowScorers=marks.filter(m=>m.score<=80).map(m=>m.name);
console.log(lowScorers); //["Bob", "David"]

//for...in loop
const person = {
    name: "John",
    age: 30,
    city: "New York"
};
for (let key in person) {
    console.log(key + ": " + person[key]);
}
//
//for...of loop
let fruitrs = ["apple", "banana", "cherry"];        
for (let fruit of fruitrs) {
    console.log(fruit);
}
//
//for...of with string
let message = "Hello";
for (let char of message) {
    console.log(char);
}
//for each loop
let names = ["Alice", "Bob", "Charlie"];
names.forEach(function(name) {
    console.log(name);
});

//
let numbers = [1, 2, 3, 4, 5];
let total = numbers.reduce((sum,current) => sum + current, 0);
console.log(total); // 15h

//spread operator
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let combined = [...arr1, ...arr2];
console.log(combined); // [1, 2, 3, 4, 5, 6]