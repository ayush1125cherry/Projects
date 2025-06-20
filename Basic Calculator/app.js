const toDisplay = (value) => {
  const x = document.getElementById("display");
  if (value === "C") {
    x.value = "";
  } else if (value === "←") {  
    x.value = x.value.toString().slice(0, -1);
  } else {
    if (['+', '-', '*', '/'].includes(value)) {
      const lastChar = x.value.toString().slice(-1);
      if (['+', '-', '*', '/'].includes(lastChar)) {
        x.value = x.value.toString().slice(0, -1);
      }
    }
    x.value += value;
  }
};

  const cal = () => {
    const display = document.getElementById("display");  
    try {
      const result = eval(display.value);
      display.value = result;
    } catch (error) {
      display.value = "Error"; 
    }
  };


  document.addEventListener('keydown',function(e){
    const key=e.key;
    const display = document.getElementById("display");

    const keyMap = {
      '0': '0',
      '1': '1',
      '2': '2',
      '3': '3',
      '4': '4',
      '5': '5',
      '6': '6',
      '7': '7',
    '8': '8',
    '9': '9',
    '+': '+',
    '-': '-',
    '*': '*',
    '/': '/',
    '.': '.',
    ',': '.', 
    'Enter': '=',
    '=': '=',
    'Escape': 'C',
    'Backspace': '←',
    'Delete': 'C'
  };

   if (key in keyMap) {
    e.preventDefault(); 
    const action = keyMap[key];
    if (action === '=') {
      cal();
    } else {
      toDisplay(action);
    }
  }
});