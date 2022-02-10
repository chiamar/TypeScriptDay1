"use strict";
// let arr: Array<number> = [1,2,3,4,5,6,7,8,9,10]
let arr = [];
for (let i = 1; i <= 10; i++) {
    arr.push(i);
}
// console.log(arr);
for (let i in arr) {
    for (let num of arr) {
        let mult = arr[i] * num;
        document.write(`${arr[i]} x ${num} = ${mult}<br>`);
    }
    document.write("<hr>");
}
