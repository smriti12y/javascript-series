let btn = document.querySelector("#btn");

//  btn.onclick= ()=>{
//      console.log("btn was clicked");
    
//     }

//Event Listenser
  btn.addEventListener("click", ()=>{
    console.log("button was clicked -handler1");
  });
  btn.addEventListener("click", ()=>{
    console.log("button was clicked -handler2");
  });

  // for removing an event 

  let handler3=()=>{ console.log("button was clicked -handler3");
};

  btn.addEventListener("click",handler3);
  
  btn.addEventListener("click", ()=>{
    console.log("button was clicked -handler4");
 });
9
btn.removeEventListener("click",handler3);


let div = document.querySelector("div");

div.onmouseover=()=>{ 
    console.log("welome my freind welcome!");
}

//Event object

