//Write a function which takes in a string and returns counts of each character in the string

//do something
//return an object with keys that are lowercase alphanumeric characters in the string; values should be those characters


function charCount(str){
//make object to return at end
var result = {};

//loop over string, for each character
for(var i = 0; i < str.length; i++){

//if the char is a number/letter AND is a key in the object, add one to count,
  var char = str[i].toLowerCase()
  if(result[char] > 0){
    result[char]++;
  }
  //if the char is a number/letter AND is not in object, add it and set value to 1
  else {
    result[char] = 1;
  }

  //if character is something else (space, period, etc.) don't do anything

}
//return object
return result;

}
