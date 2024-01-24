/* LESSON 3 - Programming Tasks */
/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add (number1, number2){
    return number1 + number2;
}

function addNumbers(){
    let add1 = Number(document.querySelector('#add1').value);
    let add2 = Number(document.querySelector('#add2').value);

    document.querySelector('#sum').value = add(add1,add2);

}

document.querySelector('#addNumbers').addEventListener('click', addNumbers);

/* Function Expression - Subtract Numbers */
const subratact = function (number1, number2){
    return number1 - number2;
}

const subtractNumbers = function(){
    let sub1 = Number(document.querySelector('#subtract1').value);
    let sub2 = Number(document.querySelector('#subtract2').value);

    document.querySelector('#difference').value = subratact(sub1,sub2);
}

document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);



/* Arrow Function - Multiply Numbers */

const multiply = (number1, number2) => number1 * number2;

const multiplyNumbers = () =>{
    let factor1 = Number(document.querySelector("#factor1").value);
    let factor2 = Number(document.querySelector("#factor2").value);

    document.querySelector("#product").value = multiply(factor1, factor2);
}

document.querySelector("#multiplyNumbers").addEventListener('click', multiplyNumbers)




/* Open Function Use - Divide Numbers */
const division = (number1, number2) => number1/number2;

function divideNumbers(){
    let dividend = document.querySelector("#dividend").value;
    let divisor = document.querySelector("#divisor").value;

    document.querySelector("#quotient").value = division(dividend, divisor);
}

document.querySelector("#divideNumbers").addEventListener("click", divideNumbers);


/* Decision Structure */


/* ARRAY METHODS - Functional Programming */
/* Output Source Array */

/* Output Odds Only Array */

/* Output Evens Only Array */

/* Output Sum of Org. Array */

/* Output Multiplied by 2 Array */

/* Output Sum of Multiplied by 2 Array */
