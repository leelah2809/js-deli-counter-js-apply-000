 
 /*{position: [1, 2, 3, 4, 5]
             names: [ade, josh, faith, eve, maron]};
             */

let deli = '';
function takeANumber (currentLine ,personName){
      var katzDeliLine = [];
      
  do {
    let msg = ('Welcome, ' + personName +  '. You are number ' + currentLine+' in line.');
    console.log (msg)
  }
  while ( currentLine < 3 ){
  katzDeliLine.push (currentLine);
currentLine++;
}
    return (msg);
  
}

var currentLine = 1;

  takeANumber(currentLine, 'Ada');
