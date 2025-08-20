import { aleatorio, nome } from './aleatorio.js';
import { perguntas } from './perguntas.js';

const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
const botaoJogarNovamente = document.querySelector(".novamente-btn");
const botaoIniciar = document.querySelector(".iniciar-btn");
const telaInicial = document.querySelector(".tela-inicial");

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

botaoIniciar.addEventListener('click', iniciaJogo);

function iniciaJogo() {
    atual = 0;
    historiaFinal = "";
    telaInicial.style.display = 'none';  // Oculta a tela inicial
    caixaPerguntas.classList.add("mostrar");  // Exibe a caixa de perguntas
    caixaAlternativas.classList.add("mostrar");  // Exibe as alternativas
    caixaResultado.classList.remove("mostrar");  // Garante que o resultado está oculto
    mostraPergunta();
}

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;  // Exibe a pergunta
    caixaAlternativas.textContent = "";  // Limpa as alternativas
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = aleatorio(opcaoSelecionada.afirmacao);
    historiaFinal += afirmacoes + " ";
    if (opcaoSelecionada.proxima !== undefined) {
        atual = opcaoSelecionada.proxima;
    } else {
        mostraResultado();
        return;
    }
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = `Em 2049, ${nome}`;  // Exibe o nome no resultado
    textoResultado.textContent = historiaFinal;  // Exibe o histórico de afirmações
    caixaAlternativas.textContent = "";  // Limpa as alternativas
    caixaResultado.classList.add("mostrar");  // Exibe a caixa de resultado
}

botaoJogarNovamente.addEventListener("click", jogaNovamente);

function jogaNovamente() {
    atual = 0;
    historiaFinal = "";
    caixaResultado.classList.remove("mostrar");  // Oculta a caixa de resultado
    mostraPergunta();
}

function substituiNome() {
    // Substitui o "você" pelo nome nas perguntas
    for (const pergunta of perguntas) {
        pergunta.enunciado = pergunta.enunciado.replace(/você/g, nome);
    }
}

// Chama a função para substituir o nome nas perguntas
substituiNome();
