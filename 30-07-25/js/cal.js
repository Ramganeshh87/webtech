  const display = document.querySelector('.display');
  let currentInput = '0';
  let operator = '';
  let previousInput = '';

  const updateDisplay = () => display.textContent = currentInput;

  document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => {
      const value = button.textContent;
      
      if (value === 'C') { currentInput = '0'; }
      else if (value === 'CE') { currentInput = currentInput.slice(0, -1) || '0'; }
      else if (value === '=') { 
        if (operator && previousInput) currentInput = String(eval(previousInput + operator + currentInput));
        operator = ''; previousInput = ''; 
      }
      else if ('%×−+÷√1/xx²'.includes(value)) { 
        if (value === '√') currentInput = Math.sqrt(Number(currentInput)).toString();
        else if (value === 'x²') currentInput = Math.pow(Number(currentInput), 2).toString();
        else if (value === '1/x') currentInput = (1 / Number(currentInput)).toString();
        else operator = value === '×' ? '*' : value === '÷' ? '/' : value;
      }
      else { 
        currentInput = currentInput === '0' ? value : currentInput + value; 
      }
      updateDisplay();
    });
  });

