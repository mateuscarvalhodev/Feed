var readline = require('readline');
var rl = readline.createInterface({
input: process.stdin,
output: process.stdout,
terminal: false
});
rl.on('line', entrada => {
// Escreva a sua solução aqui
let palavra = '';
let removerRepetido = '';
let i = 0;
for(i = text.length() - 1; i >= 0; i--) {
    palavra=text.charAt(i) + palavra;

    if(palavra.length() <= text.length()/2){
        i = text.length() - (palavra.length() * 2);
        removerRepetido = text.substring(i, i + palavra.length());
        if(palavra.equals(removerRepetido)) {
            resposta = text.substring( 0, i + resposta.length());
            i = -1;
        }
    }
    else{
        i = -1;
    }
}
return resposta;

function returnCleanWord() {
    let cleanWord = '';
    let words = text.split(' ');
    let wordsClean =[words.length];
        for(let i = words.length; i++;) {
            wordsClean[i] = returnCleanWord(cleanWord[i]);
            cleanWord += ' ' + wordsClean[i];
        }
        wordsRepeat = true;
            for(i = 0; words.length; i++) {
                wordsRepeat = words[i].equals(wordsClean[i]) ? false : wordsRepeat;
            }
            return wordsRepeat ? cleanWord : word;

}

console.log(resposta)
})

