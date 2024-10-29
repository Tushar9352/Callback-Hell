function firstFunction(param1, param2) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('First function completed');
            resolve(param1 + param2);
        }, 1000);
    });
}

function secondFunction(resultFromFirst) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Second function completed');
            resolve(resultFromFirst * 2);
        }, 1000);
    });
}

function thirdFunction(resultFromSecond) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Third function completed');
            resolve(resultFromSecond - 3);
        }, 1000);
    });
}

function fourthFunction(resultFromThird) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Fourth function completed');
            resolve(resultFromThird / 2);
        }, 1000);
    });
}

function fifthFunction(resultFromFourth) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Fifth function completed');
            resolve(resultFromFourth + 5);
        }, 1000);
    });
}

firstFunction(5, 10)
    .then(secondFunction)
    .then(thirdFunction)
    .then(fourthFunction)
    .then(fifthFunction)
    .then((result) => {
        console.log('Final result:', result);
    });
