document.addEventListener('DOMContentLoaded',function(){

var keys=document.querySelectorAll('#calculator span');

for(var i=0;i<keys.length;i++){
  keys[i].onclick=function(e){

    var input=document.querySelector('.screen');
    var inputVal=input.innerHTML;
   console.log(inputVal)
    var btnVal=this.innerHTML;

    if(btnVal=='C'){
      input.innerHTML='';

    }
    else{
      input.innerHTML+=btnVal;
    }
    if(btnVal=='='){
      var equation=inputVal;
      equation=equation.replace(/x/g,'*');

      if(equation){
      input.innerHTML=eval(equation);
    decimalAdded=false;
    }

    else if(operators.indexOf(btnVal)>-1){
      var lastChar=inputVal[inputVal.length-1];

      if(inputVal!="" && operators.indexOf(lastChar)==-1){
              input.innerHTML+=btnVal;
      }
      
      if(operators.indexOf(lastChar)>-1 && inputVallength >1){
        input.innerHTML=inputVal.replace(/.$/,btnVal);
      }
     
    }
    else if(btnVal=="."){
      if(!decimalAdded){
        input.innerHTML+=btnVal;
        decimalAdded=true;
      }
    }
else{
  input.innerHTML+=btnVal;
}
      
   } 
  
}
}
})