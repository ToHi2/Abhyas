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
 }