// Question no 20
//  Write a ts program to input basic salary of an employee and calculate its Gross salary according to following:
// Basic Salary <= 10000 : HRA = 20%, DA = 80%
// Basic Salary <= 20000 : HRA = 25%, DA = 90%
// Basic Salary > 20000 : HRA = 30%, DA = 95%
var UserInput:string|null = prompt("Enter your basic salary")
var salary:number = Number(UserInput)
var Gross_Salary:number;
if (salary <= 10000) {
    
    salary += salary*20/100;
    salary += salary*80/100;
    Gross_Salary = salary;

    console.log("Your Gross Salary is ",Gross_Salary);
    
} else if (salary > 10000 && salary <= 20000  ){
    salary += salary*25/100;
    salary += salary*90/100;
    Gross_Salary = salary;
    console.log("Your Gross Salary is ",Gross_Salary);
}
else if (salary > 20000){
    salary += salary*30/100;
    salary += salary*95/100;
    Gross_Salary = salary;
    console.log("Your Gross Salary is ",Gross_Salary);
}
else {
    console.log("Your Input is not correct ");
}

