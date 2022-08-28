// Question no 10 
// Write a typescript program to check whether a character is uppercase or lowercase alphabet
var char = prompt("enter a character");
if (char >= 'a' && char <= 'z') {
    console.log("your charactor is lower case character:", char);
}
else if (char >= 'A' && char <= 'Z') {
    console.log("your character is upper case character :", char);
}
else {
    console.log("you did not enter the character :", char);
}
