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


  