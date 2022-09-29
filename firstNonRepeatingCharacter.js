function firstNonRepeatedCharacter(str){
  for(let i = 0; i<str.length; i++){
    let ch = str.charAt(i);
    if(str.indexOf(ch) == i && str.indexOf(ch, i + 1) == -1){
      return ch;
    }
  }
  return null;
}
