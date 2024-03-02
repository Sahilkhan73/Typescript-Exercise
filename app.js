"use strict";
let unknown = '';
unknown = prompt('What is your name ?') || '';
if (unknown !== null && unknown !== '') {
    alert(`Hello ${unknown},would you like to learn some Python today?`);
}
else {
    alert(`You have to fill your name !`);
}
