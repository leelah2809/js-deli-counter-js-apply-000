 
 /*{position: [1, 2, 3, 4, 5]
             names: [ade, josh, faith, eve, maron]};
             */

let deli = '';
function takeANumber (currentLine ,personName){
      let katzDeliLine = [];
      currentLine = 1;
        
        while (currentLine < 2){
          katzDeliLine.push (currentLine);
          currentLine++;
          let msg = ('Welcome, ' + personName +  '. You are number ' + katzDeliLine[0] +' in line.');
   
            }
        return(msg);
  
}



  takeANumber(currentLine, 'Ada');
