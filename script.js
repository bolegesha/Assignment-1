"use strict";

const obj = {
    a:5,
    b:1
};

// const copy = obj;

// copy.a = 10;

// console.log(copy);
// console.log(obj);

function copy(mainObj) {
    let objCopy = {};

    let key;
    for(key in mainObj) {
        objCopy[key] = mainObj[key];
    }
    return objCopy;
}

const num = {
    a:2,
    b:5,
    c: {
        x:7,
        z:9
    }
};

const newNumbers = copy(num);

newNumbers.a = 10;

// console.log(newNumbers);
// console.log(num);

const add = {
    d: 17,
    e: 20
};

const clone = Object.assign({}, add);

clone.d = 20;

// console.log(add);
// console.log(clone);

const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();

console.log(oldArray);
console.log(newArray);

const video = ['youtube', 'vimeo', 'rutube'];
      blogs = ['wordpress', 'livejourney', 'blogger'];
    internet = [...video, ...blogs,'instagram'];

console.log(internet);

