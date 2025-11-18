console.log("HEllo World");

//To execute in terminal: node J.js --> node is the engine that runs javascript code outside browser.


/* Multi
line
comment

// variables are loosely coupled.Decoide data type on runtime based on teh value
var firstName = "Ago"; // string until ES5 engine
Two more data let and const from ES6 onwards
 
 */
let a =10;
let b =11;
console.log(typeof a); // number
console.log(typeof(a)); 

//number, string, boolean, null, undefined, symbol(ES6), object
 let d = a +b;  
 console.log(d);

//in let we cant redeclate the vaiable, but in var we can redeclare.
//in let you can reassign the value, but in const you cant reassign the value.
//in const you must assign the value during declaration.no reassign

const flag = true;
if(!flag){   // interview Q1-> though fals is const, here we are not changing its value and storing ,hence this negate works
    let a = 20; // block scope
    console.log(a);
}else{
    let a = 30;
    console.log(a);
}
 let flag1 = true
while(flag1){   //interview Q3 _> while needed when we want to end when certain condition meets
    let a = 40;
    console.log(a);
    flag1 = false; // changing the value of flag to false to avoid infinite loop
}
do{
    let a = 50;
}while(false); // Interview Q2-> ends with semicolon

for(let i=0;i<3;i++){  // interview Q4 -> i is block scoped, run for n number of times
    console.log(i);
}


//Arrays-> collection of elements
let fruits = ["Apple","Mango","Banana"];
let fruits3 = []; // empty array
let fruits2 = new Array("Apple","Mango","Banana"); // not recommended
let fruits4= Array(); // empty array not recommended
let fruits5= Array(5); // array of size 5 with empty elements not recommended
console.log(fruits[2]); // Banana
fruits[1] = "Orange"; // reassigning value at index 1
console.log(fruits.length); // 3

fruits.push("Pineapple"); // adding element at the end
console.log(fruits.length); // 4
fruits.unshift("Pineapple"); // adds element at the beginning
console.log(fruits.length); // 4

fruits.pop(); // removes last element
console.log(fruits.length); // 3        
fruits.shift(); // removes element from the beginning
console.log(fruits.length); // 3  

//***************************************************************************
//to remove element by index
fruits.splice(index,1); // removes 1 element at index 1 from index=0
fruits.splice(1,1); // removes Mango, from first index remove next
fruits.splice(2,1) // from 2nd index remove next one
console.log(fruits.length); // 2
//***************************************************************************

//to get index of an element
let index = fruits.indexOf("Mango");
console.log(index); //1

//slice to get sub array
let citrus = fruits.slice(1,3); // from index 1 to 2
console.log(citrus); // ["Mango","Banana"]  

//to check contains 
let contains = fruits.includes("Banana");
console.log(contains); // true

//to loop through array
for(let i=0;i<fruits.length;i++){
    console.log(fruits[i]);
}
//for..of loop
for(let fruit of fruits){
    console.log(fruit);
}
//Difference between for..of and for..in is that 
// for..of iterates over values, while 
// for..in iterates over keys (indexes in case of arrays).
//practical use of for of is when you need to access the values directly
//practical use of for in is when you need to access the indexes to manipulate the array elements
//is there any performance difference? -> negligible difference in performance for small arrays, but for large arrays for..of is generally faster.

//for..in loop
for(let index in fruits){
    console.log(fruits[index]);
}

//foreach
fruits.forEach((fruit,index)=>{
    console.log( `Index is ${index}, Fruit is ${fruit}`);
});
//output:
//Index is 0, Fruit is Apple
//Index is 1, Fruit is Mango

//reduce filter map
let numbers = [1,2,3,4,5];  
let sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); // 15     
let evenNumbers = numbers.filter(num => num % 2 === 0); //why 3 === here? -> to check for equality and type
console.log(evenNumbers); // [2,4]

//Scenario suare each index and sum the new array
let squaredNumbers = numbers.map(num => num * num);
console.log(squaredNumbers); // [1,4,9,16,25]
let sumis = squaredNumbers.reduce((sum,cur) => sum + cur, 0);

//or chain
let op = numbers.map(num => num * num).reduce((sum,cur) => sum + cur, 0);
console.log(op); // 55

//sort
let unsorted = [5,3,8,1,2];
unsorted.sort((a,b) => a - b); // ascending   -> custome logic prefer small difference
console.log(unsorted); // [1,2,3,5,8]
unsorted.sort((a,b) => b - a); // descending

//String array sort
let stringArray = ["Banana","Apple","Mango","Orange"];
stringArray.sort(); // ascending
console.log(stringArray); // ["Apple","Banana","Mango","Orange"]
stringArray.sort((a,b) => b.localeCompare(a)); // descending
console.log(stringArray); // ["Orange","Mango","Banana","Apple"]    
//localeCompare is used to compare strings in a locale-aware manner

let productPrices = [1,22.22,5]
let discountedPrices = productPrices.map(price => price * 0.9); // 10% discount
console.log(discountedPrices); // [0.9,20.0,4.5]
let affordableProducts = discountedPrices.filter(price => price < 50);
let totalAffordable = affordableProducts.reduce((sum,cur) => sum + cur, 0);

//find
let found = numbers.find(num => num > 3);
console.log(found); // 4    is it 4 always? -> yes, find returns the first element that satisfies the condition
let notFound = numbers.find(num => num > 10);
console.log(notFound); // undefined, why undefined? -> because no element satisfies the condition, how? -> find returns undefined when no element is found
//the same logic above finds 4 , why not 11 here? -> because 11 is not in the array

//findIndex 
let foundIndex = numbers.findIndex(num => num > 3);
console.log(foundIndex); // 3 , why 3? -> because index of 4 is 3
let notFoundIndex = numbers.findIndex(num => num > 10);
console.log(notFoundIndex); // -1 , why -1? -> because no element satisfies the condition
//-1 indicates that no element was found
//the same logic above finds index 3 , why not index of 11 here? -> because 11 is not in the array

//join
let joined = fruits.join(", ");
console.log(joined); // "Apple, Mango, Banana"
//split
let splitFruits = joined.split(", ");
console.log(splitFruits); // ["Apple","Mango","Banana"] how? -> split splits the string into an array based on the delimiter provided
//why use join and split? -> to convert between array and string representations

//template literals
let name = "Ago";
let greeting = `Hello, ${name}! Welcome to JavaScript.`; //is greeting tempalte literal? -> yes, because it uses backticks and allows interpolation
console.log(greeting); // "Hello, Ago! Welcome to JavaScript."
//multi line
let multiLine = `This is line 1.    
This is line 2.
This is line 3.`;
console.log(multiLine);
//why use template literals? -> for easier string interpolation and multi-line strings
//how is it different from regular strings? -> regular strings use single or double quotes and require concatenation for variables

//arrow functions
let add = (x,y) => x + y;
console.log(add(5,3)); // 8
//why use arrow functions? -> for shorter syntax and lexical this binding
//how is it different from regular functions? -> regular functions have their own this context
function multiply(x,y){
    return x * y;
}
console.log(multiply(5,3)); // 15
//regular functions can be hoisted, arrow functions cannot, hosited means you can call the function before its declaration, 
// how? -> because function declarations are hoisted to the top of their scope
    
//scope of var vs let  _ Intervoiew Q5
var a = 10
console.log(a);
if(1==1){
    var a = 20;
    console.log(a);
}
console.log(a); // 20 because var is function scoped

let b = 10;
console.log(b);
if(1==1){
    let b = 20;
    console.log(b); // 20
}   
console.log(b); // 10 because let is block scoped


//String methods
let str = " Hello, JavaScript World! ";
console.log(str.length); // 25
console.log(str.trim()); // "Hello, JavaScript World!"
console.log(str.toUpperCase()); // " HELLO, JAVASCRIPT WORLD! "
console.log(str.toLowerCase()); // " hello, javascript world! "
console.log(str.indexOf("JavaScript")); // 8 , returns -1 if not found

//find occurance of string in sentence
let aa = "sunday is fun day";
let ocunter=0;
let searchStr = "day";
let index = aa.indexOf(searchStr);
while(index!=-1){
    ocunter++;
    index = aa.indexOf(searchStr,index + 1);
}
console.log(ocunter); // 3, why not 2?
//explanation: the while loop continues to search for the substring "day" in the string "sunday is fun day".
//each time it finds an occurrence, it increments the counter and updates the index to search for the next occurrence.
//it finds "day" in "sunday", then again in "day", totaling 2 occurrences.  

console.log(str.slice(7,17)); // "JavaScript"
console.log(str.replace("World","Universe")); // " Hello, JavaScript Universe! "
//why use these methods? -> for string manipulation and information retrieval
//how do they work? -> they return new strings or values based on the original string   
//template literals vs string methods -> template literals are for creating strings with variables, 
// string methods are for manipulating existing strings
//when to use which? -> use template literals for dynamic strings, use string methods for string operations

console.log(str.split(", ")); // [" Hello","JavaScript World! "]
//split splits the string into an array based on the delimiter provided
//parseInt
let numStr = "42";
let numInt = parseInt(numStr);
console.log(numInt); // 42
console.log(typeof numInt); // "number"
//back to string
let numStr2 = numInt.toString();
console.log(numStr2); // "42"
console.log(typeof numStr2); // "string"
//why use parseInt and toString? -> for type conversion between strings and numbers
//how do they work? -> parseInt converts a string to an integer, toString converts a number to a string
//when to use which? -> use parseInt when you need a number from a string, use toString when you need a string from a number
//Difference between == and ===
let x = 5;      
let y = "5";
console.log(x == y); // true, why? -> because == performs type coercion
console.log(x === y); // false, why? -> because === checks for both value and type equality
//when to use which? -> use === for strict equality checks to avoid unexpected type coercion
//how do they work? -> == converts types before comparison, === does not convert types


//Jabscript objects, Object is colelction os properties(Key-Value pairs)
let person = {
    firstName: "Ago",
    lastName: "Ben",
}
console.log(person.firstName); // "Ago" obect.property access using dot notation
console.log(person["lastName"]); // "Ben" object.property access using bracket notation
//adding new property
person.age = 30;
console.log(person.age); // 30

//add new property using bracket notation
person["city"] = "New York";        
console.log(person.city); // "New York"

//add new property using variable as key
let key = "country";
person[key] = "USA";  
console.log(person.country); // "USA"

//adding method to object
person.getFullName = function(){
    return `${this.firstName} ${this.lastName}`; // this refers to the current object
}
console.log(person.getFullName()); // "Ago Ben"

//another way to add method using arrow function
person.getFullNameArrow = () => {
    return `${person.firstName} ${person.lastName}`; // this does not refer to the current object in arrow functions
}
console.log(person.getFullNameArrow()); // "Ago Ben"

//get fullname
console.log(person.getFullName()); // "Ago Ben" , See you have called as fucntion ()
console.log(person.getFullName); // [Function: getFullName] , see you have not called as function, will it work? -> no, it will return the function definition


//deleting property
delete person.age;  
console.log(person.age); // undefined
//update property
person.firstName = "John";
console.log(person.firstName); // "John"
person["firstName"] = "Doe"; //-> yes, it will update the firstName property to "Doe"
console.log(person.firstName); // "Doe"
//propert existence check
console.log("age" in person); // false
console.log("firstName" in person); // true
//loop through properties
for(let key in person){     
    console.log(`${key}: ${person[key]}`);
    console.log(person.key); // undefined, why? -> because person.key looks for a property named "key", not the value of the variable key
    console.log(person["key"]); // undefined, why? -> same reason as above, it looks for a property named "key"
    console.log(person[key]); // correct way to access property using variable key
}
//for of works? -> no, because person is not iterable
//same person as class
//Suppose if you already know the first name, last name
class SimplePerson {
    firstName = "Ago";
    lastName = "Ben";
}
console.log(SimplePerson.firstName); // undefined, why? -> because firstName is an instance property, not a static property
let sp = new SimplePerson(); // create instance of SimplePerson and call directly



//if you dynamcailly pass firstname last name, Then dynamic value intializton needed, use constrctor class looks like this
module.exports = class Person {
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    age =25; // instance property or static property with default value 25
    getFullName(){ //get property or getter method?, what is this? -> this is a regular method that returns the full name
        return `${this.firstName} ${this.lastName}`;
    }   
    get lastnameMethod(){ // getter property or getter method
        return this.lastName;
    }
}
let p1 = new Person("Ago","Ben");
let p2 = new Person("Ago2","Ben2");
console.log(p1.firstName); // "Ago" NO getter used here, Still it works, coorect? -> yes, because we are accessing the property directly
console.log(p1.lastName); // "Ben" NO getter used here, Still it works, correct? -> yes, because we are accessing the property directly

console.log(p1.lastnameMethod());// will this work? -> yes, because we are calling the getter method
console.log(p1.lastnameMethod); // "Ben" getter used here, why no () ? -> because we are accessing the getter property, not calling a method

console.log(p1.getFullName()); // "Ago Ben" dyncmically constructed full name using method
console.log(p1.getFullName); // will this work? -> no, it will return the function definition

console.log(p1.age); // 25
console.log(p2.age); // 25 , Always 25 because age is instance property with default value 25

const { type } = require('os');
//By module exports you can import this class in other files using require() function
    const Person = require('./J.js');
    let p3 = new Person("Alice","Smith");
    console.log(p3.getFullName()); // "Alice Smith"


//Inheritance
class Employee extends Person {
    constructor(firstName, lastName, employeeId){ //can child class constrctor have more parameters than parent class? -> yes
        super(firstName, lastName); // call parent class constructor
        this.employeeId = employeeId;
    }   
    getEmployeeDetails(){
        return `ID: ${this.employeeId}, Name: ${super.getFullName()}`;  // calling parent class method using super.
    }
}
let emp = new Employee("Bob","Johnson",101);
console.log(emp.getEmployeeDetails()); // "ID: 101, Name: Bob Johnson"
console.log(emp.age); // 25 inherited from Person class

//Interview Question Recap:
//1. can javascript object hold a function as property? -> Yes
//example;
let obj = 
{ 
    name: "test",
    greet: function() 
    { 
        console.log("Hello"+ this.name); //referring own property to another property
    },
    age: () => 25 // arrow function as property;
};
obj.greet(); }  // "Hello test"  // calling function property see () used
console.log(obj.age()); // 25


//Q2:What are anonymous functions in JavaScript? ->Functions without a name, often used as arguments to other functions or assigned to variables.

General function is like this:
function add(a,b){  // fn has name add
    return a + b;
}
//anonyous function:
let sum = function(a,b){ // fn has no name, assigned to variable sum
    return a + b;
};
//another anonymous function using arrow function syntax
let multiply = (a,b) => a * b; // arrow function assigned to variable multiply
console.log(sum(2,3));; // 5
console.log(multiply(2,3));; // 6

Q3: Diffdrence between var, let and const?
 y= 10;// if dont declare anythin gthen it is var by default
//var is function scoped/ global, can be redeclared and reassigned
//let is block scoped, cannot be redeclared but can be reassigned
//const is block scoped, cannot be redeclared or reassigned
//give me example for each
var x = 10; 
let y = 20;
const z = 30;
x = 15; //reassigned
y = 25; //reassigned
//z = 35; //error: reassignment not allowed
console.log(x); // 15
console.log(y); // 25
console.log(z); // 30
// block and fucntion scoped example below  
function testVarLetConst(){
    if(true){
        var a = 10; // function scoped
        let b = 20; // block scoped
        const c = 30; // block scoped
    }   
    console.log(a); // 10
    //console.log(b); // error: b is not defined
    //console.log(c); // error: c is not defined
}   


function outer() {
  var x = "outer";
  function inner() {
    console.log(x);
    let x = "inner";
  }
  inner();
}
outer(); //output? -> Error, why? -> because of temporal dead zone for let variable x in inner function
//show me the execurion flow
is outer called first? -> yes
//then inner is called
//inside inner, it tries to access x before its declaration with let
//this causes a ReferenceError due to temporal dead zone
//if we change let x = "inner"; to var x = "inner"; what happens? -> it will print "outer" because var is hoisted and initialized to undefined
//so the inner function will access the outer x variable


//Q4:is javascript asynchronous or synchronous?     
//Javascript is single-threaded and synchronous by default, but it can handle asynchronous operations using callbacks, promises, and async/await.
//give me example for each
//synchronous example   
console.log("Synchronous Start");
for(let i=0;i<5;i++){
    console.log(i);
}   
console.log("Synchronous End");

//asynchronous example using callback
console.log("Asynchronous Start");
setTimeout(() => {
    console.log("Inside setTimeout");
}, 1000); // callback after 1 second
console.log("Asynchronous End");

//asynchronous example using promise
let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise Resolved");
    }, 1000);
});
promise.then((message) => {
    console.log(message);
}); 
//asynchronous example using async/await
async function asyncFunction() {
    let result = await new Promise((resolve, reject) => {   
        setTimeout(() => {
            resolve("Async/Await Resolved");
        }, 1000);
    });
    console.log(result);
}


//WHat is call back fucntion in javascript? -
// > A callback function is a function passed into another function as an argument, 
// which is then invoked inside the outer function to complete some kind of routine or action.
//used for asynchronous operations, event handling, and functional programming.
function fetchData(callback) {
  
    //consider I connect to db to fetch data and it takes 5000 seconds
    //intriduce setTimeout to simulate delay
    setTimeout(()=>{
        // after 5 seconds, data is fetched
        console.log("Dtaa Fetched ");
    },5000)   // at this point data is fetched
    // now call the callback function to process the data
    callback();  //we might htink why cant we call directly processData() here? its generaic ,any function passed as argument will be called
}
function ProcessData() {
    console.log("I processing the data function");
}
function viewData() {
    console.log("I view the data function");
}
fetchData(ProcessData);
//output:
//I processing the data function
fetchData(viewData);
//output:   
//I view the data function 


//Difference between callback and promise?
// A callback is a function passed as an argument to another function,
// while a promise is an object representing the eventual completion or failure of an asynchronous operation.
// Promises provide a cleaner and more manageable way to handle asynchronous code compared to callbacks, especially for complex operations.

//example using promise
function fetchDataPromise() {
    return new Promise((resolve, reject) => {  //resolve,pending,reject states of promise
        setTimeout(() => {  
            //after fetching teh data, store in variable and pass that to resolve
            const data = "Data from promise";
            resolve(data); // data fetched successfully");
        }, 1000);
    });
}
fetchDataPromise().then((data) => { //then will act when promise is resolved
    //whtat is data here? -> data is the value passed to resolve() in the promise
  //but above resolve has "Data from promise" as sting is this data? -> yes, so data will be "Data from promise"
    console.log(data);
});
//output:
//Data from promise


//using await   
async function fetchDataAsync() {
    const data = await fetchDataPromise(); // wait for promise to resolve
    console.log(data);
}
fetchDataAsync();
//output:
//Data from promise
//when to use which? -> use callbacks for simple asynchronous operations, use promises for more complex operations and chaining,
// and use async/await for cleaner syntax and easier error handling in asynchronous code.


Difference between == and ===
let x = 5;      
let y = "5";
console.log(x == y); // true, why? -> because == performs type coercion

// During assertion  what you use ==  or ==?
Ans depends:
iffrom browser datatype always stringArray, if it is from BD datatype can variy.Ans


null vs undefined
// null is an assigned value, undefined means a variable has been declared but not assigned a value.
let a; // undefined 
console.log(a); // undefined
let b = null; // null

console.log(b); // null
console.log(typeof a); // "undefined"
console.log(typeof b); // "object"
//when to use which? -> use null to indicate intentional absence of value, use undefined for uninitialized variables
//how do they work? -> null is an JS object without property, undefined is a type itself
console.log(x === y); // false, why? -> because === checks for both value and type equality

Create JS array student name and marks
const students = [
    { name: "Alice", marks: 20 },
    { name: "Bob", marks: 30 },
    { name: "Charlie", marks: 35 },
    { name: "David", marks: 90 }
];
//student apssed >=35
 students.filter(x=> x>=35).forEach(s=> console.log(s.name)); // Charlie, David
 //update passed student name to uppercase
 students.filter(x=> x>=35).forEach(s=> s.name = s.name.toUpperCase());
 const uppercase =  students.filter(x=> x>=35).map(s=> s.name = s.name.toUpperCase());
 console.log(students);
 //total marks of all students passed
    const totalMarks = students.filter(x=> x.marks>=35).reduce((sum,cur) => sum + cur.marks, 0);
    console.log(totalMarks); // 125
