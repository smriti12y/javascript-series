//Loops 

//for loop

for (let i = 1; i <=5; i++){
    console.log("i=",i);
}
console.log("loop has ended");


//Infinte loops ; a lop never ends this is not inwork


//while loop 

let j = 1;
while(j<=5){
    console.log("j=",j)
    j++;
}
//do-while loop
let r=2;
do{
    console.log("r=",r);
    r++;

} while(r <=5);

//for-of loop 

let str = "Apna College";

for (let t of str){
    console.log("t=",t);
}

//for in loop


let student={
   name: "smriti Pandey",
   age: 20,
   cgpa: 7.8,
   isPass: true

};

for(let k in student){
    console.log(k);
}


//practice question of loops

/****print all even number from 0 to 100 */

for (let num= 0; num <=100; num++){
    if(num%2 === 0)
    console.log("num=",num);
}

//questn 2
 
let gameNum= 35;
let userNum = prompt("Guess the game number :");

while (gameNum!=userNum){
    userNum= prompt("You entered wrong number, Guess again:");
}
console.log("congratilation , you entered the right number");