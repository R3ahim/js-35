/* 
Data types
primitive data types
1. number
2. string
3. boolean
4. undefined
5. null
7. symbol
non-primitive
6. object
*/


let a = 'hello';
let b = a;
// console.log(a,b);
a = 'gello';
// console.log(a,b);


const x = {job:'webde developer'};
const y =x;
console.log(x,y);

// x.job = 'front end developr';
x.job = 'front end developr';
console.log(x,y);
