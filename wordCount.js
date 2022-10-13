
function wordCount(input){

//remove all non-alphanumeric characters and replace with spaces
  let removeChar = input.replace(/[^A-Za-z]\s+/g, " ");

 //create variable that splits modified input into an array of words
  let modifiedInput = removeChar.trim().split(" ");

//return the lenght of the array and that gives you word count
  return modifiedInput.length;

}
