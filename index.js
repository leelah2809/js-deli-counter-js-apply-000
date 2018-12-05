var katzDeliLine = [];
function takeANumber (katzDeliLine, name){
     katzDeliLine.push (name);
      return ( 'Welcome, ' +name+  '. You are number '+ katzDeliLine.length + ' in line.');
    } 
    console.log(takeANumber (katzDeliLine,'Ada' ));
    console.log(takeANumber (katzDeliLine, 'steven'));
    console.log(takeANumber (katzDeliLine, 'Mofe'));
    
    
function nowServing(katzDeliLine){
   
   
    if (katzDeliLine.length === 0){
    return ('There is nobody waiting to be served!');
    }
  else{var announce = console.log (katzDeliLine.slice());
    return ('Currently serving ' + announce);

  }
  katzDeliLine.shift();
}
      nowServing(katzDeliLine);
      
      function currentLine (katzDeliLine){
        if (katzDeliLine.length === 0){
          return ("The line is currently empty.");
        }
        else { let i =1;
          while (i <= katzDeliLine.length){
        var serving = console.log('The line is currently: ' +  katzDeliLine.length+ '. '+ katzDeliLine);
        i= i+1;
        }
          return serving;
        }
      }
        nowServing (katzDeliLine);