function validarFormulario() {
  const nome = document.querySelector("#nome").value.trim();
  const email = document.querySelector("#email").value.trim();
  if(nome === "" || !email.includes("@")) {
    alert("Preencha corretamente os campos Nome e E-mail.");
    return false;
  }
  alert("Mensagem enviada com sucesso!");
  return true;
}
