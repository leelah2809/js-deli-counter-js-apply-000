var katzDeliLine = [];

function takeANumber(katzDeliLine, name){
 
  /*let personName = ['eze', 'ayo'];
  
  for (let i = 0; i <= name.length; i++ ){
  currentLine = i;
     katzDeliLine.push(currentLine);
     personName. unshift(name);}
    
   */
   
   
   katzDeliLine.push(name);
   
return ('Welcome, ' +name+ '. You are number ' +katzDeliLine.length+ ' in line.');
  
}
console.log (takeANumber(katzDeliLine, 'Ada'));
console.log(takeANumber (katzDeliLine, 'Grace'));


//katzDeliLine.push(name);
 
function nowServing(katzDeliLine){
  var remove = console.log (katzDeliLine.shift());
  var announce = console.log ('currently serving' + remove);
   
  if (katzDeliLine.length === 0){
    return ('There is nobody waiting to be served!');
    
  }
  else {  console.log (katzDeliLine.shift());
   return announce;
    
  }
  
  //return announce;
  
}
 console.log (nowServing(katzDeliLine));
 
 
 var people = 'The line is currently: ' +katzDeliLine.length + '. ' + katzDeliLine;
 function currentLine(people){
   if (katzDeliLine.length === 0){
     console.log ('The line is currently empty.');
 }
 else{return (console.log(people));
  
 } 
 }





