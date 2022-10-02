function vowelsConsonantsCount (str){
  let count = 0;
  for(let i=0; i<str.length; i++){
    let letter = str[i].toLowerCase();
    if(letter=='a'||letter=='e'||letter=='i'||
  letter=='o'||letter=='u'){
    count++
  }
  console.log("Vowels: ",count, " Consonants:",(str.length - count))
  }
  return;
}
