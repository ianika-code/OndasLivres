// ----------------- HOME -----------------
function homeTemplate() {
  return `
  <section class="home-container">
    <div class="home-imagem">
      <img src="imagens/home.jpg" alt="Cabelos ondulados">
    </div>
    <div class="home-texto">
      <h2>🌊 Ondas Livres: Liberdade para ser você</h2>
      <p>Seja bem-vinda ao Ondas Livres, um espaço criado para celebrar a beleza natural das ondas que dançam nos seus fios — nem lisos, nem cacheados, e muito menos indecisos. Seu cabelo tem identidade, tem movimento, tem força. Ele não precisa se encaixar em padrões, nem ser domado. Ele só precisa ser livre.</p>
      <p>Aqui, acreditamos que cada onda é como o mar: imprevisível, fluida, cheia de vida. Não é “liso armado”, não é “meio termo” — é ondulado com orgulho. É tempo de parar de lutar contra a textura natural e começar a acolher o que é seu por essência.</p>
      <p>✨ Inspire-se com histórias reais<br>🌀 Cuide das suas ondas com leveza<br>🤝 Compartilhe experiências que libertam<br>Deixe suas ondas fluírem. Sem culpa, sem regras, sem rótulos. Porque liberdade também mora nos fios.</p>
    </div>
  </section>
  `;
}

// ----------------- DICAS E CUIDADOS -----------------
function dicasTemplate() {
  return `
  <section class="dicas-container">
    <div class="dicas-imagem">
      <img src="imagens/cuidados.jpg" alt="Dicas para cabelos ondulados">
    </div>
    <div class="dicas-texto">
      <h2>🌿 Dicas e Cuidados</h2>
      <ol>
        <li>Menos é mais: respeite a textura natural
          <ul>
            <li>Evite chapinha ou babyliss em excesso.</li>
            <li>Não tente corrigir o formato natural.</li>
          </ul>
        </li>
        <li>Escolha produtos leves e hidratantes
          <ul>
            <li>Prefira cremes e leave-ins fluidos.</li>
            <li>Aloe vera, óleo de coco e pantenol ajudam.</li>
          </ul>
        </li>
        <li>Finalização consciente
          <ul>
            <li>Técnicas como fitagem leve ou plopping realçam as ondas.</li>
            <li>Evite exagerar na quantidade de produto.</li>
          </ul>
        </li>
        <li>Lavagem gentil
          <ul>
            <li>Shampoos sem sulfato evitam ressecamento.</li>
            <li>Intercale com co-wash se possível.</li>
          </ul>
        </li>
        <li>Secagem natural sempre que possível
          <ul>
            <li>Evite o secador; ar livre ajuda as ondas.</li>
            <li>Se usar difusor, prefira baixa temperatura e movimentos suaves.</li>
          </ul>
        </li>
        <li>Cuide do couro cabeludo
          <ul>
            <li>Massageie durante a lavagem para circulação.</li>
            <li>Evite acúmulo de produtos.</li>
          </ul>
        </li>
        <li>Óleos: seus melhores amigos ondulados
          <ul>
            <li>Óleos vegetais selam a hidratação e dão brilho.</li>
            <li>Prefira argan, jojoba ou semente de uva.</li>
            <li>Use algumas gotas nas pontas ou misture ao creme.</li>
          </ul>
        </li>
      </ol>
      <p>✨ Dica bônus: escute suas ondas. Teste, observe e sinta o que funciona para você!</p>
    </div>
  </section>
  `;
}

// ----------------- PRODUTOS FAVORITOS -----------------
function produtosTemplate() {
  return `
  <section class="produtos-container">
    <div class="produtos-imagem">
      <img src="imagens/produtos.jpg" alt="Produtos favoritos">
    </div>
    <div class="produtos-lista">
      <h2>🛍 Produtos Favoritos</h2>
      <ul>
        <li>Shampoo e Condicionador: L'Oréal Professionnel Serie Expert NutriOil</li>
        <li>Creme de Pentear: Creme para Pentear Definição Siàge Pro Cronology Curvas</li>
        <li>Óleo Reparador: Elseve Óleo Extraordinário</li>
        <li>Acidificante: Acquaflora Acidificante</li>
        <li>Máscara de Tratamento: Máscara Dove 10 em 1 Nutrição + Fusão de Óleos</li>
      </ul>
    </div>
  </section>
  `;
}

// ----------------- CORTES IDEIAS -----------------
function cortesTemplate() {
  return `
  <section class="cortes-container">
    <h2>✂️ Cortes Ideais</h2>
    <div class="grid-cortes">
      <div class="corte-item" onclick="showSubcortes('curto')">
        <img src="imagens/corte1.jpg" alt="Corte Curto">
        <div class="legenda">Curtos</div>
      </div>
      <div class="corte-item" onclick="showSubcortes('medio')">
        <img src="imagens/corte2.jpg" alt="Corte Médio">
        <div class="legenda">Médios</div>
      </div>
      <div class="corte-item" onclick="showSubcortes('longo')">
        <img src="imagens/corte3.jpg" alt="Corte Longo">
        <div class="legenda">Longos</div>
      </div>
    </div>
    <div id="subcortes"></div>
  </section>
  `;
}

// ----------------- SUBCORTES -----------------
function showSubcortes(tipo) {
  const container = document.getElementById('subcortes');
  let html = '';
  if(tipo === 'curto') {
    html = `
    <div class="subcortes">
      <div class="subcorte">
        <img src="imagens/curto1.png" alt="Bob ondulado">
        <div class="subcorte-texto">
          <h3>🌊 Bob ondulado</h3>
          <ul>
            <li>Clássico e versátil, altura do queixo ou abaixo.</li>
            <li>Base reta ou levemente repicada.</li>
          </ul>
        </div>
      </div>
      <div class="subcorte">
        <img src="imagens/curto2.png" alt="Long bob com camadas">
        <div class="subcorte-texto">
          <h3>🌀 Long bob com camadas</h3>
          <ul>
            <li>Mantém um pouco mais de comprimento.</li>
            <li>Camadas dão leveza e movimento.</li>
          </ul>
        </div>
      </div>
      <div class="subcorte">
        <img src="imagens/curto3.png" alt="Pixie ondulado">
        <div class="subcorte-texto">
          <h3>✨ Pixie ondulado</h3>
          <ul>
            <li>Estiloso e ousado, acabamento despojado.</li>
            <li>Topo mais longo destaca textura natural.</li>
          </ul>
        </div>
      </div>
      <div class="subcorte">
        <img src="imagens/curto4.png" alt="Shaggy cut">
        <div class="subcorte-texto">
          <h3>🍃 Shaggy cut</h3>
          <ul>
            <li>Corte repicado, camadas desconectadas.</li>
            <li>Visual bagunçadinho cheio de personalidade.</li>
          </ul>
        </div>
      </div>
    </div>
    `;
  } else if(tipo === 'medio') {
    html = `
    <div class="subcortes">
      <div class="subcorte">
        <img src="imagens/medio1.jpg" alt="Long bob com camadas">
        <div class="subcorte-texto">
          <h3>🌊 Long bob com camadas</h3>
          <ul>
            <li>Clássico moderno, nunca sai de moda.</li>
            <li>Camadas distribuem volume e realçam ondas.</li>
          </ul>
        </div>
      </div>
      <div class="subcorte">
        <img src="imagens/medio2.jpg" alt="Shaggy Médio">
        <div class="subcorte-texto">
          <h3>🌀 Shaggy Médio</h3>
          <ul>
            <li>Corte repicado, camadas desconectadas e franja.</li>
            <li>Visual despojado e cheio de personalidade.</li>
          </ul>
        </div>
      </div>
      <div class="subcorte">
        <img src="imagens/medio3.jpg" alt="Corte em U ou V">
        <div class="subcorte-texto">
          <h3>💫 Corte em U ou V</h3>
          <ul>
            <li>Base nas laterais mantém comprimento e movimento.</li>
            <li>Ideal para fios mais grossos.</li>
          </ul>
        </div>
      </div>
      <div class="subcorte">
        <img src="imagens/medio4.jpg" alt="Camadas suaves com franja">
        <div class="subcorte-texto">
          <h3>🍃 Camadas suaves com franja longa</h3>
          <ul>
            <li>Franja lateral ou longa traz charme e molda rosto.</li>
            <li>Evita efeito pirâmide, visual fluido.</li>
          </ul>
        </div>
      </div>
    </div>
    `;
  } else if(tipo === 'longo') {
    html = `
    <div class="subcortes">
      <div class="subcorte">
        <img src="imagens/longo1.jpg" alt="Corte em U">
        <div class="subcorte-texto">
          <h3>1. Corte em U</h3>
          <ul>
            <li>Caimento arredondado e natural.</li>
            <li>Ótimo para fios grossos.</li>
            <li>Valoriza comprimento e evita efeito chapado.</li>
          </ul>
        </div>
      </div>
      <div class="subcorte">
        <img src="imagens/longo2.jpg" alt="Repiacado com franja">
        <div class="subcorte-texto">
          <h3>2. Repicado com franja longa</h3>
          <ul>
            <li>Textura e movimento, franja molda rosto.</li>
            <li>Visual moderno e despojado.</li>
            <li>Finalizado com ondas soltas.</li>
          </ul>
        </div>
      </div>
      <div class="subcorte">
        <img src="imagens/longo3.jpg" alt="Corte em V">
        <div class="subcorte-texto">
          <h3>🍃 Corte em V</h3>
          <ul>
            <li>Base em V alonga e destaca pontas.</li>
            <li>Ideal para efeito dramático e volumoso.</li>
            <li>Combina com plopping ou difusor.</li>
          </ul>
        </div>
      </div>
    </div>
    `;
  }
  document.getElementById('subcortes').innerHTML = html;
}

// ----------------- CONTATO -----------------
function contatoTemplate() {
  return `
  <section class="contato-container">
    <h2>📬 Contato</h2>
    <p>Email: <a href="mailto:contato@ondaslivres.com">contato@ondaslivres.com</a></p>
    <p>Instagram: <a href="https://www.instagram.com/ondaslivres" target="_blank">@ondaslivres</a></p>
  </section>
  `;
}

// ----------------- ESPAÇO DAS LEITORAS -----------------
function leitorasTemplate() {
  return `
  <section class="leitoras-container">
    <h2>💌 Espaço das Leitoras</h2>
    <textarea placeholder="Compartilhe suas dicas aqui..."></textarea><br>
    <button>Enviar</button>
  </section>
  `;
}
