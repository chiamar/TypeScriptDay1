"use strict";
// let names: Array <string}> = [{
let names = ["Petra", "Stephan", "Igor", "Sven", "Stefan"];
// Print only index
for (let index in names) {
    console.log(index);
}
// Print only values
for (let val of names) {
    console.log(val);
}
// Print both index and values
names.forEach(function (val, index) {
    console.log(`${index}: ${val}`);
});
