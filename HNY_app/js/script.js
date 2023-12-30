const display = document.querySelector('.sentenceList');
let newSentenceList = '';

let sentenceList = [
    "Desperte o brilho dentro de você e ilumine o mundo ao seu redor.",
    "Que os fracassos desse ano sejam os degraus necessários para atingir tudo que você almeja no próximo ano!",
    "Transforme bugs em oportunidades de aprendizado e faça do código fonte da vida uma obra-prima motivadora.",
    "Você ainda pode virar o jogo",
    "Seja bem ao futuro, o que vai desejar para esse ano de 2024?"
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


