const display = document.querySelector('.display');
const buttons = document.querySelectorAll('button');

let memory = 0;

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.textContent;

    if (value === 'C') {
      display.value = '';
    } else if (value === '=') {
      try {
        display.value = eval(display.value);
      } catch {
        display.value = 'Error';
      }
    } else if (value === 'M+') {
      memory += parseFloat(display.value || '0');
      display.value = '';
    } else if (value === 'M-') {
      memory -= parseFloat(display.value || '0');
      display.value = '';
    } else if (value === '%') {
      display.value = (parseFloat(display.value || '0') / 100).toString();
    } else {
      display.value += value;
    }
  });
});
