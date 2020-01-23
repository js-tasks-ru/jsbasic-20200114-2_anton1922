'use strict';

let calculator = {
  read(a, b) {
    calculator.valueFirst = a;
    calculator.valueSecond = b;
  },
  sum() {
    return calculator.valueFirst + calculator.valueSecond;
  },
  mul() {
    return calculator.valueFirst * calculator.valueSecond;
  },
};

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
