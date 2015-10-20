
function speed(wordsMin){
  if(wordsMin == null ) wordsMin = 230;

  var text = document.body.textContent;
  var wordCount = text.split(" ").length;
  var num = wordCount/wordsMin;
  var n = num.toFixed(2);
  return n;

}
