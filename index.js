//Operators// 

/*
 ==  is equal to
===   equal value - if the value are the same
!= not equal to 
!== / not equal value - if the value are not same
> / greater than - one value is bigger then the other
< / less than - one value is smaller than the other
>= / greater than or equal to
<= / less than or equal
 */

//assignment operators//
/*
= / assigning a value to it
+= / adding and assigning
-= / subtraction and assign
*= / multiply and assign
/= / division and assign
%= / returns a reminder
*/

//arithmetic operators//
/*
+ / addition
- / subraction
* / multiplication
*/ 
let num1 = 10;
let num2 = 45;
let num3 = 60;
console.log(num1 + num2 + num3);

let num4 = 600;
let num5 = 20;
console.log(num4 - num5);

let num6 = 20;
let num7 = 5;
console.log(num6 * num7 + 10);

let num8 = 10;
let num9 = 3;
console.log(10 ** 3);

let num10 = 8;
let num11 = 2;
console.log(num10 % num11);

let num12 = 10;
console.log(++num12);

let num13 = 20;
console.log(--num13);

//object//
let student = [
   stud1 = {
    name : "Fati Mohammed",
    age : 25,
    indexNum : "P01245",
    phoneNum : "0266364252",
    address : {
        city : "Accra",
        Area : "Kasoa",
    },
    DOB : "21/65/1999"
 },

    stud2 = {
    name : "Wendy Broze",
    age : 27,
    indexNum : "P01245",
    phoneNum : "0266364562",
    address : {
        city : "Accra",
        Area : "Darkuman",
    },
    DOB : "21/65/1995"
 },

     stud3 = {
    name : "Sandra Queye",
    age : 28,
    indexNum : "P01258",
    phoneNum : "0266389252",
    address : {
        city : "Accra",
        Area : "Bukum",
    },
    DOB : "21/65/1997"
 },

     stud4 = {
    name : "Yakubu Adams",
    age : 35,
    indexNum : "P01245",
    phoneNum : "0266364252",
    address : {
        city : "Accra",
        Area : "Tema",
    },
    DOB : "21/65/1987"
 },

 
    stud5 = {
    name : "Ansah Sammy",
    age : 29,
    indexNum : "P01245",
    phoneNum : "0266364252",
    address : {
        city : "Accra",
        Area : "Hasto",
    },
    DOB : "21/65/1995"
 }
]
console.log(student);
console.log(student[2].name = "John Cena");

//Object//
let cat = {
    name: "Snow",
    age: 3,
    color: "white"
}
console.log(cat);

//if statement//
let b = "banana";
let o = 'orange';
if(b == 0){
    console.log("Yes I got Banana");

} else{ 
    console.log("Hmmm I got Oranges")
}

let DBemail = "jerry@gmail.com";
let DBpassword = "test@africa";

let loginEmail = "jeff@gmail.com";
let loginPassword = "testing123";

if(DBemail == loginEmail && DBpassword == loginPassword){
    console.log("Welcome loginemail");

} else{
    console.log("Invalid credentials");
}

let balance = 1000;
let withdraw = 500;
 
if(balance > withdraw){
    console.log(`withdraw has be deducted from your account your new balance is ${balance - withdraw}`);
} else{
    console.log("You dont have enough balance");
}








