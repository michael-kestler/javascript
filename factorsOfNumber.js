//Determine the factors of a number

function factorsOfNumber(number){
  for(let i = 1; i <= number; i++){
    if(number % i == 0){
      console.log (i);
    }
  }
}
