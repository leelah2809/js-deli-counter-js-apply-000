function takeANumber(currentLine, name){
  let katzDeliLine = [];
  let i = 0;
   while ( i < 2){
     katzDeliLine.push(currentLine);
     currentLine = i+1;
   }
return ('welcome, ${name}. You are number ${currentLine} in line.');
  
}

 takeANumber(katzDeliLine, 'Ada');