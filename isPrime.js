
function isPrime(num){
 if (num === 1){
   console.log("Not prime")
 } else if(num > 1){

   for (let i = 2; i < num; i++){
     if(num % i === 0){
      return false;
  } else {
    return true;
  }
}
}
}
