// let x=232;
// x = x + 232
// alert(x);
// x=999;
// alert(x);


// const x = 232;
// x=232;
// alert(x);


// let w={ //ОБЪЕКТ
//     id: 12,
//     name: "Vanya",
//     age: 33
// };
// alert(w.id);
// alert(w.name);
// w.age=123;
// alert(w.age);
// console.log(w); //ВЫВОД В КОНСОЛЬ (В НАШЕМ СЛУЧАЕ ВЫВОД ОБЪЕКТА)


// let x;
// x=prompt("input x=");
// x=parseFloat(x);  //ХОЧУ ЧТОБЫ ТЫ ПОНЯЛ ЧТО ЭТО ЧИСЛО, А НЕ СТРОКА 
// let y;
// y=prompt("input y=");
// y=parseFloat(y);
// let z;
// z = x + y;
// alert(z);


// let x;
// x=prompt("input x=");
// x=parseFloat(x);  //ХОЧУ ЧТОБЫ ТЫ ПОНЯЛ ЧТО ЭТО ЧИСЛО, А НЕ СТРОКА 
// let y;
// y=prompt("input y=");
// y=parseFloat(y);
// let z;
// z = sum(x,y);
// alert(z);
// alert(sum(z,x));

// function sum(a,b){
//     return a+b;
// }
// if (x==y){
//     alert("no max");
// } 
// else {
//     if (x>y){
//         alert("max - x");
//     }
//     else{
//         alert("max - y");
//     }
// }

// let x=parseFloat (prompt("Введите x= "));
// let oper=prompt("Введиие операцию (+,-,/,*)");
// let y=parseFloat (prompt("Введите y= "));


// let result;


// if (oper=='+'){
//     result = summa(x,y);
// } else if(oper == '-'){
//     result = razn(x,y);
//     } else if (oper == '/'){
//         result = division(x,y);
//         } else if (oper == '*'){
//             result = mult(x,y);
//             } else {
//                 result = "no correctable";
// }
// const canculator ={
//     '+':summa,
//     '-':razn,
//     '/':division,
//     '*':mult,
//     "m":max_min
// }
// console.log(Object.keys(canculator));
// console.log(Object.values(canculator));

// if(canculator[oper]){
//     result=canculator[oper](x,y);
// } else{
//     result = "not correctable";
// }

// console.log (x+" "+oper+""+ y +"="+ result);

// function summa(a,b){
//     return a+b;
// }
// function razn(a,b){
//     return a-b;
// }
// function division(a,b){
//     return a/b;
// }
// function mult(a,b){
//     return a*b;
// }
// function max_min(a,b){
//     if (a==b){
//         return "no max";
//         } else if (a>b){
//             return "max = a";
//             } else {
//                 return "max = b";
//     }
// }
// let n=parseInt(prompt("imput n="));
// let sum =0;
// let result = "result=";
// for(let x=1; x<=n; x++){
//     sum=sum+x;
//     if (x==n){
//         result=result+x+'=';
//     } else {
//         result=result+x+'+';
//     }
// }
// result = result+sum;

// console.log(result);
// console.log(sum);





const resultElement = document.getElementById('result')
const input1 = document.getElementById('input1')
const input2 = document.getElementById('input2')

const submitBtn = document.getElementById('submit')
const plusBtn = document.getElementById('plus')
const minusBtn = document.getElementById('minus')
let  action ='+'

//  console.log(typeof sum) //ПРОВЕРКА НА ТИП ДАННЫХ tipeof 
 
plusBtn.onclick = function (){
    let  action ='+'
}

minusBtn.onclick = function(){
    let  action ='-'
}

function printResult(result){
    if (result < 0) {
        resultElement.style.color = 'red'
    } else {
        resultElement.style.color = 'green'
    }
    resultElement.textContent = result
}

function computeNumbersWithAction(inp1, inp2, actionSymbol){
    const num1 = Number(inp1.value)
    const num2 = Number(inp2.value)
    // if (actionSymbol == '+'){
    //    return num1 + num2
    // } else {
    //    return num1 - num2
    // } 
    return actionSymbol = '+' ? num1 + num2 : num1 - num2
}

submitBtn.onclick = function (){
    const result = computeNumbersWithAction(input1, input2, action)
    printResult(result)
//     if(action == '+'){
//         const sum = Number(input1.value) + Number(input2.value)
//         printResult(sum)
//     } else if (action == '-'){
//         const sum = Number(input1.value) - Number(input2.value)
//         printResult(sum)
//     }
}