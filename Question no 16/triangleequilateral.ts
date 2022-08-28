// Question no 16
// Write a typescript program to check whether the triangle is equilateral , isosceles and scalene triangle.


var side1:any=prompt("Enter the first side of triangle");
var side2:any=prompt("Enter the second side of triangle");
var side3:any=prompt("Enter the third side of triangle");

if(side1==side2 && side2==side3){
    console.log("Triangle is equilateral .");
}
else if(side1==side2 || side2==side3 || side3==side1){
    console.log("Triangle is isosceles .");
} 
else{
    console.log("Triangle is scalene")
}