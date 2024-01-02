 //Artimetic Operators


 let a = 6;
 let b = 2;

  console.log("a=",a, "& b=", b);
  console.log("a + b =", a+b);
  console.log("a - b =", a-b);
 console.log("a * b =", a*b);
  console.log("a / b =", a/b);
console.log("a % b =", a%b);
  console.log("a ** b =", a**b);

 //unary Operator
 let d= 8;
 let c = 2;


 console.log("d=",d, "& c =" ,c);
 d++;
 console.log("d=",d);

 c--;
 console.log("c = ",c);


 //Assignment Operators
  let f =4;
  let g =3;

  f += 4  ;
  console.log("f =",f);
  /* * we can use all ariemetic operators
  in assig opp**/


  //Comparision opt

//   let r = 6;
//   let t = 3;
//    console.log("6==6",r==r);

   //Logicsl opt

//    let r = 6;
//    let t = 3;

//    let cond1 = r < t;
//    let cond2 = r ==6;



//    console.log("cond1 && cond1=", cond1 && cond2);

//conditional Sataement



// let age = 18;

// if(age>=18){
//     console.log("you can vote");
// }

// if (age< 18){
//     console.log("you cannot vote");
// }

//if esle statement

let mode = "light";
let color;

if (mode=="dark"){
    color = "black";
}
else{
    color="white";
}

console.log(color);

//even or odd 
 
// let num = 4;

// if(num % 2 ===0)
// {
//     console.log(num,"even");
// }
// else{
//     console.log(num,"odd");
// }

//else-if statement
let modee = "dark";
let colorr;

if (modee=="dark"){
    colorr = "black";
}
else if (modee==="blue"){
    colorr="blue";
}else {
    colorr="white";
}
console.log(colorr);

//ternary operator special 
let age = 23;

  let result = age<=18 ? "adult": "not adult";

  console.log(result)


