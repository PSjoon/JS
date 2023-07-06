function verificaForm(){
  if(document.getElementById("nome").value == ""){
	alert("Preencha o nome");
    return false;
  }
  return true;
}