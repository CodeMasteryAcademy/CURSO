const display = document.querySelector('.sentenceList');
let newSentenceList = '';

let sentenceList = [
    "Desperte o brilho dentro de você e ilumine o mundo ao seu redor.",
    "Que os fracassos deste ano, sejam os degraus necessários para atingir tudo que você almeja no próximo ano!",
    "Se você é programador, transforme bugs em oportunidades de aprendizagem e faça do código fonte da vida, uma obra-prima motivadora.",
    "Você ainda pode virar o jogo.",
    "Seja bem-vindo ao futuro, o que vai desejar para o ano de 2024?"
];

sentenceList.forEach(sentence => {
    if(sentence != "") {
        newSentenceList += `    
            <li class="sentence">
                "${sentence}  "      
            </li>
        `
    }
    update(newSentenceList);
});

function update(value) {
    display.innerHTML = value;
}


