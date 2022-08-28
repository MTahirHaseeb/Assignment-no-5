// Question no 8
// Write a typescript program to input any alphabet and check whether it is vowel or consonant


var char:string | null =prompt("enter any alphabet:");
if (char=='A' || char=='a' ||char=='E' || char=='e' || char=='I' ||char=='i' || char=='O' || char=='o' ||char=='U' || char=='u')
{
    console.log(" you enter a vowel",char);
}
else{
    console.log("you enter a consonant",char);
}