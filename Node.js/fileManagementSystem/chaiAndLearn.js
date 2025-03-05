const sayName = function () {
    console.log(`Say My name`);
}

const sayMyName = setTimeout(sayName, 2000);

clearTimeout(sayMyName);

setInterval(sayName, 1000);

