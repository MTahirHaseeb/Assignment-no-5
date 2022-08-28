// Question no 18
// Write a typescript program to calculate profit or loss.



var cost:any=prompt("Enter the value of cost :")
var selling:any=prompt("Enter the value of selling :")
var amount:number=0;


if (selling>cost){
    amount=selling-cost;
    console.log("Profit is :",amount);
}
else if (cost>selling)
{
    amount=cost-selling;
    console.log("Loss is :",amount);
}
else{
    console.log(" No profit No loss")
}