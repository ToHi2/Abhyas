function tickSelf(id) {
  document.getElementById(id).innerHTML="[✓]";
}
function tickSlef(id) {
  document.getElementById(id).innerHTML="[&nbsp]";
}
function saveFunc(){
 localStorage.saveList= document.getElementById('sigma').innerHTML;
}
function loadFunc(){ 
   var n = localStorage.saveList; 
    if( n != null && n != undefined && n != NaN){ 
      document.getElementById("sigma").innerHTML = localStorage.saveList; 
    } 
 function dayStreak(){
   var date = new Date();
   var day = date.getDate();
   if(localStorage.dateStor != day){
    numMod('day',1,'add');
   }
 }
 function numMod(id, val, type) { 
   switch (type) { 
     case "add": 
       document.getElementById(id).innerHTML = parseInt(document.getElementById(id).innerHTML) + val; 
       break; 
     case "sub": 
       document.getElementById(id).innerHTML = parseInt(document.getElementById(id).innerHTML) - val; 
       break; 
   } 
       }
 }
