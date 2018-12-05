var katzDeliLine =[];
function takeANumber(katzDeliLine, name){
  katzDeliLine. push(name);
  return ( 'Welcome, ' + name + '. You are number ' + katzDeliLine.length+ ' in line.');
}
    console.log ( takeANumber(katzDeliLine, 'Ade'));
     console.log ( takeANumber(katzDeliLine, 'Moji'));
      console.log ( takeANumber(katzDeliLine, 'Daniel'));
      
      function nowServing(katzDeliLine){
        if (katzDeliLine.length === 0){
          return ('There is nobody waiting to be served!');
        }
        else{var remove = katzDeliLine.shift(0);
        return ( 'Currently serving ' + remove+ '.' );
          
        }
        
      }
      console.log(nowServing(katzDeliLine));
      
      function currentLine(katzDeliLine){
        if (katzDeliLine.length === 0){
          return ('The line is currently empty.');
        } else {
          
          
          for ( let i = 1; i <= katzDeliLine.length; i++){
            var noArray = katzDeliLine.join ('i.', ', ');
            console.log( 'The line is currently: ' + noArray);
            
          }
          
        }
        
      }
      
      console.log(nowServing (katzDeliLine));