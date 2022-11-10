document.getElementById("submit").oninvalid = function () { myFunction() };
function myFunction() {
  alert("Você precisa completar as perguntinhas.");
}

//VOU MELHORAR ESTE CÓDIGO

// document.getElementById("submit").disabled = true;
// document.getElementById("myInput").addEventListener("myInput", function (event) {
//   const conteudo = document.getElementById("myInput").value;
//   if (conteudo !== null && conteudo !== '') {
//     document.getElementById("submit").disabled = false;
//   } else {
//     document.getElementById("submit").disabled = true;
//   }
// });
