const cl = (arg) => {console.log(arg)};
cl('///// Price in numbers to letters /////');

const hundreds = {1: 'сто', 2: 'двести', 3: 'триста', 4: 'четыреста', 5: 'пятьсот', 6: 'шестьсот', 7: 'семьсот', 8: 'восемьсот', 9: 'девятьсот'};
const dozens = {1: 'десять', 2: 'двадцать', 3: 'тридцать', 4: 'сорок', 5: 'пятьдесят', 6: 'шестьдесят', 7: 'семьдесят', 8: 'восемьдесят', 9: 'девяносто'};
const units = [];
const currency = {0: 'гривен', 1: 'гривна', 2: 'гривны', 3: 'гривны', 4: 'гривны', 5: 'гривен', 6: 'гривен', 7: 'гривен', 8: 'гривен', 9: 'гривен'};

let userInput = '124'; //prompt('Введите число от 1 до 999', '');

const getArrayOfUserInput = (inp) => {
    inp == +inp && +inp > 0 && +inp < 1000 ? inp = inp.split('') : alert('Ввод не верен');
    inp = inp.map(el => +el);
    return inp; 
}

const subCurrensy = (arr) => {
    arr.push(`${currency[arr[arr.length - 1]]}`);
    return arr;
}

let x = getArrayOfUserInput(userInput);
cl(x);
let y = subCurrensy(x);
cl(y);
cl(y.join())


