//Write a function which takes in a string and returns counts of each character in the string

//do something
//return an object with keys that are lowercase alphanumeric characters in the string; values should be those characters


function charCount(str){
//make object to return at end
var obj = {};

//loop over string, for each character
for(var i = 0; i < str.length; i++){

//if the char is a number/letter AND is a key in the object, add one to count,
  var char = str[i].toLowerCase()
  if(/[a-z0-9]/.test(char)){
    if(obj[char] > 0){
      obj[char]++;
    }   else {
      obj[char] = 1;
  }
  //if the char is a number/letter AND is not in object, add it and set value to 1

  }

  //if character is something else (space, period, etc.) don't do anything
}
//return object
return obj;

}

function isAlpaNumeric(char){
  var code = char.charCodeAt(0);
  if(!(code > 47 && code < 58)) && //numeric (0-9)
   !(code > 64 && code < 91) && // upper alpha (A-Z)
   !(code > 96 && code < 123)) { // lower alpha (a-z)
     return false;
   }
   return true;
}


function charCount1(str){
  let result = {};

  for(let i = 0; i< str.length; i++){
    let char = str[i];
    if (result[char] > 0){
      result[char]++;
    } else {
      result[char] = 1
    }

    }
      return result;
  }
