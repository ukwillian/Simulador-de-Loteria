const CURSOS = [
  { titulo: "Informática Básica", area: "Fundamentos", nivel: "Iniciante", provedor: "Prime Cursos", url: "https://www.primecursos.com.br/informatica-basica/?utm_source=google&utm_medium=cpc&utm_campaign=%5BMAC4%5D+%5BSearch%5D+-+Campanha+DSA&utm_content=491099101192&utm_term=&gad_source=1&gad_campaignid=676626876&gclid=Cj0KCQjw_L_FBhDmARIsAItqgt4GKQEvM_1YedtcSAAPh0HabJ5Do4OL4wVylswVwmmneF8vnBDTktQaAvlOEALw_wcB", cargaHoraria: "40h", descricao: "Introdução ao uso do computador, sistemas e internet." },
  { titulo: "Lógica de Programação", area: "Programação", nivel: "Iniciante", provedor: "Prime Cursos", url: "https://www.primecursos.com.br/logica-de-programacao-basica", cargaHoraria: "40h", descricao: "Conceitos de lógica, algoritmos, fluxogramas e pseudocódigo." },
  { titulo: "Introdução à Programação com Python", area: "Programação", nivel: "Iniciante", provedor: "Prime Cursos", url: "https://www.primecursos.com.br/programacao-em-python", cargaHoraria: "50h", descricao: "Noções básicas da linguagem Python e pensamento computacional." },
  { titulo: "Desenvolvimento Web: HTML5 e CSS3", area: "Desenvolvimento Web", nivel: "Iniciante", provedor: "Cursos em Video", url: "https://www.cursoemvideo.com/curso/html5-css3-modulo1", cargaHoraria: "40h", descricao: "Conceitos essenciais que sustentam a criação de sites modernos e bem estruturados." },
  { titulo: "Introdução ao Git e GitHub", area: "Ferramentas", nivel: "Iniciante", provedor: "Coursera", url: "https://www.coursera.org/learn/introduction-git-github?utm_source=chatgpt.com#reviews", cargaHoraria: "18h", descricao: "Versionamento de código, branching e colaboração." },
  { titulo: "JavaScript para Iniciantes", area: "Programação", nivel: "Iniciante", provedor: "Trybe", url: "https://www.betrybe.com/curso-de-programacao-javascript-do-zero", cargaHoraria: "10h", descricao: "Fundamentos da linguagem, DOM e práticas modernas." },
  { titulo: "Introdução à Ciência da Computação (CS50x)", area: "Fundamentos", nivel: "Intermediário", provedor: "Estudar Fora / Harvard", url: "https://www.estudarfora.org.br/cc50-v2", cargaHoraria: "25h", descricao: "Algoritmos, estruturas de dados, C, Python e web." },
  { titulo: "SQL - Structured Query Language", area: "Dados", nivel: "Iniciante", provedor: "FGV Educação Executiva", url: "https://educacao-executiva.fgv.br/cursos/online/curta-media-duracao-online/sql-structured-query-language?utm_source=chatgpt.com", cargaHoraria: "24h", descricao: "Consultas SQL, junções e modelagem básica." },
  { titulo: "Introdução à Segurança da Informação", area: "Segurança", nivel: "Iniciante", provedor: "Fundação Bradesco", url: "https://www.ev.org.br/cursos/seguranca-em-tecnologia-da-informacao", cargaHoraria: "12h", descricao: "Boas práticas, senhas, phishing e privacidade." },
  { titulo: "Desenvolvimento de Sistemas Web: CSS e HTML", area: "Desenvolvimento Web", nivel: "Intermediário", provedor: "FGV Educação Executiva", url: "https://educacao-executiva.fgv.br/cursos/online/curta-media-duracao-online/desenvolvimento-de-sistemas-web-css-e-html", cargaHoraria: "15h", descricao: "Introdução dos conceitos essenciais para a criação de páginas web utilizando HTML e CSS." },
  { titulo: "Python Intermediário", area: "Programação", nivel: "Intermediário", provedor: "Datacamp", url: "https://www.datacamp.com/pt/courses/intermediate-python?utm_source=chatgpt.com", cargaHoraria: "25h", descricao: "Coleções, módulos, arquivos e libs populares." },
  { titulo: "O papel do DevOps na Transformação Digital dos Serviços Públicos", area: "Ferramentas", nivel: "Iniciante", provedor: "EVB / ENAP", url: "https://www.escolavirtual.gov.br/curso/366", cargaHoraria: "20h", descricao: "informações gerais sobre o que é a metodologia DevOps, como integrar serviços de software a infraestrutura de TI fomentando entregas rápidas e com qualidade, por meio da comunicação digital, a fim de alavancar a Transformação Digital dos serviços públicos. " },
  { titulo: "Introdução à Ciência de Dados", area: "Dados", nivel: "Iniciante", provedor: "FGV Educação Executiva", url: "https://educacao-executiva.fgv.br/cursos/online/curta-media-duracao-online/introducao-ciencia-de-dados", cargaHoraria: "60h", descricao: "Conceitos de dados, aprendizado de máquina e ética." },
  { titulo: "eMAG Desenvolvedor", area: "Desenvolvimento Web", nivel: "Intermediário", provedor: "EVB / ENAP", url: "https://www.escolavirtual.gov.br/curso/42", cargaHoraria: "30h", descricao: "Princípios e boas práticas de acessibilidade." },
  { titulo: "Desenvolvendo um Projeto Completo Python com Estruturas de Dados", area: "Programação", nivel: "Avançado", provedor: "Fundação Bradesco", url: "https://www.ev.org.br/cursos/Desenvolvendo-um-Projeto-Completo-Python-com-Estruturas-de-Dados", cargaHoraria: "10h", descricao: "Linguagem de consulta SQL, a importância do modelo Entidade Relacionamento na estrutura de um banco de dados." },
  { titulo: "Noções de Redes de Computadores", area: "Fundamentos", nivel: "Intermediário", provedor: "Prime Cursos", url: "https://www.primecursos.com.br/redes-de-computadores", cargaHoraria: "50h", descricao: "Modelo OSI, TCP/IP, roteamento e segurança básica." }
];

// Trilha recomendada
const TRILHA = [
  "Informática Básica",
  "Lógica de Programação",
  "Desenvolvimento Web: HTML5 e CSS3",
  "Introdução ao Git e GitHub",
  "Introdução à Programação com Python",
  "JavaScript para Iniciantes",
  "SQL - Structured Query Language",
  "Introdução à Segurança da Informação"
];

// Popula áreas dinamicamente
function preencherAreas() {
  const areas = Array.from(new Set(CURSOS.map(c => c.area))).sort();
  const sel = document.getElementById('area');
  areas.forEach(a => {
    const o = document.createElement('option');
    o.value = a;
    o.textContent = a;
    sel.appendChild(o);
  });
}

// Renderiza cartões de cursos
function renderCursos(filtro = {}) {
  const wrap = document.getElementById('courses');
  wrap.innerHTML = '';
  const termo = (filtro.termo || '').toLowerCase();
  const area = filtro.area || '';
  const nivel = filtro.nivel || '';

  const filtrados = CURSOS.filter(c => {
    const matchTermo = !termo ||
      c.titulo.toLowerCase().includes(termo) ||
      c.descricao.toLowerCase().includes(termo) ||
      c.provedor.toLowerCase().includes(termo) ||
      c.area.toLowerCase().includes(termo);
    const matchArea = !area || c.area === area;
    const matchNivel = !nivel || c.nivel === nivel;
    return matchTermo && matchArea && matchNivel;
  });

  document.getElementById('countInfo').textContent = `${filtrados.length} curso(s) encontrados`;

  filtrados.forEach(c => {
    const col = document.createElement('div');
    col.className = 'col-12 col-md-6 col-lg-4';
    col.innerHTML = `
      <div class="card card-course h-100 border-0 shadow-sm">
        <div class="card-body d-flex flex-column">
          <div class="d-flex gap-2 align-items-center mb-2">
            <span class="tag">${c.area}</span>
            <span class="badge text-bg-secondary level-badge">${c.nivel}</span>
          </div>
          <h3 class="h6">${c.titulo}</h3>
          <p class="text-body-secondary flex-grow-1 mb-2">${c.descricao}</p>
          <div class="d-flex justify-content-between align-items-center small">
            <span class="text-body-secondary">${c.provedor} · ${c.cargaHoraria}</span>
            <a class="btn btn-sm btn-primary" href="${c.url}" target="_blank" rel="noopener">Acessar</a>
          </div>
        </div>
      </div>`;
    wrap.appendChild(col);
  });
}

// Renderiza trilha
function renderTrilha() {
  const ul = document.getElementById('trilha');
  ul.innerHTML = '';
  TRILHA.forEach(titulo => {
    const c = CURSOS.find(x => x.titulo === titulo);
    const li = document.createElement('li');
    li.className = 'list-group-item d-flex justify-content-between align-items-start';
    if (c) {
      li.innerHTML = `
        <div class="ms-2 me-auto">
          <div class="fw-semibold">${c.titulo}</div>
          <span class="text-body-secondary">${c.area} · ${c.nivel} · ${c.provedor}</span>
        </div>
        <a class="btn btn-sm btn-outline-primary" target="_blank" rel="noopener" href="${c.url}">Ir ao curso</a>`;
    } else {
      li.textContent = titulo;
    }
    ul.appendChild(li);
  });
}

// Modo escuro/claro
function aplicarTema(theme) {
  document.documentElement.setAttribute('data-bs-theme', theme);
  localStorage.setItem('educacode-theme', theme);
  document.getElementById('themeLabel').textContent = theme === 'dark' ? 'Modo claro' : 'Modo escuro';
}

function alternarTema() {
  const atual = document.documentElement.getAttribute('data-bs-theme') || 'light';
  aplicarTema(atual === 'light' ? 'dark' : 'light');
}

// ==========================
// Inicialização
// ==========================
window.addEventListener('DOMContentLoaded', () => {
  // Tema salvo
  const saved = localStorage.getItem('educacode-theme');
  if (saved) aplicarTema(saved);

  preencherAreas();
  renderCursos();
  renderTrilha();

  document.getElementById('toggleTheme').addEventListener('click', alternarTema);
  const filtro = { termo: '', area: '', nivel: '' };

  document.getElementById('search').addEventListener('input', e => {
    filtro.termo = e.target.value;
    renderCursos(filtro);
  });
  document.getElementById('area').addEventListener('change', e => {
    filtro.area = e.target.value;
    renderCursos(filtro);
  });
  document.getElementById('nivel').addEventListener('change', e => {
    filtro.nivel = e.target.value;
    renderCursos(filtro);
  });

  // Atalho de teclado: / ou Ctrl+K para focar a busca
  window.addEventListener('keydown', (e) => {
    if ((e.key === '/' && document.activeElement !== document.getElementById('search')) || (e.ctrlKey && e.key.toLowerCase() === 'k')) {
      e.preventDefault();
      document.getElementById('search').focus();
    }
  });
});
