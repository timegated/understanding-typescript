const button = document.querySelector('#submit');
const input1 = document.querySelector('#input1')! as HTMLInputElement;
const input2 = document.querySelector("#input2")! as HTMLInputElement;

const addNumbers = (num1: number, num2: number) => {
  return num1 + num2;
};

button.addEventListener('click', () => {
  console.log(addNumbers(+input1.value, +input2.value))
});

addNumbers(2, 3);