let  fruitsName=["mango","pears"];
console.log(fruitsName);


let marks =[78,65,34,23,34];
console.log(marks);


let studentsArray = [
    { name: 'John', age: 20, marks: 85 },
    { name: 'Alice', age: 22, marks: 92 },
    { name: 'Bob', age: 21, marks: 78 },
    { name: 'Eve', age: 23, marks: 95 },
   
  ];
  

  studentsArray.forEach((student, index) => {
    console.log(`Student ${index + 1}:`);
    console.log(`Name: ${student.name}`);
    console.log(`Age: ${student.age}`);
    console.log(`Marks: ${student.marks}`);
    
  });

  function multiplyNumbers(a, b) {
    let sum = a * b;
    return sum;  // The result of the addition operation is returned
  }
  
  let result = multiplyNumbers(5, 7);
  console.log(result);