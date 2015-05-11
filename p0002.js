var fibs = function(maxVal) {
  var fibs_result = [0, 1];
  var last_fib = 1;

  while(last_fib <= maxVal) {
    fibs_result.push(last_fib);
    last_fib = fibs_result[fibs_result.length - 1] + fibs_result[fibs_result.length - 2];
  }

  return fibs_result;
};

var maxVal = process.argv[2];

fibsArray = fibs(maxVal);

console.log('fibs(' + maxVal + '): ' + fibsArray);

var i, fibSum = 0;

for(i = 0; i < fibsArray.length; i++) {
  if(fibsArray[i] % 2 === 0) {
    fibSum += fibsArray[i];
  }
}

console.log('fibSum: ' + fibSum);
