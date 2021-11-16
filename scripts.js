console.log("Hello external JavaScript file ");

let dayInNumber = 5;

switch(dayInNumber){
    case 1:
        /* The code that should execute if
        dayInNumber matches 1.
        */
       console.log("Sunday");
       break;
    case 2:
        /* The code that should execute if
        dayInNumber matches 2.
        */
        console.log("Monday");
        break;
    case 3:
        /* The code that should execute if
        dayInNumber matches 3.
        */
        console.log("Tuesday");
        break;
    case 4:
        /* The code that should execute if
        dayInNumber matches 4.
        */
        console.log("Wednesday");
        break;
    case 5:
        /* The code that should execute if
        dayInNumber matches 5.
        */
        console.log("Thursday");
        break;
    case 6:
        /* The code that should execute if
        dayInNumber matches 6.
        */
        console.log("Friday");
        break;
    case 7:
        /* The code that should execute if
        dayInNumber matches 7.
        */
        console.log("Saturday");
        break;
    default:
        console.log("You provided a wrong number");
}

/* Below we add an example of while loops */
console.log("while loops examples");

/* a loop that prints even number from 2 to 100000
let count = 2;
while(count <= 100000){
    console.log(count);
    count = count + 2;
}
*/

/* a loop that prints odd number from 3 to 100000
count = 3;
while(count <= 100000){
    console.log(count);
    count = count + 2;
}

==
*/

count = 6;
let factorial = 1;
while(count > 0){
    //console.log(count);
    factorial = factorial * count;
    count = count - 1;
}

console.log(factorial);

console.log("for loops examples");
let i;
for(i = 1; i <= 4; i++){
    console.log(i);
}
console.log("Done");

/* Day 21

Activity 1
Write a for loop that prints all the even number from 2 to 100000.

What will be the starting point of this loop: 2
And we have to stop at 100000

*/
/*
console.log("Printing even numbers:");
for( i = 2; i <= 100000; i = i + 2){
    console.log(i);
}

*/
/* Day 21

Activity 2
Write a for loop that prints all the odd numbers from 3 to 100000.


*/
/*console.log("Printing odd numbers:");
for( i = 3; i <= 100000; i = i + 2){
    console.log(i);
}*/

/* Day 21

Activity 3
Write a for loop that prints all the odd numbers from 3 to 100000.
Hint: use an if statement to decide if a number is odd or not odd



*/


/*for(i = 3; i<=100000; i++){
    if(i % 2 == 1){
        console.log(i);
    }
}
*/



/* How do you determine if a number is odd using an if statement
console.log( 4 % 2 );
*/

console.log("do-while loop example");

i = 1;
do{
    console.log(i);
    i++; // i = i + 1;

    //if(i === 2) break;

}while(i <= 4);
console.log("Done!");

/* From the example above, you can see that the body of a do-while is executed at least once
regardless if the condition.
*/


/* Below you notice that the variable question is declared(created) outside of any function. This
makes this variable to be a global variable. Global variables are declared outside of any
function. Global varaibles can be accessed and used in any functiion with your JS code.
Use global variables less.

*/
var question = "What is today? ";

function getDay(dayInNumber){
    /* The following variable dayName is a local variable because we defined it inside a 
    function. A local variable can only be accessed inside a block or a function where it has
    been defined.
    */
    var dayName = "";
    if (dayInNumber === 1)
        dayName = "Sunday";
    else if (dayInNumber === 2)
        dayName = "Monday";
    else if (dayInNumber === 3)
       dayName = "Tuesday";
    else if (dayInNumber === 4)
        dayName = "Wednesday";
    else if (dayInNumber === 5)
        dayName = "Thursday";
    else if (dayInNumber === 6)
        dayName = "Friday";
    else if (dayInNumber === 7)
            dayName = "Saturday";
    else
        dayName = "You provided a wrong number";

    console.log(question);
    console.log(dayName);

}


getDay(5);



/* Before you only had function scope and global scope. This was being done with let.

If you declare(create) a variable within a function with the keyword var, you have 
a function scope. This means the variable can only be accessed inside the function.

*/

function testLoop(num){

    for(let i = 0; i<= num; i++){
        var y = i;
    }
    console.log(y);

}

testLoop(2);


function testLoop2(num){
    let x;
    for(let i = 0; i<= num; i++){
        /* The following variable has a block scope because it can only be accessed
        within the body of this for loop but not outside
        */
        x = i;
        console.log(x);
    }
    

    /* let has a block scope. when you create a variable with the keyword let, 
    that variable can only be accessed within the block of code, where it has been 
    declared.*/

}

testLoop2(2);


/* Day 22

Activity 1
Write a do-while loop that prints all the even number from 2 to 100.

What will be the starting point of this loop: 2
And we have to stop at 100

i = 2;
do{
    console.log(i)
   i = i + 2;
}while(i <= 100);
console.log("Done!");

Activity 2
Write a do-while loop that prints all the odd number from 3 to 100.

i = 3;
do{
    console.log(i);
    i = i + 2;

}while(i <= 100);
console.log("Done!"


What will be the starting point of this loop: 3
And we have to stop at 100

*/