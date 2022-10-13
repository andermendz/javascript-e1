const sumAll = function(a,b) {

    numbers = []
    let sum = 0
    let minor
    let major

    if (a < b && a > 0 && b > 0 && typeof a == 'number' && typeof b == 'number') {
        minor = a
        major = b
    } else if (a > b && a > 0 && b > 0 && typeof a == 'number' && typeof b == 'number'){
        minor = b
        major = a
    } else {
        sum = "ERROR"
    }

    for (n = minor; n <=  major; n++) {
        numbers.push(n)
        sum += n
    }
    return sum
};

// Do not edit below this line
module.exports = sumAll;
