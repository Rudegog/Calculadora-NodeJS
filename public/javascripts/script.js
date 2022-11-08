// document.getElementById("myInput").oninvalid = function() {myFunction()};

// function myFunction() {
//   alert("Você precisa completar as perguntinhas.");
// }

document.getElementById("submit").disabled = true;
document.getElementById("input").addEventListener("input", function(event){

  //busca conteúdo do input
    const conteudo = document.getElementById("input").value;

    //valida conteudo do input 
    if (conteudo !== null && conteudo !== '') {
      //habilita o botão
      document.getElementById("submit").disabled = false;
    } else {
      //desabilita o botão se o conteúdo do input ficar em branco
      document.getElementById("submit").disabled = true;
    }
});



// function myInput(myInput){
//   const exclude=/[^@-.w]|^[_@.-]|[._-]{2}|[@.]{2}|(@)[^@]*1/;
//   const check=/@[w-]+./;
//   const checkend=/.[a-zA-Z]{2,3}$/;
//   if(((myInput.search(exclude) != -1)||(myInput.search(check)) == -1)||(myInput.search(checkend) == -1)){return false;}
//   else {return true;}
// }