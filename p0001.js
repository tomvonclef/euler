
function mult(mult1, mult2, belowNum) {
    var i;
    var sum = 0;
    for(i = 2; i < belowNum; i++) {
        if(i % mult1 === 0 || i % mult2 === 0) sum += i;
    }
    return sum;
}

console.log('mult(3, 5, 1000): ' + mult(3, 5, 1000));
