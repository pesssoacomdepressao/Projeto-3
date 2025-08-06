const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
const botaoProximo = document.querySelector(".botao-proximo");

const perguntas = [
    {
        enunciado: "Em uma tumba ancestral, você encontra um amuleto pulsando com energia misteriosa. Uma inscrição diz: 'A vida eterna é sua, mas o preço será pago em dores eternas'. O que você faz?",
        alternativas: [
            {
                texto: "Tocar o amuleto e aceitar seu poder, não importa o custo",
                consequencia: "Uma dor excruciante percorre seu corpo enquanto você sente a mortalidade deixando seu ser. Você percebe que nunca mais poderá morrer... ou descansar."
            },
            {
                texto: "Estudar o amuleto antes de tomar qualquer decisão",
                consequencia: "Sua cautela revela que o amuleto foi amaldiçoado por um feiticeiro antigo. A imortalidade vem com uma maldição terrível."
            }
        ]
    },
    {
        enunciado: "Anos se passaram desde que você se tornou imortal. Seus entes queridos envelhecem e morrem enquanto você permanece. Como você lida com isso?",
        alternativas: [
            {
                texto: "Se isolar para não sofrer novas perdas",
                consequencia: "A solidão se torna sua única companheira. Séculos passam e você esquece até mesmo o som de sua própria voz."
            },
            {
                texto: "Continuar formando novos laços, apesar da dor",
                consequencia: "Cada nova conexão é um convite para novo sofrimento. Você se torna um contador de histórias, lembrando aqueles que se foram."
            }
        ]
    },
    {
        enunciado: "Após 300 anos, a humanidade desenvolve a cura para sua maldição. O que você faz?",
        alternativas: [
            {
                texto: "Manter a imortalidade, pois agora é parte de quem você é",
                consequencia: "Você testemunha civilizações surgindo e caindo, tornando-se cada vez mais distante da humanidade que um dia conheceu."
            },
            {
                texto: "Aceitar a cura e finalmente descansar",
                consequencia: "O peso dos séculos finalmente é levantado. Seu último suspiro é de paz, sabendo que sua jornada chegou ao fim."
            }
        ]
    },
    {
        enunciado: "Um jovem cientista descobre seu segredo e pede para compartilhar sua imortalidade. O que você faz?",
        alternativas: [
            {
                texto: "Avisá-lo sobre o verdadeiro preço da vida eterna",
                consequencia: "Ele não acredita em você. Anos depois, você o encontra novamente - um homem quebrado, arrependido de sua escolha."
            },
            {
                texto: "Permitir que ele faça sua própria escolha, como você fez",
                consequencia: "Você ganha um companheiro para a eternidade, mas testemunha seu gradual desespero conforme ele percebe o que realmente significa ser imortal."
            }
        ]
    },
    {
        enunciado: "Depois de milênios, os deuses oferecem um acordo: renunciar à imortalidade em troca de um lugar no pós-vida. O que você escolhe?",
        alternativas: [
            {
                texto: "Recusar - você não acredita mais em deuses ou redenção",
                consequencia: "Você continua sua existência solitária, agora como uma lenda entre os homens, uma figura sombria que vagueia pelas eras."
            },
            {
                texto: "Aceitar - você está pronto para descansar",
                consequencia: "Quando você fecha os olhos pela última vez, finalmente encontra paz. Sua história se torna um mito, uma lição sobre o preço da ambição."
            }
        ]
    }
];

let atual = 0;
let perguntaAtual;
let escolhas = [];

function mostraPergunta() {
    if (atual >= perguntas.length) {
        // Fim do jogo
        caixaPerguntas.innerHTML = `<h2>Sua Jornada Eterna</h2>`;
        caixaAlternativas.innerHTML = "";
        
        const final = escolhas.filter(e => e === 0).length >= 3 
            ? "Você abraçou plenamente sua imortalidade, tornando-se uma lenda através das eras. Mas a solidão é seu fardo eterno." 
            : "Você encontrou redenção ao final de sua longa jornada. A mortalidade, afinal, era o verdadeiro dom.";
        
        textoResultado.innerHTML = `<p>${final}</p><p>Sua história servirá de lição para aqueles que buscam a vida eterna.</p>`;
        caixaResultado.style.display = "block";
        botaoProximo.textContent = "Reviver a jornada";
        botaoProximo.onclick = () => location.reload();
        return;
    }

    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.innerHTML = "";
    caixaResultado.style.display = "none";

    perguntaAtual.alternativas.forEach((alternativa, index) => {
        const botaoAlternativa = document.createElement("button");
        botaoAlternativa.textContent = alternativa.texto;
        botaoAlternativa.classList.add("botao-alternativa");
        botaoAlternativa.addEventListener("click", () => selecionarAlternativa(index));
        caixaAlternativas.appendChild(botaoAlternativa);
    });
}

function selecionarAlternativa(index) {
    escolhas.push(index);
    const consequencia = perguntaAtual.alternativas[index].consequencia;
    textoResultado.textContent = consequencia;
    caixaResultado.style.display = "block";
}

botaoProximo.addEventListener("click", () => {
    atual++;
    mostraPergunta();
});

// Iniciar jogo
mostraPergunta();