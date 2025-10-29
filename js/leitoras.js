document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#formLeitora");
  if(form) {
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      const nome = document.querySelector("#nomeLeitora").value;
      const comentario = document.querySelector("#comentarioLeitora").value;
      salvarLeitora(nome, comentario);
      form.reset();
      carregarLeitoras();
    });
  }
});

function salvarLeitora(nome, comentario) {
  let leitoras = JSON.parse(localStorage.getItem("leitoras")) || [];
  leitoras.push({nome, comentario});
  localStorage.setItem("leitoras", JSON.stringify(leitoras));
}

function carregarLeitoras() {
  const container = document.querySelector("#comentarios");
  const leitoras = JSON.parse(localStorage.getItem("leitoras")) || [];
  container.innerHTML = "";
  leitoras.forEach(l => {
    const div = document.createElement("div");
    div.classList.add("comentario");
    div.innerHTML = `<strong>${l.nome}</strong><p>${l.comentario}</p>`;
    container.appendChild(div);
  });
}
