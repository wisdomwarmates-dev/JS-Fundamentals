const num = Number(process.argv[2]);

function factorial(n) {
  if (!Number.isInteger(n) || n < 0) return 1;
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}

console.log(factorial(num));