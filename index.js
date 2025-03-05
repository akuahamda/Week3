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

//assignment operators//

let num = 5 == "5";
console.log(num);
console.log("the answer is true because 5 is equal to 5");

let numValue = 5 === "5";
console.log(numValue);
console.log("so the answer is false because the value are not the same one is a number and one is a string");

let num14 = 10 != "10";
console.log(num14);
console.log("one is a number and one is a string so the anser is false");

let num15 = 7 > 5;
console.log(num15);
console.log("7 is bigger than 5 so the answer true");

let num16 = 4 < 8;
console.log(num16);
console.log("4 is smaller that makes the answer true");

let num17 = 6 >= 6;
console.log(num17);
console.log("is true because the value are the same one is not bigger than the other");

let num18 = 9 <= 10;
console.log(num18);
console.log("is true because 9 is smaller than 10");

let num19 = "5" > 3;
console.log(num19);
console.log("is true because with the string 5 javascript sees it to be a number and 5 is bigger 3 so the answer is true");


let num20 = null == undefined;
console.log(num20);
console.log("the answer is true because both null and undefined act the same");

let num21 = true == 1;
console.log(num21);

let num22 = false == 0;
console.log(num22);

let num23 = "10" == 10;
console.log(num23);
console.log("the answer is true cuz is not checking data types");

let num24 = "10" === 10;
console.log(num24);
console.log("the answer false cuz is checking data type");

let num25 = 15 > 10;
console.log(num25);
console.log("15 is bigger than 10");

let num26 = 10 > 10;
console.log(num26);
console.log("the answer is false cuz 10 is not less than 10");

let num27 = 10 == 10;
console.log(num27);
console.log("true because 10 is the same as 10");


let num28 = 5 < 9;
console.log(num28);
console.log("true because 5 is smaller than 9");

let num29 = 10 < 10;
console.log(num29);
console.log("false because 10 is not lesser than 10");

let num30 = 20 >= 15;
console.log(num30);
console.log("20 is bigger than 15 and is not equal");

let num31 = 20 >= 20;
console.log(num31);
console.log("20 is not greater than 20");


let num32 = 30 <= 40;
console.log(num32);
console.log("true cuz 30 is smaller");


let num33 = 40 <= 40;
console.log(num33);
console.log("true cuz 40 is not lesser than 40");

let num34 = 50 <= 40;
console.log(num34);
console.log("false cuz 50 is not lesser than 40");


let num35 = 5 !== "5";
console.log(num35);
console.log("true cuz one is a string and the other is a number");

let num36 = 10 !== 10;
console.log(num36);

let num37 = 5 != "5";
console.log(num37);
console.log("they are not equal");


let num38 = 10 != 10;
console.log(num38);
console.log("they are not equal");


let num39 = "apple" > "banana";
console.log(num39);

let num40 = "hello" < "world";
console.log(num40);

let num41 = "zebra" > "apple";
console.log(num41);

let num42 = 10 > 5 && 5 < 2;
console.log(num42);

let num43 = 10 > 5 || 5 < 2;
console.log(num43);











