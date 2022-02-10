"use strict";
// let myName: Array <{fName: string, lName: string}> = [{
let myName = [{
        fName: "Petra",
        lName: "Sedlaczek",
    }];
let body = document.body;
body.innerHTML = `${myName[0].fName} ${myName[0].lName}<hr>`;
myName.forEach(function (val) {
    for (let i = 0; i < 10; i++) {
        body.innerHTML += val.fName + "<br>";
    }
    body.innerHTML += "<hr>";
});
setTimeout(() => {
    myName.forEach(function (val) {
        for (let i = 0; i < 10; i++) {
            console.log(val.lName);
        }
    });
}, 5000);
setTimeout(() => {
    myName.forEach(function (val) {
        for (let i = 0; i < 10; i++) {
            body.innerHTML += val.lName + "<br>";
        }
    });
}, 5000);
