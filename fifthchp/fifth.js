function  myFunction()  {
    console.log("Hello js");
    console.log("learnig jas");
} 

myFunction();
myFunction();
myFunction();

//Arrow function

//modern js 
const arrowsum = (a,b)=> {
    console.log(a+b)
};


// multiplication function
const arrowMul = (c,d)=>{
    console.log(c * d)
};
 

//practice of forEach loop
/**qs for a given arr of numbers , print the sq of each value using the forEach loop */


let nums = [3,4,,6,9,7,2];

nums.forEach((num) =>{
    console.log(num**2);
})


//map arr

let num = [456,7,8,9];

num.map((val)=>{
  console.log(val);
})

//filter method 

let arr = [2,3,5,4,6,9,66,24,45,71,11];

let oddArr = arr.filter((val)=>{
    return val % 2 !=0;
});

  console.log(oddArr);