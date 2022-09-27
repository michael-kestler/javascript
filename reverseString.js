

function reverseString(str){
  //create an empty string that will host the new reversed string
  let rev = "";
  //create for loop to loop through each letter
  //i = str.length - 1 which corresponds to the last letter in the string
  //loop will keep iterating as long as i is greater than or equal to zero
  //it decerment i after each iteration
  for(let i = str.length - 1; i >= 0; i--){
    rev += str[i];
  }

  //retun the reversed string
  return rev;
}

function palindrome(str){
let rev = "";
str.toLowerCase();

for(let i = str.length - 1; i >= 0; i--;){
  rev += str[i];
} if (rev == str){
  return (str + " is a palindrome")
} else {
  return (str + " is not a palindrome")
}
}


}
