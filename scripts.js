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

console.log("Printing even numbers:");
for( i = 2; i <= 100000; i = i + 2){
    console.log(i);
}


/* Day 21

Activity 2
Write a for loop that prints all the odd numbers from 3 to 100000.


*/
console.log("Printing odd numbers:");
for( i = 3; i <= 100000; i = i + 2){
    console.log(i);
}

/* Day 21

Activity 3
Write a for loop that prints all the odd numbers from 3 to 100000.
Hint: use an if statement to decide if a number is odd or not odd



*/


for(i = 3; i<=100000; i++){
    if(i % 2 == 1){
        console.log(i);
    }
}




/* How do you determine if a number is odd using an if statement
console.log( 4 % 2 );
*/

