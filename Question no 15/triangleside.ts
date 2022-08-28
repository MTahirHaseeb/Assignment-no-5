// Question no 15
// Write a typescript program to input all sides of a triangles and check whether triangle is valid or Not.


var side1: any = prompt("Enter first side of triangle");
var side2: any = prompt("Enter second side of triangle");
var side3: any = prompt("Enter third side of triangle");

if (side1 + side2 > side3) {
    console.log("Triangle is valid");
}
else if (side2 + side3 > side1) {
    console.log("Triangle is valid");
}
else if (side1 + side3 > side2) {
    console.log("Triangle is valid");
}
else {
    console.log("Triangle is not valid");
}