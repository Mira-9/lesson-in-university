let number1, number2, operation;
number1 = prompt("Введите первое число");
operation = prompt("Введите операцию +, -, /, *, **");
number2 = prompt("Введите второе число");
operation = operation.trim(); 

let result;
result = getCalculatedResultOrError(number1, operation, number2);
alert("Результат: " + result);

function getCalculatedResultOrError(number1, operation, number2){
    number1 = parseFloat(number1);
    number2 = parseFloat(number2);

    if (isNaN(number1) || isNaN(number2)){
        return "Введенные числа некорректны";
    }

    if (operation == "+"){
        return number1 + number2;
    } else if (operation == "-"){
        return number1 - number2;
    }
    else if (operation == "*"){
        return number1 * number2;
    }
    else if (operation == "/"){
        return number1 / number2;
    }
    else if (operation == "**"){
        return number1 ** number2;
    } else{
        return "Введена некоректная операция";
    }
}

function divide(number1, number2){
    if (number2 == 0){
        return "на ноль делить нельзя";
    }
    return number1 / number2;
}