let num1 = 0
let num2 = 0

function recordval(){
    num1 = parseFloat(document.getElementById("num1-el").value)
    num2 = parseFloat(document.getElementById("num2-el").value)
}




function add(){
    let sum = 0;
    recordval();
    sum = num1 + num2;
    document.getElementById("result-el").textContent = "Sum: " + sum
}

function subtract(){
    let diff = 0;
    recordval();
    diff = num1 - num2;
    document.getElementById("result-el").textContent = "Difference: " + diff
}

function divide(){
    let quotient = 0;
    recordval();
    quotient = num1 / num2;
    document.getElementById("result-el").textContent = "Quotient: " + quotient
}

function multiply(){
    let prod = 0;
    recordval();
    prod = num1 * num2;
    document.getElementById("result-el").textContent = "Product: " + prod
}