
const container = document.querySelector('#container');
const calculatorFrame = document.querySelector('.calculatorFrame');
const calculatorDisplay = document.querySelector('.calculations');


// creates buttons inside calculator frame
function createButtons(rows, buttons) {
    for (let i = 0; i < rows; i++) {
        let row = document.createElement('div');
        row.classList.add('row');
        for (let j = 0; j < buttons; j++) {
            let btn = document.createElement("button");
            btn.setAttribute('id', 'btn');
            row.appendChild(btn);
        }
        calculatorFrame.appendChild(row);
    }
}




createButtons(5,4);
// list of mathematical functions - unless specified, each one limits the number of decimal places to 2

// addition function 
function add(a, b) {
    sum = a + b;
    if (sum % 1 != 0) {
      return sum.toFixed(2);
    }
    else return sum
}

// subtraction function 
function subtract(a, b) {
    sum = a - b;
    if (sum % 1 != 0) {
      return sum.toFixed(2);
    }
    else return sum
}

// multiplication function
function multiply(a, b) {
    sum = a * b;
    if (sum % 1 != 0) {
      return sum.toFixed(2);
    }
    else return sum
}

// division function 
function divide(a, b) {
    sum = a / b;
    if (sum % 1 != 0) {
      return sum.toFixed(2);
    }
    else return sum
}


// square root function 
function squareRoot(display) {
    return Math.sqrt(display);
}

// convert number to percentage - 3 decimal places
function percentage(display) {
    let num = display / 100;
    return num.toFixed(3);
}

// converts integer from positive to negative , vice versa
function plusMinus (display) {
    if (display > 0) {
        return -Math.abs(display);
    }
    else if (display < 0) {
        return Math.abs(display);
    }
}

// combined operators function
function operators(operator, a, b) {
    while (true) {
    if (operator == '+') {
        return add(a, b);
    }
    else if (operator == '-') {
        return subtract(a, b);
    }
    else if (operator == '*') {
        return multiply(a, b);
    }
    else if (operator == '/') {
        return divide(a, b);
    }
    
    
    }
}

// function to delete last value inputted 
function deleteCharacter(display) {
  let newDisplay = Array.from(display);
  display = Number(newDisplay.slice(0, display.length-1).join(''));
  return calculatorDisplay.textContent = display;
}


// array that will provide calculator buttons with text content
const buttonTextContent = ["AC", "√x", '%', '÷', '7', '8', '9', 'x', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '+/-', '='];

// selects all buttons
const allButtons = document.querySelectorAll('#btn');

// function to assign text content from an array 
function assignText(array){
    for (let i = 0; i < array.length; i++) {
        allButtons[i].textContent = array[i];
        allButtons[i].value = array[i];
    }
}

// calls function to assign symbols to each button
assignText(buttonTextContent);

// create an empty object to store numbers in
  let numbers = {};

// the operator is put in strings so it will work for our functions 
  let theOperator = ""
  
// event listeners for each button

// clear 
  allButtons[0].addEventListener('click', () => {
    calculatorDisplay.textContent = '';
    })
  
// square root
  allButtons[1].addEventListener('click', () => {
    calculatorDisplay.textContent = squareRoot(calculatorDisplay.textContent);
    })
   
// convert to percentage
  allButtons[2].addEventListener('click', () => {
    calculatorDisplay.textContent = percentage(calculatorDisplay.textContent);
    })

// division         
  allButtons[3].addEventListener('click', () => {
    numbers.num1 = Number(calculatorDisplay.textContent);
    calculatorDisplay.textContent = '';
    theOperator = '/';
    console.log(numbers);
    })

// 7
  allButtons[4].addEventListener('click', () => {
    calculatorDisplay.textContent += 7;
    console.log(calculatorDisplay.textContent);
    })

// 8
  allButtons[5].addEventListener('click', () => {
    calculatorDisplay.textContent += 8;
    console.log(calculatorDisplay.textContent);
    })

// 9
  allButtons[6].addEventListener('click', () => {
    calculatorDisplay.textContent += 9;
    console.log(calculatorDisplay.textContent);
    })

// multiply
  allButtons[7].addEventListener('click', () => {
    numbers.num1 = Number(calculatorDisplay.textContent);
    calculatorDisplay.textContent = '';
    theOperator = '*';
    console.log(numbers);
   })

 // 4  
  allButtons[8].addEventListener('click', () => {
    calculatorDisplay.textContent += 4;
    console.log(calculatorDisplay.textContent);
    })

// 5
  allButtons[9].addEventListener('click', () => {
    calculatorDisplay.textContent += 5;
    console.log(calculatorDisplay.textContent);
    })

// 6
  allButtons[10].addEventListener('click', () => {
    calculatorDisplay.textContent += 6;
    console.log(calculatorDisplay.textContent);
    })

// subtract
  allButtons[11].addEventListener('click', () => {
    numbers.num1 = Number(calculatorDisplay.textContent);
    calculatorDisplay.textContent = '';
    theOperator = '-';
    console.log(numbers);
    }) 
  
// 1   
  allButtons[12].addEventListener('click', () => {
    calculatorDisplay.textContent += 1;
    console.log(calculatorDisplay.textContent);
    })

// 2
  allButtons[13].addEventListener('click', () => {
    calculatorDisplay.textContent += 2;
    console.log(calculatorDisplay.textContent);
    })

// 3
  allButtons[14].addEventListener('click', () => {
    calculatorDisplay.textContent += 3;
    console.log(calculatorDisplay.textContent);
    })

// add
  allButtons[15].addEventListener('click', () => {
    numbers.num1 = Number(calculatorDisplay.textContent);
    calculatorDisplay.textContent = '';
    theOperator = '+';
    console.log(numbers);
    })

// 0
  allButtons[16].addEventListener('click', () => {
    calculatorDisplay.textContent += 0;
    console.log(calculatorDisplay.textContent);
    })

// .
  allButtons[17].addEventListener('click', () => {
    if (calculatorDisplay.textContent.includes('.')){
        calculatorDisplay.textContent += '' 
    }
    else {
    calculatorDisplay.textContent += '.';
    console.log(calculatorDisplay.textContent);
  }})

// makes number on calculator positive or negative 
  allButtons[18].addEventListener('click', () => {
    calculatorDisplay.textContent = plusMinus(calculatorDisplay.textContent);
});

// = (calculates answer from variables)
  allButtons[19].addEventListener('click', () => {
    numbers.num2 = Number(calculatorDisplay.textContent);
    if (numbers.num2 == 0 && theOperator == "/") {
        calculatorDisplay.textContent = "Lets not and say we did ;)"
    }
        
    else {
    calculatorDisplay.textContent = operators(theOperator, numbers.num1, numbers.num2);
  }});


// event listener for delete key down 


// add specific classes to button types
let buttonOperators = [allButtons[3], allButtons[7], allButtons[11], allButtons[15], allButtons[19]];
for (let i = 0; i < buttonOperators.length; i++) {
    buttonOperators[i].classList.add('operators')
}

let buttonNumbers = [allButtons[4], allButtons[5], allButtons[6], allButtons[8], allButtons[9], allButtons[10], allButtons[12], allButtons[13], allButtons[14], allButtons[16], allButtons[17]];
for (let i = 0; i < buttonNumbers.length; i++) {
    buttonNumbers[i].classList.add('numbers');
}