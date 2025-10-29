function loadPage(page) {
  const main = document.querySelector("main");
  switch(page) {
    case 'home':
      main.innerHTML = homeTemplate();
      break;
    case 'dicas':
      main.innerHTML = dicasTemplate();
      break;
    case 'produtos':
      main.innerHTML = produtosTemplate();
      break;
    case 'cortes':
      main.innerHTML = cortesTemplate();
      break;
    case 'contato':
      main.innerHTML = contatoTemplate();
      break;
    case 'leitoras':
      main.innerHTML = leitorasTemplate();
      carregarLeitoras();
      break;
    default:
      main.innerHTML = homeTemplate();
  }
}

// Função para abrir cortes clicáveis
function mostrarCorte(tipo) {
  const main = document.querySelector("main");
  if(tipo === "longo") main.innerHTML = corteLongoTemplate();
  if(tipo === "medio") main.innerHTML = corteMedioTemplate();
  if(tipo === "curto") main.innerHTML = corteCurtoTemplate();
}
