var button = document.querySelector('#submit');
var input1 = document.querySelector('#input1');
var input2 = document.querySelector("#input2");
var addNumbers = function (num1, num2) {
    return num1 + num2;
};
button.addEventListener('click', function (e) {
    e.preventDefault()
    console.log(addNumbers(+input1.value, +input2.value));
});
addNumbers(2, 3);
