// Question no 19
// Write a typescript program to input marks of five subjects Physics,Chemistry,Biology,Mathematic and Computer.
// Calculate the Percentage and grade according to following:
// Percentage>=90%:Grade A
// Percentage>=80%:Grade B
// Percentage>=70%:Grade C
// Percentage>=60%:Grade D
// Percentage>=40%:Grade E
// Percentage<40%:Grade F
var physics = prompt("Enter your marks in Physics :");
var chemistry = prompt("Enter your marks in Chemimstry :");
var biology = prompt("Enter your marks in Biology :");
var mathematic = prompt("Enter your marks in Mathematic :");
var computer = prompt("Enter your marks in Computer :");
var total = (physics + chemistry + biology + mathematic + computer);
var percentage = (total / 500) * 100;
console.log("Percentage is :", percentage);
if (percentage >= 90) {
    console.log("Grade A");
}
else if (percentage >= 80) {
    console.log("Grade B");
}
else if (percentage >= 70) {
    console.log("Grade C");
}
else if (percentage >= 60) {
    console.log("Grade D");
}
else if (percentage >= 40) {
    console.log("Grade E");
}
else {
    console.log("Grade F");
}
