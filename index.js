 
 /*{position: [1, 2, 3, 4, 5]
             names: [ade, josh, faith, eve, maron]};
             */

let deli = '';
function takeANumber (currentLine ,personName){
      var katzDeliLine = [];
      
  do {
    katzDeliLine.push (currentLine);
    //let msg = ('Welcome, ' + personName +  '. You are number ' + currentLine+' in line.');
    //console.log (msg);
      
        }
        
        while (currentLine < 2){
          let msg = ('Welcome, ' + personName +  '. You are number ' + currentLine+' in line.');
   
      
        }
        return(msg);
        
        
       /*while ( currentLine < 3 ){
         katzDeliLine.push (currentLine);
          currentLine++;
            }*/
    
  
}

var currentLine = 1;

  takeANumber(currentLine, 'Ada');
