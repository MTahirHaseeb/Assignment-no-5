// Question no 12
// Write a typescript program to input month number and print number of days in that month

var num1: any = prompt("Enter your month :");
var num2: number = parseInt(num1)
switch (num2) {
    case 1:
        console.log("days in January is equal to 31 ");
        break;
    case 2:
        console.log("days in February is equal to 28,29");
        break;
    case 3:
        console.log("days in March is equal to 31");
        break;
    case 4:
        console.log("days in April is equal to 30");
        break;
    case 5:
        console.log("days in May is equal to 31");
        break;
    case 6:
        console.log("days in June is equal to 30");
        break;
    case 7:
        console.log("days in July is equal to 31");
        break;
    case 8:
        console.log("days in August is equal to 31 ");
        break;
    case 9:
        console.log("days in September is equal to 30 ");
        break;
    case 10:
        console.log("days in October is equal to 31 ");
        break;
    case 11:
        console.log("days in November is equal to 30");
        break;
    case 12:
        console.log("days in december is equal to 31");
    default:
        console.log("Please enter a valid input");

}