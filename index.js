 
 /*{position: [1, 2, 3, 4, 5]
             names: [ade, josh, faith, eve, maron]};
             */


function takeANumber (currentLine ,personName){
      var katzDeliLine = ["Steven", "Blake"];
      
       
        //let msg = ('Welcome, ' + personName +  '. You are number ' + katzDeliLine[0] +' in line.');
   
        
          katzDeliLine.unshift (personName);
          
          
            
        console.log ('Welcome, ' + katzDeliLine[0] +  '. You are number ' + currentLine +' in line.');
   
  
}

currentLine = 1;

  takeANumber(currentLine,'Ada');
