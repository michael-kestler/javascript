

function anagramChecker(a, b){
  let len1 = a.length;
  let len2 = b.length;

  //first step is to check if lengths match
  //easiest way to show they are not anagrams
if (len1 !== len2){
  console.log("Invalid Input")
    return;
}
let str1 = a.split('').sort().join('');
console.log(str1);
let str2 = b.split('').sort().join('');
console.log(str2);
if (str1 === str2){
  console.log(a + " is an anagram of " + b);
} else {
  console.log (a + " is not an anagram of " + b);
}

}



//refactored
function validAnagram(a, b){

  let len1 = a.length;
  let len2 = b.length;
  let str1 = a.split('').sort().join('');
  let str2 = b.split('').sort().join('');


if (len1 !== len2){
   return false;
} else if (str1 === str2){
    return true;

} else {
    return false;

}

}
