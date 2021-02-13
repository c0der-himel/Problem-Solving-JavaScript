function primeSieve() {
  let primes = [];

  for (let i = 0; i <= 100; i++) {
    primes[i] = 1;
  }

  primes[0] = 0;
  primes[1] = 0;
  const n = primes.length;
  const sqrtN = Math.floor(Math.sqrt(primes.length));

  for (let i = 2; i <= sqrtN; i++) {
    if (primes[i] === 1) {
      for (let j = 2; i * j <= n; j++) {
        primes[i * j] = 0;
      }
    }
  }

  return primes;
}

const primes = primeSieve();

for (let i = 0; i < primes.length; i++) {
  if (primes[i] === 1) {
    console.log(i);
  }
}
