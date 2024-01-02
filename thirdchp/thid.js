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


