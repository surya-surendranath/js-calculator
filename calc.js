document.addEventListener('DOMContentLoaded',function(){

var button=document.querySelectorAll('#jscalc span');

for(var i=0;i<button.length;i++){
  button[i].onclick=function(e){

    var display=document.querySelector('.monitor');
    var displayVal=display.innerHTML;
   console.log(displayVal)
    var CurrentVal=this.innerHTML;

    if(CurrentVal=='C'){
      display.innerHTML='';

    }
    else{
      display.innerHTML+=CurrentVal;
    }
    if(CurrentVal=='='){
      var equation=displayVal;
      equation=equation.replace(/x/g,'*');

      if(equation){
      display.innerHTML=eval(equation);
    decimalAdded=false;
    }

  
    else if(CurrentVal=="."){
      if(!decimalAdded){
        display.innerHTML+=CurrentVal;
        decimalAdded=true;
      }
    }
else{
 display.innerHTML+=CurrentVal;
}
      
   } 
  
}
}
})