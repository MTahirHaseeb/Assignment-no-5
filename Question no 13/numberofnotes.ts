// Question 13 
// Write a typescript program to count total number of notes in given amount.





var UserInput:string|null = prompt("Enter the Amount");
var amount:number = Number(UserInput);

var note5000:number =  0;

var note1000:number= 0;

var note500:number = 0;

var note100:number = 0;

var note50:number = 0;

var note20:number = 0;

var note10:number = 0;

var note5:number = 0;

var note2:number = 0;

var note1:number = 0;
console.log("Total number of notes in amount");
if (amount>=5000){
    note5000 = amount/5000;
    amount -= (note5000 * 5000);
    console.log(`5000 = ${note5000}`);
}
else if (amount>=1000){
    note1000 = amount/1000;
    amount -= (note1000 * 1000);
    console.log(`1000 = ${note1000}`);
}
else if (amount>=500){
    note500 = amount/500;
    amount -= (note500 * 500);
    console.log(`500 = ${note500}`);
}
else if (amount>=100){
    note100 = amount/100;
    amount -= (note100 * 100);
    console.log(`100 = ${note100}`);
}
else if (amount>=50){
    note50 = amount/50;
    amount -= (note50 * 50);
    console.log(`50 = ${note50}`);
}
else if (amount>=10){
    note10 = amount/10;
    amount -= (note10 * 10);
    console.log(`10 = ${note10}`);
}
else if (amount>=20){
    note20 = amount/20;
    amount -= (note20 * 20);
    console.log(`20 = ${note20}`);
}
else if (amount>=10){
    note10 = amount/10;
    amount -= (note10 * 10);
    console.log(`10 = ${note10}`);
}
else if (amount>=5){
    note5 = amount/5;
    amount -= (note5 * 5);
    console.log(`5 = ${note5}`);
}
else if (amount>=2){
    note2 = amount/2;
    amount -= (note10 * 2);
    console.log(`10 = ${note10}`);
}