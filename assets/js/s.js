// Obtém os elementos do DOM
const inputElement = document.querySelector('.inpt');
const metaButton = document.querySelector('.btnt-meta');
const vicioButton = document.querySelector('.btnt-vicio');
const listaMetas = document.querySelector('.listademetas');
const listaVicios = document.querySelector('.listadevicios');

// Carrega as metas e vícios do localStorage (se existirem)
let metasSalvas = JSON.parse(localStorage.getItem('metas')) || [];
let viciosSalvos = JSON.parse(localStorage.getItem('vicios')) || [];

// Função para atualizar a lista de metas
function atualizarListaMetas() {
  listaMetas.innerHTML = '';
  metasSalvas.forEach((meta, index) => {
    const li = criarItemLista(meta, index, 'metas');
    listaMetas.appendChild(li);
  });
}

// Função para atualizar a lista de vícios
function atualizarListaVicios() {
  listaVicios.innerHTML = '';
  viciosSalvos.forEach((vicio, index) => {
    const li = criarItemLista(vicio, index, 'vicios');
    listaVicios.appendChild(li);
  });
}

// Função para criar um item da lista com botão de apagar
function criarItemLista(texto, index, tipo) {
  const li = document.createElement('li');
  li.textContent = texto;
  const btnRemove = document.createElement('button');
  btnRemove.innerHTML = '<span class="icon-cancel-circle"><i class="fa-solid fa-xmark"></i></span>';
  btnRemove.setAttribute('class', 'apagar');
  btnRemove.addEventListener('click', () => {
    if (tipo === 'metas') {
      metasSalvas.splice(index, 1);
      localStorage.setItem('metas', JSON.stringify(metasSalvas));
      atualizarListaMetas();
    } else if (tipo === 'vicios') {
      viciosSalvos.splice(index, 1);
      localStorage.setItem('vicios', JSON.stringify(viciosSalvos));
      atualizarListaVicios();
    }
  });
  li.appendChild(btnRemove);
  return li;
}

// Event listener para o botão de meta
metaButton.addEventListener('click', () => {
  const novaMeta = inputElement.value;
  metasSalvas.push(novaMeta);
  localStorage.setItem('metas', JSON.stringify(metasSalvas));
  atualizarListaMetas();
  inputElement.value = ''; // Limpa o campo de entrada
});

// Event listener para o botão de vício
vicioButton.addEventListener('click', () => {
  const novoVicio = inputElement.value;
  viciosSalvos.push(novoVicio);
  localStorage.setItem('vicios', JSON.stringify(viciosSalvos));
  atualizarListaVicios();
  inputElement.value = ''; // Limpa o campo de entrada
});

// Inicializa as listas
atualizarListaMetas();
atualizarListaVicios();
