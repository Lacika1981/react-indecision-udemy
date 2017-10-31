var nameVar = 'Andrew';
var nameVar = 'Mike';
console.log('nameVar', nameVar)

let nameLet = 'Jane';
nameLet = 'Julie'; /* valid ES6 - you can update let variable */
//let nameLet = 'Julie' /* not valid ES6 - you can not redefine let variable */
console.log('nameLet', nameLet);

const nameConst = 'Frank';
//nameConst = 'John' /* not valid ES6 - you can not update const variable */
//const nameConst = 'Freddie' /* not valid ES6 - you can not redefine const variable */
console.log('nameConst', nameConst);

// Block scoping

var fullName = 'Jen Mead';
let firstName; /* this variable can be updated from in/out of the function */

if (fullName) {
    //var firstName = fullName.split(' ')[0]; /* firstName variable can be accessed from out of the function */
    const firstName = fullName.split(' ')[0]; /* let/const firstName variable can NOT be accessed from out of the function - block level scoping */
    console.log(firstName);
}

console.log(firstName);