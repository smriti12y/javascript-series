// let  marks =[78,87,64,45,33];
// console.log(marks);
// console.log(marks.length);


//looping over an array 

// let heroes= ["saktiman","batman",
// "hulk","thor","dr.strange"];

// for (let i=0; i< heroes.length; i++){
//     console.log(heroes[i]);
// }

//loop over an array

// let cities=["patna","kolkata","delhi","pune"]

// for (let city of cities){
//     console.log(city.toUpperCase());
// }

// //practice question
// /****for a given array with marks of student ->[85,98,67,34,45,23] */

// let marks = [85,98,67,34,45,23];

// let sum =0;

// for(let val of marks){
//         sum += val;

// }

// // let avg = sum /marks.length;
// console.log(`avg markd of the class=${avg}`)

//q2 
/****for a given arr with prices of 5 items ->[250,645,300,900,50] all item have an offer of 10% off on them .change the arry to store finalprice after apllying offer. */

// let items = [250,645,300,900,50];

// let i = 0;
// for (let val of items ){
//     console.log(`value at index ${i}=${val}`);
//     let offer=val/10;
//     items[i]= items[i]- offer;
//     console.log(`value after offer =${items[i]}`);
//     i++;
// }


//array methods
//one of the example here
//push()

// let fooditems= ["potato","peas","tomato","apple","mango"];
 

// fooditems.push("chips","burger","paneer");

// console.log(fooditems);

//concat() methods

// let marvel_heroes = ["thor","spider","ironman",];
// let dc_heroes =["superman","batman"];

//   let heroes = marvel_heroes.concat(dc_heroes);

//   console.log(heroes);

//   //slice () method

//   let flowers = ["rose","sunflower","lilly","mariegold"];

//   console.log(flowers);

//   console.log(flowers.slice(2,4));

//   //splice ()

//   let arr = [1,2,3,4,5,6,7];

//   arr.splice(2,2,104,304);
// to add Element
// arr.splice(3,0,222);

//practice
/****create an array to store companies->"Bloomberg", "Microsoft","Uber","Google","IBM","Netflix" 
 * a. remove the first company from the arr
 * b.remove uber and add ola
 * .c add amazon at the end
*/

// let companies=["Microsoft","Uber","Google","IBM","Netflix" ];

// // companies.shift();
// // companies.splice(0,1,Uber);

// companies.push("Amazon");

