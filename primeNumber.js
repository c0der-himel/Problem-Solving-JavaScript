function isPrime(x) {
  if (x <= 1) return 0;
  for (let i = 2; i < x; i++) if (x % i === 0) return 0;
  return 1;
}

if (isPrime(7)) console.log('Prime');
else console.log('Not Prime');
