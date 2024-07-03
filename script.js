const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "eu quero ser jogador de futebol",
        alternativas: [
            {
                texto: "se você consegue!",
                afirmacao: "eu ganho muito dinheiro"
            },
            {
                texto: "se você não consegue!",
                afirmacao: "eu volto a morar debaixo a ponte"
            }
        ]
    },
    {
        enunciado: "eu quero ser jogador de vôlei",
        alternativas: [
            {
                texto: "se você consegue",
                afirmacao: "eu ganho fama na minha cidade"
            },
            {
                texto: "se eu não consigo",
                afirmacao: "coninuo desconhecido na cidade e pobre"
            }
        ]
    },
    {
        enunciado: "meu sonho é paticipar o mater cheff",
        alternativas: [
            {
                texto: "se você consegue",
                afirmacao: "você realiza seu sonho"
            },
            {
                texto: "se você não consegue",
                afirmacao: "eu insisto mais anos no meu sonho"
            }
        ]
    },
    {
        enunciado: "eu arrumo briga num jogo de futebol com meu amigos",
        alternativas: [
            {
                texto: "a gente apanha e fica quieto",
                afirmacao: "vamos embora com o rabo entre as pernas"
            },
            {
                texto: "batemos no cara e vamo embora a pé",
                afirmacao: "depois eles vem e bate na gente"
            }
        ]
    },
    {
        enunciado: "meu sonho é ter filho",
        alternativas: [
            {
                texto: "faço um filho com 17 anos",
                afirmacao: "meu pai me manda embora de casa"
            },
            {
                texto: "faço um filho quando ja estiver bem financeiramente",
                afirmacao: "meu pai fica feliz por virar vô"
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
