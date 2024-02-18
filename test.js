//challenge 1
// question 1 answer
        const myBoolean = true;
        
        //question 2 answer
        const myString = 'hello world';

        //question 3 answer
        const fistNumber = 20;

        //question 4 answer
        let secondNumber = 40;

        //question 5 answer
         secondNumber = 80;

        //question 6 answer
        const myArray = {myBoolean, myString}; // should have used []

        //question 7 answer
        const sum =fistNumber + secondNumber;
        const myObject = {firstProperty: myArray, sumProperty: sum};
        
        //question 8 answer
        console.log(myObject);
        
        //question 9 answer
        console.log(myObject[sumProperty]); //console.log(myObject.sumProperty);

        //question 10 answer
        console.log(firstProperty[myArray[1]]); // should have been myObject.firstProperty[1]

        //challenge 2

        //there are 3 things wrong with this code.
        //Find them and explain why they are wrong.

        //  const some Number = 20;
        //  someNumber = 50

        // #1 wrong: variable someNumber in first line is typed wrong because it has a space in the middle which leads to some the only one recognized as a variable
        // #2 wrong: 2nd line doesn't have a ; at the end 
        // #3 first line used const which is not a changeable variable and instead should have used var or let(?)

        //Challenge 3
        //result variable's result would be 2040

        //Challenge 4
        
        

