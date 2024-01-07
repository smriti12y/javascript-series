let btn = document.querySelector("#btn");

//  btn.onclick= ()=>{
//      console.log("btn was clicked");
    
//     }

//Event Listenser
  btn.addEventListener("click", ()=>{
    console.log("button was clicked");
    console.log(evt);
    console.log(evt.type);
    

  });


let div = document.querySelector("div");

div.onmouseover=()=>{ 
    console.log("welome my freind welcome!");
}

//Event object

