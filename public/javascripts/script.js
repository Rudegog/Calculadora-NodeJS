document.getElementById("myInput").oninvalid = function() {myFunction()};

function myFunction() {
  alert("Você precisa completar as perguntinhas.");
}

document.querySelector("myInput").addEventListener("input", function(){
   
 const go = document.querySelector("email");
  
  go.disabled = this.value.length >= 3 ? false : true;
  
});

function IsEmail(email){
  var exclude=/[^@-.w]|^[_@.-]|[._-]{2}|[@.]{2}|(@)[^@]*1/;
  var check=/@[w-]+./;
  var checkend=/.[a-zA-Z]{2,3}$/;
  if(((email.search(exclude) != -1)||(email.search(check)) == -1)||(email.search(checkend) == -1)){return false;}
  else {return true;}
}