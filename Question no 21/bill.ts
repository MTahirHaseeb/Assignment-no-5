// Question no 21
//  Write a ts program to input electricity unit charges and calculate total electricity bill according to the given condition:
// For first 50 units Rs. 0.50/unit
// For next 100 units Rs. 0.75/unit
// For next 100 units Rs. 1.20/unit
// For unit above 250 Rs. 1.50/unit
// An additional surcharge of 20% is added to the bill


var UserInput:string|null = prompt("Please Enter Your Electricity Unit")
var unit:number = Number(UserInput)
if(unit<=50){
    unit = unit*0.50;
    unit += unit*20/100;
    console.log("The total Electricity bill is",unit)

}
else if(unit>50&&unit<=150){
    unit = unit*0.75;
    unit += unit*20/100;
    console.log("The total Electricity bill is",unit)

}
else if(unit>150&&unit<=250){
    unit = unit* 1.20;
    unit += unit*20/100;
    console.log("The total Electricity bill is",unit)

}
else{
    unit = unit* 1.50;
    unit += unit*20/100;
    console.log("The total Electricity bill is",unit)
}
