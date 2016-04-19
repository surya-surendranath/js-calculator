
var keys=document.querySelectorAll('#calculator span');

for(var i=0;i<keys.length;i++){
  keys[i].onclick=function(e){

    var input=document.querySelector('.screen');
    var inputVal=input.innerHTML;
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

      if(equation)
      input.innerHTML=eval(equation);
    }
  }
}