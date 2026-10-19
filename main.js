
// Variables and data types
const studentName = "Chukwuma Nicodemus Ndukwu";
const age = 43;
const birthYear = 1983;
const isStudent = true;
const favoriteColors = ["blue", "black", "white"];
const today = new Date();

console.log(`Name: ${studentName}`);
console.log(`Age: ${age}`);
console.log("Birth year:", birthYear);
console.log(`Is a student: ${isStudent}`);
console.log(`Favorite colors: ${favoriteColors}`);
console.log(`Today's date: ${today.toDateString()}`);

// typeof operator
console.log(typeof studentName); // string
console.log(typeof age);         // number
console.log(typeof isStudent);   // boolean

// let vs const
let score = 100;
score = 150;
console.log(`Updated score: ${score}`);

const PI = 3.14159;
console.log(`Value of PI: ${PI}`);


console.log("===== TASK 7.2: NUMBER OPERATIONS =====");

const a = 10;
const b = 3;

console.log(`Addition: ${a + b}`);
console.log(`Subtraction: ${a - b}`);
console.log(`Multiplication: ${a * b}`);
console.log(`Division: ${a / b}`);
console.log(`Remainder: ${a % b}`);
console.log(`Power: ${a ** b}`);

let count = 0;
count++;
console.log(`After increment: ${count}`);

count--;
console.log(`After decrement: ${count}`);


console.log("===== TASK 7.2: STRING OPERATIONS =====");

const firstName = "Chukwuma";
const lastName = "Ndukwu";

const fullName = `${firstName} ${lastName}`;
const greeting = `Hello, ${firstName}!`;
const message = `${firstName} has ${firstName.length} letters.`;

console.log(fullName);
console.log(greeting);
console.log(message);
console.log(fullName.toUpperCase());
console.log(fullName.toLowerCase());
console.log(firstName.charAt(0));
console.log(fullName.includes("Chukwuma"));


console.log("===== TASK 7.2: COMPARISON AND LOGICAL OPERATORS =====");


console.log("===== ARITHMETIC OPERATORS =====");

console.log(10 + 5);  // Addition: 15
console.log(10 - 5);  // Subtraction: 5
console.log(10 * 5);  // Multiplication: 50
console.log(10 / 5);  // Division: 2
console.log(10 % 3);  // Remainder: 1
console.log(2 ** 3);  // Exponentiation: 8

console.log(5 > 3);       // true
console.log(5 < 3);       // false
console.log(5 === 5);     // true
console.log(5 !== 3);     // true

console.log(true && true);  // true
console.log(true || false); // true
console.log(!true);         // false


console.log("===== AGE CALCULATIONS =====");

const approximateAgeInDays = Math.round(age * 365.25);
const approximateAgeInHours = approximateAgeInDays * 24;
const currentYear = today.getFullYear();
const yearTurning100 = currentYear + (100 - age);

console.log(`Approximate age in days: ${approximateAgeInDays}`);
console.log(`Approximate age in hours: ${approximateAgeInHours}`);
console.log(`Year you turn 100: ${yearTurning100}`);


console.log("===== TASK 7.3: FUNCTIONS =====");

// 1. Function declaration
function greetUser(name) {
    return `Hello, ${name}!`;
}

// 2. Function expression
const addNumbers = function(a, b) {
    return a + b;
};

// 3. Arrow function
const multiplyNumbers = (a, b) => a * b;

// 4. Arrow function with a body and a condition
const divideNumbers = (a, b) => {
    if (b === 0) {
        return "Cannot divide by zero";
    }
    return a / b;
};

// Test the different function styles
console.log(greetUser("Chukwuma"));
console.log(addNumbers(10, 5));
console.log(multiplyNumbers(4, 3));
console.log(divideNumbers(10, 2));
console.log(divideNumbers(10, 0));

// Exercise 2: Build these functions

function calculateArea(width, height) {
    return width * height;
}

function celsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

function isEven(number) {
    return number % 2 === 0;
}

function getInitials(fullName) {
    return fullName
        .trim()
        .split(/\s+/)
        .map(name => name.charAt(0).toUpperCase())
        .join("");
}

function reverseString(str) {
    return str.split("").reverse().join("");
}

// Test the five functions
console.log(calculateArea(5, 4)); 
console.log(celsiusToFahrenheit(25));
console.log(isEven(8));
console.log(getInitials("Chukwuma Ndukwu"));
console.log(reverseString("Kenya"));

// Exercise 3: Default parameters

function greetWithDefault(name = "Guest", greeting = "Hello") {
    return `${greeting}, ${name}!`;
}

console.log(greetWithDefault());
console.log(greetWithDefault("Chukwuma"));
console.log(greetWithDefault("Chukwuma", "Welcome"));

// Build a tip calculator
function calculateTip(bill, tipPercent = 15) {
    return bill * tipPercent / 100;
}

console.log(calculateTip(1000)); 
console.log(calculateTip(1000, 20));

console.log("===== TASK 7.4: CONTROL FLOW =====");

// 1. Check whether a number is positive, negative, or zero
function checkNumber(number) {
    if (number > 0) {
        return "Positive";
    } else if (number < 0) {
        return "Negative";
    } else {
        return "Zero";
    }
}

console.log(checkNumber(10));
console.log(checkNumber(-5));
console.log(checkNumber(0));

// 2. Grade using if/else
function getGrade(score) {
    if (score >= 70) {
        return "A";
    } else if (score >= 60) {
        return "B";
    } else if (score >= 50) {
        return "C";
    } else if (score >= 45) {
        return "D";
    } else {
        return "F";
    }
}

console.log(getGrade(75));
console.log(getGrade(62));
console.log(getGrade(40));

// 3. switch statement
// 3. switch statement: day numbers 0–6
function getDayName(dayNumber) {
    switch (dayNumber) {
        case 0: return "Sunday";
        case 1: return "Monday";
        case 2: return "Tuesday";
        case 3: return "Wednesday";
        case 4: return "Thursday";
        case 5: return "Friday";
        case 6: return "Saturday";
        default: return "Invalid day";
    }
}

console.log(getDayName(0));
console.log(getDayName(6));
console.log(getDayName(7));

// 4. for loop: print numbers from 1 to 10
for (let number = 1; number <= 10; number++) {
    console.log(number);
}

// 5. while loop: count from 1 to 5
let counter = 1;

while (counter <= 5) {
    console.log(`Count: ${counter}`);
    counter++;
}

// 6. FizzBuzz
for (let number = 1; number <= 100; number++) {
    if (number % 15 === 0) {
        console.log("FizzBuzz");
    } else if (number % 3 === 0) {
        console.log("Fizz");
    } else if (number % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(number);
    }
}

// Print numbers from 1 to 100
for (let number = 1; number <= 100; number++) {
    console.log(number);
}

// Print even numbers from 1 to 50
for (let number = 2; number <= 50; number += 2) {
    console.log(number);
}

// Print a triangle of stars
for (let row = 1; row <= 5; row++) {
    console.log("*".repeat(row));
}


console.log("===== TASK 8.1: ARRAYS =====");

// Create an array using your own data
const products = ["Laptop", "Phone", "Keyboard", "Headphones", "Mouse"];

console.log(products);
console.log(`First product: ${products[0]}`);
console.log(`Last product: ${products[products.length - 1]}`);
console.log(`Number of products: ${products.length}`);

// Add and remove items
products.push("USB cable");
console.log(`After adding: ${products}`);

const removedProduct = products.pop();
console.log(`Removed product: ${removedProduct}`);

// map(): transform each item
const productNamesUppercase = products.map(product => product.toUpperCase());
console.log(productNamesUppercase);

// filter(): select matching items
const longProductNames = products.filter(product => product.length > 5);
console.log(longProductNames);

// reduce(): calculate a total
const prices = [1200, 850, 450, 300, 150];
const totalPrice = prices.reduce((total, price) => total + price, 0);
console.log(`Total price: ${totalPrice}`);

// find(): find the first matching item
const firstLongName = products.find(product => product.length > 6);
console.log(`First product with more than 6 letters: ${firstLongName}`);

// includes(): check whether an item exists
console.log(`Does the list contain Phone? ${products.includes("Phone")}`);

// sort(): arrange numbers in ascending order
const scores = [45, 90, 65, 30, 80];
scores.sort((a, b) => a - b);
console.log(`Sorted scores: ${scores}`);

// Add an item at the beginning
products.unshift("Tablet");
console.log("After unshift:", products);

// Remove the first item
const firstRemovedProduct = products.shift();
console.log("Removed first product:", firstRemovedProduct);

// Double each number using map()
const numbers = [2, 4, 6, 8, 10];
const doubledNumbers = numbers.map(number => number * 2);
console.log("Doubled numbers:", doubledNumbers);

// Filter negative numbers
const values = [-5, 3, -2, 8, 10, -1];
const positiveValues = values.filter(number => number >= 0);
console.log("Non-negative numbers:", positiveValues);

// Find the first number greater than 10
const firstAboveTen = [4, 8, 12, 15, 20].find(number => number > 10);
console.log("First number above 10:", firstAboveTen);

// Calculate the product of all numbers
const productOfNumbers = [2, 3, 4, 5].reduce(
    (total, number) => total * number,1);
console.log("Product of numbers:", productOfNumbers);


console.log("===== TASK 8.2: OBJECTS =====");

// Create a student object using your own data
const student = {
    name: "Chukwuma Ndukwu",
    age: 43,
    course: "JavaScript Fundamentals",
    scores: [85, 92, 88],
    isEnrolled: true
};

// Access object properties
console.log(student.name);
console.log(student["course"]);
console.log(student.age);

// Add a new property
student.email = "chukwuma.ndukwu@axiomchuks.com";
console.log(student.email);

// Update a property
student.course = "Web Development";
console.log(student.course);

// Create a method inside an object
const company = {
    name: "AXIOMCHUKS Company Limited",
    country: "Nigeria",

    describe() {
        return `${this.name} operates in ${this.country}.`;
    }
};

console.log(company.describe());

// Calculate the student's average score
const averageScore = student.scores.reduce(
    (total, score) => total + score,
    0
) / student.scores.length;

console.log(`Average score: ${averageScore.toFixed(2)}`);

// Check whether a property exists
console.log("name" in student);
console.log("address" in student);

// Get object keys and values
console.log(Object.keys(student));
console.log(Object.values(student));

console.log("===== TASK 8.3: ARRAYS OF OBJECTS =====");


const students = [
    { name: "Helen", age: 20, grade: 92, major: "Computer Science" },
    { name: "Joe", age: 22, grade: 76, major: "Business" },
    { name: "Michael", age: 21, grade: 85, major: "Computer Science" },
    { name: "Florence", age: 23, grade: 58, major: "Mathematics" },
    { name: "Monica", age: 20, grade: 95, major: "Computer Science" }
];

// 1. Get all student names
console.log("Names:", students.map(student => student.name));

// 2. Students with grades above 80
console.log(
    "Grades above 80:",
    students.filter(student => student.grade > 80)
);

// 3. Find Michael
console.log(
    "Michael:",
    students.find(student => student.name === "Michael")
);

// 4. Calculate average grade
const averageGrade = students.reduce(
    (total, student) => total + student.grade, 0
) / students.length;
console.log("Average grade:", averageGrade.toFixed(2));

// 5. Find Computer Science majors
console.log(
    "Computer Science majors:",
    students.filter(student => student.major === "Computer Science")
);

// 6. Sort students from highest to lowest grade
const sortedStudents = [...students].sort(
    (a, b) => b.grade - a.grade
);
console.log("Sorted by grade:", sortedStudents);

// 7. Does any student have a grade above 90?
console.log(
    "Any grade above 90?",
    students.some(student => student.grade > 90)
);

// 8. Are all students passing (grade >= 60)?
console.log(
    "All students passing?",
    students.every(student => student.grade >= 60)
);


console.log("===== TASK 8.4: JSON =====");

// Create a JavaScript object
const product = {
    name: "Laptop",
    price: 85000,
    inStock: true
};

// Convert the object into a JSON string
const jsonString = JSON.stringify(product);
console.log("JSON string:", jsonString);

// Convert the JSON string back into an object
const parsedProduct = JSON.parse(jsonString);
console.log("Product name:", parsedProduct.name);
console.log("Product price:", parsedProduct.price);
console.log("In stock:", parsedProduct.inStock);

// Create formatted JSON
const formattedJSON = JSON.stringify(product, null, 2);
console.log("Formatted JSON:");
console.log(formattedJSON);


console.log("===== POSTS JSON EXERCISE =====");

const postsJson = `[
    {"title":"Week 4 recap","published":true,"likes":30},
    {"title":"Learning JavaScript","published":false,"likes":50},
    {"title":"Arrays and objects","published":true,"likes":45},
    {"title":"My first project","published":true,"likes":20}
]`;

// Parse JSON text into a JavaScript array
const posts = JSON.parse(postsJson);

// Keep only published posts
const publishedPosts = posts.filter(post => post.published);

// Sort published posts by likes, highest first
publishedPosts.sort((a, b) => b.likes - a.likes);

// Create formatted strings
const postSummaries = publishedPosts.map(
    post => `${post.title} (${post.likes} likes)`
);
console.log("Post summaries:", postSummaries);

// Convert the filtered posts back into JSON text
const publishedPostsJson = JSON.stringify(publishedPosts, null, 2);
console.log("Published posts JSON:");
console.log(publishedPostsJson);


console.log("===== CALCULATOR =====");

function calculate(num1, operator, num2) {
    switch (operator) {
        case "+":
            return num1 + num2;

        case "-":
            return num1 - num2;

        case "*":
            return num1 * num2;

        case "/":
            if (num2 === 0) {
                return "Cannot divide by zero";
            }
            return num1 / num2;

        case "%":
            if (num2 === 0) {
                return "Cannot calculate remainder with zero";
            }
            return num1 % num2;

        case "**":
            return num1 ** num2;

        default:
            return "Invalid operator";
    }
}

// Test each operation
console.log(calculate(10, "+", 5));   // 15
console.log(calculate(10, "-", 5));   // 5
console.log(calculate(10, "*", 5));   // 50
console.log(calculate(10, "/", 5));   // 2
console.log(calculate(10, "/", 0));   // Cannot divide by zero
console.log(calculate(10, "%", 3));   // 1
console.log(calculate(2, "**", 3));   // 8
console.log(calculate(10, "?", 5));   // Invalid operator
