//question 4 answer       
const myArrays =[20, 30, 40]; ///// redundant
const objectVariable = {
    property1: 'i am property 1',
    property2: 'i am property 2',
    property3: myArrays   ////// redundant  - property3 : [20, 30, 40]
    
}; console.log(objectVariable.property3[2]);   
console.log(objectVariable.property2);

//question 5 answer
const  anotherArray = [20,30,40];
console.log(anotherArray[2]);
