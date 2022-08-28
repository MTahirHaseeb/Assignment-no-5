// Question no 9
// Write a typescript program to input any character and check whether it is alphabet,digit,special Character.



var char:any =prompt("enter any character");

if (((char >='a') && (char <='z')) || ( (char>='A' ) && (char<='Z'))){
    console.log("you enter a character:",char)
}
else if ((char>='0' ) && (char<='9')){
    console.log("you enter a number :",char);
}
else
{
    console.log("you enter a special character",char)
}