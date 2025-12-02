function isPrime(n) {
  if (n <= 1)
    return false;


  for (let i = 2; i < n; i++)
    if (n % i == 0)
      return false;

  return true;
}

isPrime(11)
  ? console.log("Your no is Prime")
  : console.log("Your no is not Prime");