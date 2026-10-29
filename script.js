"use strict";

// UNO DISSERTATIVO ARGUMENTATIVO — ENEM

const $ = id => document.getElementById(id);

const COLORS = ["red", "blue", "green", "yellow"];

const COLOR_NAMES = {
  red: "Vermelho",
  blue: "Azul",
  green: "Verde",
  yellow: "Amarelo"
};

const TIPS = {
  red: {
    title: "Introdução e contextualização",
    text: "Apresente o tema, contextualize o problema e exponha sua tese."
  },
  blue: {
    title: "Tese e ponto de vista",
    text: "Defenda um posicionamento claro e antecipe os argumentos que serão desenvolvidos."
  },
  green: {
    title: "Argumentação e repertório",
    text: "Use exemplos, dados e referências pertinentes, explicando como sustentam sua tese."
  },
  yellow: {
    title: "Conclusão e intervenção",
    text: "Proponha uma intervenção viável, com agente, ação, meio, finalidade e detalhamento."
  }
};

const QUESTIONS = [
  {
    category: "Competência 1",
    question: "Qual atitude demonstra domínio da escrita formal?",
    options: [
      "Usar gírias em todo o texto.",
      "Revisar ortografia, pontuação e concordância.",
      "Eliminar os conectivos.",
      "Ignorar a estrutura das frases."
    ],
    answer: 1,
    explanation: "A Competência 1 avalia o domínio da modalidade escrita formal da língua portuguesa."
  },
  {
    category: "Competência 2",
    question: "Qual é a função da tese?",
    options: [
      "Apresentar o título.",
      "Substituir todos os argumentos.",
      "Apresentar o posicionamento central defendido.",
      "Contar uma história sem relação com o tema."
    ],
    answer: 2,
    explanation: "A tese apresenta o ponto de vista que será defendido ao longo do texto."
  },
  {
    category: "Competência 3",
    question: "O que fortalece a argumentação?",
    options: [
      "Repetir a mesma frase.",
      "Apresentar argumentos pertinentes e explicá-los.",
      "Acumular citações sem comentários.",
      "Mudar de opinião sem justificativa."
    ],
    answer: 1,
    explanation: "É importante selecionar, organizar e interpretar informações em defesa de um ponto de vista."
  },
  {
    category: "Competência 4",
    question: "Qual é a função dos conectivos?",
    options: [
      "Substituir os argumentos.",
      "Aumentar o texto sem acrescentar sentido.",
      "Estabelecer relações entre ideias.",
      "Garantir nota máxima automaticamente."
    ],
    answer: 2,
    explanation: "Os mecanismos de coesão conectam frases e parágrafos e ajudam a organizar o raciocínio."
  },
  {
    category: "Competência 5",
    question: "O que caracteriza uma boa proposta de intervenção?",
    options: [
      "Uma solução vaga.",
      "Uma punição para qualquer grupo.",
      "A repetição da introdução.",
      "Uma ação viável, com agente, meio e finalidade."
    ],
    answer: 3,
    explanation: "A proposta deve estar relacionada ao problema e respeitar os direitos humanos."
  },
  {
    category: "Repertório sociocultural",
    question: "Quando uma referência sociocultural é produtiva?",
    options: [
      "Quando é famosa, mesmo sem relação com o tema.",
      "Quando ajuda a fundamentar a argumentação.",
      "Quando substitui a tese.",
      "Quando ocupa espaço sem explicação."
    ],
    answer: 1,
    explanation: "O repertório deve ser pertinente ao tema e integrado ao raciocínio desenvolvido."
  },
  {
    category: "Introdução",
    question: "Qual estrutura funciona bem em uma introdução?",
    options: [
      "Assinatura e bibliografia.",
      "Exemplos sem explicação.",
      "Contextualização, apresentação do tema e tese.",
      "Solução sem apresentação do problema."
    ],
    answer: 2,
    explanation: "A introdução conduz ao tema e apresenta o posicionamento que orientará a redação."
  },
  {
    category: "Argumentação",
    question: "Por que explicar um dado estatístico citado?",
    options: [
      "Porque qualquer dado prova qualquer tese.",
      "Para relacioná-lo ao argumento defendido.",
      "Para dispensar a conclusão.",
      "Para substituir a contextualização."
    ],
    answer: 1,
    explanation: "Interpretar os dados mostra sua relevância para a tese."
  },
  {
    category: "Coesão",
    question: "Qual conectivo indica oposição?",
    options: ["Portanto", "Além disso", "Entretanto", "Consequentemente"],
    answer: 2,
    explanation: "'Entretanto' indica contraste ou oposição entre ideias."
  },
  {
    category: "Falácias",
    question: "O que é um argumento ad hominem?",
    options: [
      "Analisar uma evidência.",
      "Atacar a pessoa em vez de discutir seu argumento.",
      "Comparar duas políticas públicas.",
      "Apresentar uma relação causal."
    ],
    answer: 1,
    explanation: "O ataque pessoal desvia a discussão da validade do argumento."
  },
  {
    category: "Intervenção",
    question: "Quem é o agente de uma proposta de intervenção?",
    options: [
      "O responsável por executar a ação.",
      "O título da redação.",
      "O tema principal.",
      "A quantidade de parágrafos."
    ],
    answer: 0,
    explanation: "O agente pode ser, por exemplo, uma instituição pública responsável pela medida."
  },
  {
    category: "Desenvolvimento",
    question: "Qual é a função do desenvolvimento?",
    options: [
      "Repetir literalmente a introdução.",
      "Explicar argumentos que sustentam a tese.",
      "Mudar de tema.",
      "Eliminar a conclusão."
    ],
    answer: 1,
    explanation: "Os parágrafos de desenvolvimento aprofundam e justificam o posicionamento."
  },
  {
    category: "Direitos humanos",
    question: "Qual proposta é mais adequada ao ENEM?",
    options: [
      "Retirar direitos de um grupo.",
      "Culpabilizar todas as pessoas afetadas.",
      "Promover uma ação viável que respeite a dignidade humana.",
      "Defender a violência como solução."
    ],
    answer: 2,
    explanation: "A proposta de intervenção deve respeitar os direitos humanos."
  },
  {
    category: "Gênero textual",
    question: "Qual é a característica do texto dissertativo-argumentativo?",
    options: [
      "Defender um ponto de vista por meio de argumentos.",
      "Apresentar apenas diálogos.",
      "Listar palavras sem conexão.",
      "Relatar somente acontecimentos."
    ],
    answer: 0,
    explanation: "O gênero apresenta uma tese sustentada por argumentos organizados."
  },
  {
    category: "Causa e consequência",
    question: "Qual frase expressa causa e consequência?",
    options: [
      "O problema existe; por outro lado, há soluções.",
      "A falta de informação dificulta a prevenção; consequentemente, os riscos podem aumentar.",
      "Em primeiro lugar, a escola.",
      "Embora existam desafios, entretanto."
    ],
    answer: 1,
    explanation: "A frase relaciona uma condição a um possível resultado."
  },
  {
    category: "Tese",
    question: "Qual tese é mais específica para o tema evasão escolar?",
    options: [
      "A escola é importante.",
      "A evasão escolar existe.",
      "Combater a evasão exige políticas de permanência e enfrentamento da desigualdade.",
      "Muitas pessoas estudam."
    ],
    answer: 2,
    explanation: "Uma tese consistente apresenta um posicionamento específico e orienta os argumentos."
  },
  {
    category: "Repertório",
    question: "Como usar uma lei como repertório?",
    options: [
      "Mencioná-la sem relação com o tema.",
      "Usá-la como decoração.",
      "Relacionar seus princípios ao problema discutido.",
      "Substituir todos os argumentos pela lei."
    ],
    answer: 2,
    explanation: "A referência legal deve ajudar a analisar o problema e sustentar a discussão."
  },
  {
    category: "Coerência",
    question: "O que prejudica a coerência?",
    options: [
      "Desenvolver a tese com argumentos relacionados.",
      "Apresentar contradições sem explicação.",
      "Usar exemplos pertinentes.",
      "Concluir com base no desenvolvimento."
    ],
    answer: 1,
    explanation: "A coerência exige uma relação lógica entre as ideias apresentadas."
  },
  {
    category: "Intervenção",
    question: "Qual elemento explica como uma ação será realizada?",
    options: [
      "O meio ou modo de execução.",
      "O título.",
      "A contextualização.",
      "A referência histórica."
    ],
    answer: 0,
    explanation: "O meio ou modo apresenta como a ação proposta será colocada em prática."
  },
  {
    category: "Argumentação",
    question: "Como evitar generalizações indevidas?",
    options: [
      "Tratar um caso isolado como regra universal.",
      "Usar afirmações absolutas sem evidências.",
      "Considerar evidências, limites e contexto.",
      "Ignorar dados contrários."
    ],
    answer: 2,
    explanation: "Uma argumentação rigorosa considera os limites das evidências antes de chegar a conclusões."
  }
];

const state = {
  deck: [],
  discard: [],
  player: [],
  computer: [],
  activeColor: null,
  current: "player",
  round: 1,
  playerScore: 0,
  computerScore: 0,
  busy: false,
  gameOver: false,
  mustCallUno: false,
  unoCalled: false,
  questionPool: [],
  lastQuestion: -1,
  timer: null
};

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function createDeck() {
  const deck = [];
  let id = 0;

  for (const color of COLORS) {
    deck.push({ id: id++, color, value: "0", type: "number" });

    for (let n = 1; n <= 9; n++) {
      for (let copy = 0; copy < 2; copy++) {
        deck.push({
          id: id++,
          color,
          value: String(n),
          type: "number"
        });
      }
    }

    for (const value of ["skip", "reverse", "draw2"]) {
      for (let copy = 0; copy < 2; copy++) {
        deck.push({ id: id++, color, value, type: "action" });
      }
    }
  }

  for (let i = 0; i < 4; i++) {
    deck.push({ id: id++, color: "wild", value: "wild", type: "wild" });
    deck.push({ id: id++, color: "wild", value: "wild4", type: "wild" });
  }

  return shuffle(deck);
}

function createQuestionPool() {
  return shuffle(QUESTIONS.map((_, i) => i));
}

function getQuestion() {
  if (!state.questionPool.length) {
    state.questionPool = createQuestionPool();
  }

  let index = state.questionPool.pop();

  if (QUESTIONS.length > 1 && index === state.lastQuestion) {
    state.questionPool.unshift(index);
    index = state.questionPool.pop();
  }

  state.lastQuestion = index;
  return QUESTIONS[index];
}

function topCard() {
  return state.discard[state.discard.length - 1];
}

function refillDeck() {
  if (state.deck.length) return true;
  if (state.discard.length <= 1) return false;

  const top = state.discard.pop();
  state.deck = shuffle(state.discard);
  state.discard = [top];

  return state.deck.length > 0;
}

function drawCards(hand, amount) {
  let count = 0;

  for (let i = 0; i < amount; i++) {
    if (!refillDeck()) break;
    hand.push(state.deck.pop());
    count++;
  }

  return count;
}

function isPlayable(card) {
  const top = topCard();

  return card.color === "wild" ||
    card.color === state.activeColor ||
    card.value === top.value;
}

function cardSymbol(card) {
  const symbols = {
    skip: "⊘",
    reverse: "⇄",
    draw2: "+2",
    wild: "✦",
    wild4: "+4"
  };

  return symbols[card.value] ?? card.value;
}

function cardName(card) {
  const names = {
    skip: "Bloqueio",
    reverse: "Inverter",
    draw2: "+2",
    wild: "Coringa",
    wild4: "Coringa +4"
  };

  return names[card.value] ?? card.value;
}

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, char => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  })[char]);
}

function makeCardElement(card, playable = false, hidden = false) {
  const element = document.createElement("button");
  element.type = "button";

  if (hidden) {
    element.className = "card card-back";
    element.disabled = true;
    element.setAttribute("aria-label", "Carta escondida");
    element.innerHTML = '<span class="back-logo">UNO</span>';
    return element;
  }

  element.className = `card card-face ${card.color}`;
  element.disabled = !playable;
  element.setAttribute(
    "aria-label",
    `${COLOR_NAMES[card.color] || "Coringa"} ${cardName(card)}`
  );

  element.innerHTML = `
    <span class="card-corner">${escapeHTML(cardName(card))}</span>
    <span class="card-symbol">${escapeHTML(cardSymbol(card))}</span>
    <span class="card-corner bottom">${escapeHTML(cardName(card))}</span>
  `;

  return element;
}

function render() {
  $("player-score").textContent = state.playerScore;
  $("computer-score").textContent = state.computerScore;

  $("player-count").textContent =
    `${state.player.length} ${state.player.length === 1 ? "carta" : "cartas"}`;

  $("computer-count").textContent =
    `${state.computer.length} ${state.computer.length === 1 ? "carta" : "cartas"}`;

  $("deck-count").textContent = `${state.deck.length} no monte`;

  $("active-color-label").textContent =
    `Cor ativa: ${COLOR_NAMES[state.activeColor] || "—"}`;

  $("turn-label").textContent = state.gameOver
    ? "Partida encerrada"
    : state.current === "player" ? "Sua vez" : "Vez do RedaBot";

  $("round-label").textContent = `Rodada ${state.round}`;

  $("draw-button
