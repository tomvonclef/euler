var primes = [2, 3, 5];

function primeAt(pos) {

  if(pos < primes.length) {
    return primes[pos];
  }

  var i;
  var maybePrime = primes[primes.length - 1] + 1;
  while(pos >= primes.length) {
    for(i = 0; i < primes.length; i++) {
      if(maybePrime % primes[i] === 0) {
        break;
      }
    }
    if(i === primes.length) {
      primes.push(maybePrime)
    }
    maybePrime++;
  }

  return primes[pos];
}

function primeFactors(numToFactor) {
  var factors = [];
  var num = numToFactor;
  var i;

  while(num !== 1) {
    for(i = 0; ; i++) {
      var prime = primeAt(i);
      if(num % prime === 0) {
        factors.push(prime)
        num /= prime;
        break;
      }
      if(prime >= num) {
        console.log('prime: ' + prime + ', num: ' + num);
        return factors;
      }
    }
  }

  return factors;
}
