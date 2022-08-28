// Question 13 
// Write a typescript program to count total number of notes in given amount.
var note500 = 0;
var note100 = 0;
var note50 = 0;
var note20 = 0;
var note10 = 0;
var note5 = 0;
var note2 = 0;
var note1 = 0;
var num1 = prompt("Enter your amount :");
var num2 = parseInt(num1);
if (num2 >= 500) {
    note500 = num2 / 500;
    num2 = num2 - note500 * 500;
    console.log("Number of 500 notes is :", num2);
}
if (num2 >= 100) {
    note100 = num2 / 100;
    num2 = num2 - note100 * 100;
    console.log("Number of 100 notes is :", num2);
}
if (num2 >= 50) {
    note50 = num2 / 50;
    num2 = num2 - note50 * 50;
    console.log("NUmber of 50 notes is :", num2);
}
if (num2 >= 20) {
    note20 = num2 / 20;
    num2 = num2 - note20 * 20;
    console.log("Number of 20 notes is :", num2);
}
if (num2 >= 10) {
    note10 = num2 / 10;
    num2 = num2 - note10 * 10;
    console.log("Number of 10 notes is :", num2);
}
if (num2 >= 5) {
    note5 = num2 / 5;
    num2 = num2 - note5 / 5;
    console.log("Number of 5 notes is :", num2);
}
if (num2 >= 2) {
    note2 = num2 / 2;
    num2 = num2 - note2 * 2;
    console.log("Number of 2 notes is :", num2);
}
if (num2 > 1) {
    note1 = num2 / 1;
    num2 = num2 - note1 * 1;
    console.log("Number of 1 notes is :", num2);
}
