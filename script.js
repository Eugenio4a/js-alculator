// Создайте объект city1 (var city1 = {}), укажите у него свойства name (название города, строка) со значением «ГородN» и population (населенность города, число) со значением 10 млн.

// Создайте методы exportStr() у каждого из объектов. Этот метод должен возвращать информацию о городе в формате «name=ГородN\npopulation=10000000\n». Для второго города будет строка со своими значениями. Примечание: можно обращаться к каждому свойству через цикл for/in, но методы объекта возвращать не нужно
// Создайте глобальную функцию getObj(), которая возвращает this. А у каждого из объектов city1 или city2 метод getCity, который ссылается на getObj. Проверьте работу метода. Примечание: к объекту вызова можно обратиться через this.
// let city = {
//     name: 'Kyiv',
//     population: 100000,
//     head: 'Vitaliy',
//     minimalSalary: 3000,
//     getInfo: function() {
//         console.log(city.name + " " + city.population) // METHOD
//     },
//     getMinSalary: function() {
//         console.log("Mер " + city.head + " установил мин.зп " + city.minimalSalary);
//     }
// };
// city.getInfo();
// city.getMinSalary();
// for (let key in city) {
//     console.log(city[key])
// }
let plus = document.querySelector('#plus');
let min = document.querySelector('#min');
let divid = document.querySelector('#divid');
let multi = document.querySelector('#multi');
let fin = document.querySelector('#fin');
let dott = document.querySelector('#dott');
let res = document.querySelector('#res');
let c = document.querySelector('#c');
let square = document.querySelector("#square");
let root = document.querySelector("#root");
// let numbers = [...document.querySelectorAll('.number')];
let one = document.querySelector('#one');
let two = document.querySelector('#two');
let three = document.querySelector('#three');
let four = document.querySelector('#four');
let five = document.querySelector('#five');
let six = document.querySelector('#six');
let seven = document.querySelector('#seven');
let eight = document.querySelector('#eight');
let nine = document.querySelector('#nine');
let zero = document.querySelector('#zero');
let doubleZero = document.querySelector('#doubleZero');
let display = document.querySelector('.display');
// let width = document.querySelector('.width');
let num1 = 0;
let num2 = 0;

let oneData = one.dataset.number;
let twoData = two.dataset.number;
let threeData = three.dataset.number;
let fourData = four.dataset.number;
let fiveData = five.dataset.number;
let sixData = six.dataset.number;
let sevenData = seven.dataset.number;
let eightData = eight.dataset.number;
let nineData = nine.dataset.number;
let zeroData = zero.dataset.number;
let doubleZeroData = doubleZero.dataset.number;
// console.log(oneData);



// let count = 0;

// for (let item of numbers) {
//     let x = +count;
//     console.log(item);
//     item.id += x;
// }

let calc = {
    getSum: function(num1, num2) {
        return num1 + num2
    },
    getMin: function(num1, num2) {
        return num1 - num2
    },
    getDivid: function(num1, num2) {
        return num1 / num2
    },
    getMultiply: function(num1, num2) {
        return num1 * num2
    }
};

one.addEventListener('click', function() {
    display.innerHTML = display.innerText + oneData;

});
two.addEventListener('click', function() {
    display.innerHTML = display.innerText + twoData;

});
three.addEventListener('click', function() {
    display.innerHTML = display.innerText + threeData;

});
four.addEventListener('click', function() {
    display.innerHTML = display.innerText + fourData;

});
five.addEventListener('click', function() {
    display.innerHTML = display.innerText + fiveData;

});
six.addEventListener('click', function() {
    display.innerHTML = display.innerText + sixData;

});
seven.addEventListener('click', function() {
    display.innerHTML = display.innerText + sevenData;

});
eight.addEventListener('click', function() {
    display.innerHTML = display.innerText + eightData;

});
nine.addEventListener('click', function() {
    display.innerHTML = display.innerText + nineData;

});
zero.addEventListener('click', function() {
    display.innerHTML = display.innerText + zeroData;

});
doubleZero.addEventListener('click', function() {
    display.innerHTML = display.innerText + doubleZeroData;

});

plus.addEventListener('click', function() {
    display.innerHTML = display.innerText + " " + plus.dataset.operation + '\t&nbsp;';
});
min.addEventListener('click', function() {
    display.innerHTML = display.innerText + " " + min.dataset.operation + '\t&nbsp;';
});
divid.addEventListener('click', function() {
    display.innerHTML = display.innerText + " " + divid.dataset.operation + '\t&nbsp;';
});
multi.addEventListener('click', function() {
    display.innerHTML = display.innerText + " " + multi.dataset.operation + '\t&nbsp;';
});
dott.addEventListener('click', function() {
    display.innerHTML = display.innerText + dott.dataset.operation;
})
fin.addEventListener('click', function() {
    let text = display.innerText;
    let finArr = text.split(" ");

    let plus = finArr.find(el => {
        return el === "+"
    })
    let min = finArr.find(el => {
        return el === "-"
    })
    let divid = finArr.find(el => {
        return el === "÷"
    })
    let multi = finArr.find(el => {
        return el === "x"
    })
    if (plus === "+") {
        return display.innerText = Number(finArr[0]) + Number(finArr[2]);
    } else if (min === "-") {
        return display.innerText = Number(finArr[0]) - Number(finArr[2]);
    } else if (divid === "÷") {
        return display.innerText = Number(finArr[0]) / Number(finArr[2]);
    } else if (multi === "x") {
        return display.innerText = Number(finArr[0]) * Number(finArr[2]);
    } else {}


})
res.addEventListener('click', function() {
    let cutOne = display.innerText;
    let cutOneArr = cutOne.split('');
    cutOneArr.splice(-1)
    cutOne = cutOneArr.join("");
    return display.innerHTML = cutOne


})
c.addEventListener('click', function() {

    return display.innerHTML = ""


})

square.addEventListener('click', function() {
    let toSquare = display.innerText * display.innerText;
    return display.innerHTML = toSquare

})
root.addEventListener('click', function() {
    let toSquare = Math.sqrt(display.innerText);
    console.log(toSquare)
    return display.innerHTML = toSquare

})