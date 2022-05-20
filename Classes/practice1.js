            //Practice
let myArray = ["What is the meaning of life", 42, true];

console.log(myArray);

            //Exercise

    //Declaration
const numbers = [10, 20, 30, 40, 50];
const months = ["Jan", "Feb", "Mar", "Apr", "May"];

    //Methods
numbers.push(60, 70, 80);
numbers.unshift(-30, -20, -10, 0);

months.pop();
months.shift();
months.splice(1, 1);

    //Display
console.table(numbers);
console.table(months);
console.log(numbers[0]);
console.log(numbers[1]);
console.log(numbers[2]);

    //Dimension
console.log(numbers.length);