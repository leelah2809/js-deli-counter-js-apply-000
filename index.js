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
  else{ var info = console.log (katzDeliLine.slice(1));
     return ('Currently serving ' + info);
    
  }
  katzDeliLine.shift();
}

      console.log (nowServing(katzDeliLine.slice()));
      
      function currentLine (katzDeliLine){
        if (katzDeliLine.length === 0){
          return ("The line is currently empty.");
        }
       /* else { let i =1;
         var serving = ('The line is currently: ' +  katzDeliLine.length+ '. '+ katzDeliLine);
          while (i <= katzDeliLine.length){
            console.log (serving);
        i= i+1;
        }
          return serving;
        }*/
        else{ 
          return ( 'The line is currently: 1. ' + katzDeliLine[0]+ ' 2. '+ katzDeliLine[1]) + ' 3. ' + katzDeliLine[2];
      }
      }
        nowServing (katzDeliLine);