"use strict";

// let result = '';
// const length = 7;

// for(let i = 0; i < length; i++){

//     for(let j = 0; j < i; j++){
//         result+="*";
//     }

//     result+='\n';
// }
// console.log(result);


//     // Пишем решение вот тут
// for (let i = 5; i<=10; i++){
//     console.log(i)
// } 
// for (let i = 20; i>=10; i--){
//     if (i===13){
//         break;
//     }
//     console.log(i);}
//     for (let i = 2; i <= 10; i++){
//         if(i%2==0){console.log (i);}
        
//     }    
    // for (let i = 2; i <= 16; i++) {
    //     if (i % 2 === 0) {
    //         continue;
    //     } else {
    //         console.log(i);
    //     }
    // }  

//     let num = 2;

//     while (num<=16){
//         num ++;
//         if(num%2===0){
//             console.log(num);
//         }
//     }
    
    // for (let i = 2; i <= 16; i++) {
    //     if (i % 2 === 0) {
    //         continue;
    //     } else {
    //         console.log(i);
    //     }
    // }

// const arrayOfNumbers = [];
// for (let i = 5; i < 10; i++) {
//     arrayOfNumbers[i-5]=i;
// }
// console.log(arrayOfNumbers);

// Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
const arr = [3, 5, 8, 16, 20, 23, 50];
const result = [...arr];
// Пишем решение вот тут
console.log(result);
// Не трогаем
return result;