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

let cities=["patna","kolkata","delhi","pune"]

for (let city of cities){
    console.log(city.toUpperCase());
}

//practice question
/****for a given array with marks of student ->[85,98,67,34,45,23] */

let marks = [85,98,67,34,45,23];

let sum =0;

for(let val of marks){
        sum += val;

}

let avg = sum /marks.length;
console.log(`avg markd of the class=${avg}`)

//q2 
/****for a given arr with prices of 5 items ->[250,645,300,900,50] all item have an offer of 10% off on them .change the arry to store finalprice after apllying offer. */

let items = [250,645,300,900,50];

let i = 0;
for (let val of items ){
    console.log(`value at index ${i}=${val}`);
    let offer=val/10;
    items[i]= items[i]- offer;
    console.log(`value after offer =${items[i]}`);
    i++;
}