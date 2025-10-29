// main.js

function loadPage(page) {
  const main = document.querySelector('main');
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
      break;
    default:
      main.innerHTML = homeTemplate();
  }
}

window.addEventListener('DOMContentLoaded', () => loadPage('home'));
