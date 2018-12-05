var katzDeliLine = [];
function takeANumber (katzDeliLine, name){
     katzDeliLine.push (name);
      return ( 'Welcome, ' +name+  '. You are number '+ katzDeliLine.length + ' in line.');
    } 
    console.log(takeANumber (katzDeliLine,'Ada' ));
    console.log(takeANumber (katzDeliLine, 'steven'));
    console.log(takeANumber (katzDeliLine, 'Mofe'));
    
    
function nowServing(katzDeliLine){
   var announce = console.log (katzDeliLine.slice());
   
    if (katzDeliLine.length === 0){
    return ('There is nobody waiting to be served!');
    }
  else{
    
       katzDeliLine.shift();
       
}
return ('Currently serving ' + announce);
}
      console.log (nowServing(katzDeliLine));