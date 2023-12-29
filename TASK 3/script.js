let displayValue = '';

function appendToDisplay(value) {
  displayValue += value;
  document.getElementById('display').value = displayValue;
}

function clearDisplay() {
  displayValue = '';
  document.getElementById('display').value = displayValue;
}

function operation(operator) {
  if (displayValue !== '') {
    displayValue += operator;
    document.getElementById('display').value = displayValue;
  }
}

function calculate() {
  if (displayValue !== '') {
    try {
      let result = eval(displayValue);
      document.getElementById('display').value = result;
      displayValue = result.toString();
    } catch (error) {
      document.getElementById('display').value = 'Error';
    }
  }
}

function modulo() {
    if (displayValue !== '') {
      try {
        let result = eval(displayValue);
        result = result % 1 === 0 ? result : result.toFixed(2); 
        document.getElementById('display').value = result;
        displayValue = result.toString();
      } catch (error) {
        document.getElementById('display').value = 'Error';
      }
    }
  }

function backspace() {
    displayValue = displayValue.slice(0, -1);
    document.getElementById('display').value = displayValue;
  }
