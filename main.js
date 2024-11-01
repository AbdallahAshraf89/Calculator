
// let clear = document.getElementById("clear");

// let Delete = document.getElementById("delete");

// let pircent = document.getElementById("pircent");

// let ala = document.getElementById("ala");

// let fi = document.getElementById("fi");

// let tar7 = document.getElementById("tar7");

// let add = document.getElementById("add");

// let equal = document.getElementById("equal");

// let dote = document.getElementById("dote");

// let zero = document.getElementById("zero");

// let one = document.getElementById("one");

// let tow = document.getElementById("tow");

// let three = document.getElementById("three");

// let four = document.getElementById("four");

// let five = document.getElementById("five");

// let six = document.getElementById("six");

// let seven = document.getElementById("seven");

// let eight = document.getElementById("eight");

// let nine = document.getElementById("nine");

// let output = document.getElementById("output");

// let equation = []

// zero.onclick = function () {
//     equation.push(Number(0))
//     output.innerHTML = `${equation.join("")}`
// }

// one.onclick = function () {
//     equation.push(Number(1))
//     output.innerHTML = `${equation.join("")}`
// }

// tow.onclick = function () {
//     equation.push(Number(2))
//     output.innerHTML = `${equation.join("")}`
// }

// three.onclick = function () {
//     equation.push(Number(3))
//     output.innerHTML = `${equation.join("")}`
// }

// four.onclick = function () {
//     equation.push(Number(4))
//     output.innerHTML = `${equation.join("")}`
// }

// five.onclick = function () {
//     equation.push(Number(5))
//     output.innerHTML = `${equation.join("")}`
// }

// six.onclick = function () {
//     equation.push(Number(6))
//     output.innerHTML = `${equation.join("")}`
// }

// seven.onclick = function () {
//     equation.push(Number(7))
//     output.innerHTML = `${equation.join("")}`
// }

// eight.onclick = function () {
//     equation.push(Number(8))
//     output.innerHTML = `${equation.join("")}`
// }

// nine.onclick = function () {
//     equation.push(Number(9))
//     output.innerHTML = `${equation.join("")}`
// }

// add.onclick = function () {
//     output.innerHTML = `${equation[0] + equation[1]}`
// }

// tar7.onclick = function () {
//     output.innerHTML = `${equation[0] - equation[1]}`
// }

// ala.onclick = function () {
//     output.innerHTML = `${equation[0] / equation[1]}`
// }

// fi.onclick = function () {
//     output.innerHTML = `${equation[0] * equation[1]}`
// }

// pircent.onclick = function () {
//     output.innerHTML = `${equation[0] * (1/100)}`
// }

// dote.onclick = function () {
//     output.innerHTML = `${equation * (1/10)}`
// }

// clear.onclick = function () {
//     equation = []
//     output.innerHTML = `${equation}`;
// }

// equal.onclick = function () {
//     output.innerHTML = `${Number(equation.join(""))}`;
//     console.log(Number(equation.join("")))
//     console.log(equation.length)
// }

// Delete.onclick = function () {
//     equation.pop()
//     output.innerHTML = `${equation.join("")}`
// }

// // ==========================


let result = document.getElementById("result");

function appendNumber(number) {
    result.value += number;
}

function appendOperator(operator) {
    result.value += operator;
}

function deleteCharacter() {
    result.value = result.value.slice(0, -1);
}

// function appendDecimal() {
// // التأكد من عدم وجود أكثر من نقطة واحدة في الرقم المدخل
//     if (!result.value.includes('.')) { 
//     result.value += '.';
//     }
// }

function calculate() {
    try {
        result.value = eval(result.value);
    } catch (error) {
        result.value = "Error";
    }
}

function clearResult() {
    result.value = "";
}