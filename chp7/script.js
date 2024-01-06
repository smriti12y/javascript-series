//Attributes 

// let div = document.querySelector("div");

// console.log(div);

// let id=div.getAttribute("id");
// console.log(id);


//for inserting elements in js 

 

 
  let newBtn = document.createElement("button");
 newBtn.textContent = "Click me";
  console.log(newBtn);

 let div= document.querySelector("div");
  div.after(newBtn);