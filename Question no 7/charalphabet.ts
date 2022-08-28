// Question no 7
// Write a typescript program to check whether character is alphabet or not


var Input:string|null = prompt("Enter a character")
var char:string = String(Input)
if(char>='a' && char<='Z' || char>='A' && char<='Z' )
{
    console.log("The character is alphabet")
}
else{

    console.log("The character is not alphabet")
}