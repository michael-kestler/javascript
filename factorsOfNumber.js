//Determine the factors of a number

function factorsOfNumber(number){
  for(let i = 1; i <= number; i++){
    if(number % i == 0){
      console.log (i);
      //prints factors of number
    }
  }
}

factorsOfNumber(75);
//prints
// 1
// 3
// 5
// 15
// 25
// 75
