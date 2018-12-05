var katzDeliLine = [];
function takeANumber (katzDeliLine, name){
     katzDeliLine.push (name);
      return ( 'Welcome, ' +name+  '. You are number '+ katzDeliLine.length + ' in line.');
    } 
    console.log(takeANumber (katzDeliLine,'Ada' ));
    console.log(takeANumber (katzDeliLine, 'steven'));
    console.log(takeANumber (katzDeliLine, 'Mofe'));
    
    
function nowServing(katzDeliLine){
  if (katzDeliLine === 0){
    return ('There is nobody in line.');
  }
  else{
  var firstInLine = console.log (katzDeliLine.slice()));
  katzDeliLine.shift();
}
}