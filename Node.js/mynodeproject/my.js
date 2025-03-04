// const fs = require('fs')

// fs.writeFileSync('Hello.txt', 'hello from js');
// console.log('File Created');


// const math = require('./math');

// console.log(math.add(12, 23));

// console.log(math.multiply(5, 24));



// new Promise((resolve, reject ) => {

//     const success = true;
//     setTimeout(() => {
//         if(success){
//             resolve('Opration Successfull. . .');
//         } else {
//             reject('Opration Failed. . .');
//         }
//     }, 2000);
// });

// let p1 = new Promise((resolve) => setTimeout(() => {
//     resolve('Promice 1')
// }, 1000))

// p1.then(resolve => console.log(resolve));


// Exercise 1
// function fetchUser(userId) {
//     return new Promise((resolve, reject) => {

//         setTimeout(() => {
//             if (userId > 0) {
//                 resolve(userId);
//             } else {
//                 reject('Invalid id');
//             }
//         }, 2000);
//     });
// }

// fetchUser(123).then((response) => {
//     console.log(response);
// });


// Exercise 3
// function fetchUser() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve({ id: 1, name: 'Alice' });
//         }, 2000);
//     });
// }

// function fetchOrders() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(['Laptop', 'Phone']);
//         }, 3000);
//     });
// }

// Promise.all([fetchUser(), fetchOrders()])
//     .then(([user, orders]) => {
//         console.log('User:', user);
//         console.log('Orders:', orders);
//     })
//     .catch((error) => {
//         console.error('Error:', error);
//     });

// Exercise 4
function fetchUserData(url){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(url)
        }, 4000);
    })
}

function timeOutPromise(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("Rejected")
        }, ms);
    })
} 

Promise.race([fetchUserData('user'), timeOutPromise(5000)])
    .then((result) => console.log(result))
    .catch((error) => console.error(error));
