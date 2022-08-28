// Question no 14
// Write a typescript program to input angles of a triangle and check whether triangle is valid or not

var angle1:any=prompt("Enter the value of angle1:");
var angle2:any=prompt("Enter the value of angle2 :");
var angle3:any=prompt("Enter the value of angle3 :");

if (angle1+angle2>angle3)
{
    console.log("Triangle is valid");
}else if(angle2+angle3>angle1)
{
    console.log("Triangle is valid"); 
}
else if(angle1+angle3>angle2)
{
    console.log("Triangle is valid"); 
}
else{
    console.log("Triangle is not valid");
}