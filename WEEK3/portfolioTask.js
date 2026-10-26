// 1. Student details
const fullName = "Prem Kumar Das";
const studentID = "3128255";
const labGroup = 19;

console.log("Full Name: " + fullName);
console.log("Student ID: " + studentID);
console.log("Lab Group Number: " + labGroup);

// 2. Display current date and time
const currentDateTime = new Date();
console.log("Current Date and Time: " + currentDateTime);

// 3. Arrow function to display favourite programming language
const favouriteLanguage = () => {
    return "JavaScript";
};

console.log("Favourite Programming Language: " + favouriteLanguage());

// 4. Add the last four digits of the Student ID
const lastFourDigits = studentID.slice(-4);

const digitsSum = lastFourDigits
    .split("")
    .reduce((sum, digit) => sum + Number(digit), 0);

console.log("Last four digits: " + lastFourDigits);
console.log("Sum of last four digits: " + digitsSum);