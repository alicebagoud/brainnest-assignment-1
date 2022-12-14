let display = document.getElementById("display");

let buttons = Array.from(document.getElementsByClassName("button"));

buttons.map(button => {
    button.addEventListener('click', (e) => {
        switch(e.target.innerText){
            case 'AC':
                display.innerText = '';
                break;
            case 'DEL':
                if(display.innerText) {
                    display.innerText = display.innerText.slice(0, -1); /* splice method to remove the last character from our display */
                }
                break;
            case '=':
                try {
                    display.innerText = Math.round(eval(display.innerText));
                } catch {
                    display.innerText = '*****';
                }
                break;            
            default:
                display.innerText += e.target.innerText;
        }
    });
});

function getDisplayNumber(number) {
    const stringNumber = number.toString()
    const integerDigits = parseFloat(stringNumber.split('.')[0])
    const decimalDigits = stringNumber.split('.')[1]
    let integerDisplay
    if (isNaN(integerDigits)) {
      integerDisplay = ''
    } else {
      integerDisplay = integerDigits.toLocaleString('en', { maximumFractionDigits: 0 })
    }
    if (decimalDigits != null) {
      return `${integerDisplay}.${decimalDigits}`
    } else {
      return integerDisplay
    }
  }


// keyboard Support


document.addEventListener('keydown', function (event) {
    let patternForNumbers = /[0-9]/g;
    let patternForOperators = /[+-/*]/g;
  
    if (event.key.match(patternForNumbers)) {
      event.preventDefault();
      buttons.appendNumber(event.key)
      buttons.updateDisplay()
    }
    if (event.key === '.') {
      event.preventDefault();
      buttons.appendNumber(event.key)
      buttons.updateDisplay()
    }
    if (event.key.match(patternForOperators)) {
      event.preventDefault();
      buttons.chooseOperation(event.key)
      buttons.updateDisplay()
    }
    if (event.key === 'Enter' || event.key === '=') {
      event.preventDefault();
      buttons.compute()
      buttons.updateDisplay()
    }
    if (event.key === "Backspace") {
      event.preventDefault();
      buttons.delete()
      buttons.updateDisplay()
    }
    if (event.key == 'Delete') {
      event.preventDefault();
      buttons.clear()
      buttons.updateDisplay()
    }
  
  });
  