const student={
     fullName:"smriti pandey",
     marks:94.4,
     printMarks: function(){
         console.log("marks=",this. marks);
     },
    }
    ;
 
const employee={
    calcTax(){
        console.log("tax rate is 10%");

    },
};

const SmritiSimmi={
    salary:500000,
};
const SmritiSimmi2={
    salary:500000,
};
const SmritiSimmi3={
    salary:500000,
};
const SmritiSimmi4={
    salary:500000,
};
const SmritiSimmi5={
    salary:500000,
};
const SmritiSimmi6={
    salary:500000,
};

SmritiSimmi.__proto__= employee;
SmritiSimmi2.__proto__= employee;
SmritiSimmi3.__proto__= employee;
SmritiSimmi4.__proto__= employee;
SmritiSimmi5.__proto__= employee;
SmritiSimmi6.__proto__= employee;

//classes 

class ToyotaCar{
    constructor(brand){
        console.log("creating new object");
        this.brand=brand;
    }
    start(){
        console.log("start");
    }
    start(){
        console.log("start");
    }
    
}

let fortuner= new ToyotaCar();
let lexus= new ToyotaCar();

