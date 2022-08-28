// Question no 19
// Write a typescript program to input marks of five subjects Physics,Chemistry,Biology,Mathematic and Computer.
// Calculate the Percentage and grade according to following:
// Percentage>=90%:Grade A
// Percentage>=80%:Grade B
// Percentage>=70%:Grade C
// Percentage>=60%:Grade D
// Percentage>=40%:Grade E
// Percentage<40%:Grade F




var UserInput:string|null = prompt("Enter Your Physics Marks")
var phymarks:number = Number(UserInput)

var UserInput:string|null = prompt("Enter Your Chemistry Marks")
var chmarks:number = Number(UserInput)

var UserInput:string|null = prompt("Enter Your Biology Marks")
var biomarks:number = Number(UserInput)

var UserInput:string|null = prompt("Enter Your Mathematics Marks")
var mathmarks:number = Number(UserInput)

var UserInput:string|null = prompt("Enter Your Computer Marks")
var compmarks:number = Number(UserInput)

var total:number;
var percentage:number 

total = phymarks + chmarks + biomarks + mathmarks + compmarks;
console.log("Total marks is",total);
percentage = (total/500)*100;
console.log("The Percentage of marks is",percentage)

if (percentage >= 90){

    console.log("Congratulation Your Grade is A")
}
else if(percentage >= 80){

    console.log("Congratulation Your Grade is B")
}
else if(percentage >= 70){
    
    console.log("Congratulation Your Grade is C")
}
else if(percentage >= 60){
    
    console.log("Congratulation Your Grade is D")
}
else if(percentage < 40){
    
    console.log(" Your Grade is F")
}
else{

    console.log("Your Input is not correct");

}

