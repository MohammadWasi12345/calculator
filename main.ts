var prompt = require('prompt-sync')();
//
// get input from the user.
//
let n1 = parseInt(prompt('enter your first number: '));
let n2 = parseInt(prompt('enter your second number :'));
let operator = prompt('enter your operator("+","-","*","/"):  ');

if(operator=="+"){
    console.log(`your answer is ${n1}${operator} ${n2}=${n1+n2}`);
} else if(operator=="-"){
    console.log(`your answer is ${n1}${operator} ${n2}=${n1-n2}`);
}else if(operator=="*"){
    console.log(`your answer is ${n1}${operator} ${n2}=${n1*n2}`);
}else if(operator=="/"){
    console.log(`your answer is ${n1}${operator} ${n2}=${n1/n2}`);
}else {
    console.log('your operator is not valid');
}





export{};