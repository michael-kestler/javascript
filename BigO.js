// TODO:write a function that calculates the sum of all numbers from 1 up to (and including) some number // NOTE:


//n operations here - could be a billon - as n grows there are more and more operations number of operations
//grows roughly proportionally with n
function addUpTo(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }

  return total;

}

console.log(addUpTo(6));


//3 operations here
function addUpTo(n) {
  return n * (n+1) / 2;
}

console.log(addUpTo(6))
