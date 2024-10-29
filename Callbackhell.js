function firstFunction(param1, param2, callback) {
    setTimeout(function() {
        console.log('First function completed');
        callback(param1 + param2);
    }, 1000);
}

function secondFunction(resultFromFirst, callback) {
    setTimeout(function() {
        console.log('Second function completed');
        callback(resultFromFirst * 2);
    }, 1000);
}

function thirdFunction(resultFromSecond, callback) {
    setTimeout(function() {
        console.log('Third function completed');
        callback(resultFromSecond - 3);
    }, 1000);
}

function fourthFunction(resultFromThird, callback) {
    setTimeout(function() {
        console.log('Fourth function completed');
        callback(resultFromThird / 2);
    }, 1000);
}

function fifthFunction(resultFromFourth, callback) {
    setTimeout(function() {
        console.log('Fifth function completed');
        callback(resultFromFourth + 5);
    }, 1000);
}

firstFunction(5, 10, function(result1) {
    secondFunction(result1, function(result2) {
        thirdFunction(result2, function(result3) {
            fourthFunction(result3, function(result4) {
                fifthFunction(result4, function(result5) {
                    console.log('Final result:', result5);
                });
            });
        });
    });
});
