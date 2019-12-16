const cl = (arg) => {console.log(arg)};
cl('///// Price in numbers to letters /////');

const hundreds = [];
const dozens = [];
const units = [];
const currency = [];
let userInput = prompt('Введите число от 1 до 999', '');

const getArrayOfUserInput = (inp) => {
    inp == +inp && +inp > 0 && +inp < 1000 ? inp = inp.split('') : alert('Ввод не верен')
    return inp; 
}




