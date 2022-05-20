function calculation(){
    let numbers = [];

    for(i = 0; i <= 1; i++){
        numbers[i] = Number(prompt("Enter a number:"));
    }

    let element = document.getElementById("results");
    element.classList.add("math-results");

    element.innerHTML = `
        <p>${numbers[0]} + ${numbers[1]} = ${sum(numbers[0], numbers[1])}</p>
        <p>${numbers[0]} - ${numbers[1]} = ${sus(numbers[0], numbers[1])}</p>
        <p>${numbers[0]} * ${numbers[1]} = ${mul(numbers[0], numbers[1])}</p>
        <p>${numbers[0]} / ${numbers[1]} = ${div(numbers[0], numbers[1])}</p>
    `;
}

function sum(a, b){
    return a + b;
}

function sus(a, b){
    return a - b;
}

function mul(a, b){
    return a * b;
}

function div(a, b){
    return a / b;
}