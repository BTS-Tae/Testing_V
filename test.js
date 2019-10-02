function fib(n) {
    return n <= 1 ? n : fib(n - 1) + fib(n - 2);
  }
function fib(n) {
    let a = 1, b = 1, i;
    for ( i = 3; i <= n; i++) {
      let c = a + b;
      a = b;
      b = c;
    }
    return b;
  }
  console.log(fib(8));
