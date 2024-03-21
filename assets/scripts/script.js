const morseAlphabet = {
  "-----": "0",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  ".-": "A",
  "-...": "B",
  "-.-.": "C",
  "-..": "D",
  ".": "E",
  "..-.": "F",
  "--.": "G",
  "....": "H",
  "..": "I",
  ".---": "J",
  "-.-": "K",
  ".-..": "L",
  "--": "M",
  "-.": "N",
  "---": "O",
  ".--.": "P",
  "--.-": "Q",
  ".-.": "R",
  "...": "S",
  "-": "T",
  "..-": "U",
  "...-": "V",
  ".--": "W",
  "-..-": "X",
  "-.--": "Y",
  "--..": "Z",
  "-.-.--": "!",
  ".-.-.-": ".",
  "--..--": ","
};

function textToMorse(normalText) {
  if (typeof normalText !== 'string') {
    return 'Por favor, insira um texto válido.';
  }
  return normalText.split('').map(char => {
    if (char === ' ') return ' ';
    return Object.keys(morseAlphabet).find(key => morseAlphabet[key] === char.toUpperCase()) || '';
  }).join(' ');
}

function morseToText(morseCode) {
  if (typeof morseCode !== 'string') {
    return 'Por favor, insira um código Morse válido.';
  }
  return morseCode.split('   ') // Obtém o código da palavra, separado por 3 espaços
    .map(word => word
      .split(' ') // Obtém o código do caractere, separado por 1 espaço
      .map(character => morseAlphabet[character]) // Decodifica o caractere
      .join('') // Junta os caracteres para formar a palavra
    )
    .join(' ') // Adiciona espaços entre as palavras
    .trim(); // Remove espaços em branco adicionais
}

const buttonConvertToMorse = document.getElementById('text-to-morse');

// Adicione um ouvinte de evento para o clique no botão
buttonConvertToMorse.addEventListener('click', function () {
  // Obtenha o valor do texto normal do input
  const normalTextValue = document.getElementById("normal-text").value;

  // Converta o texto normal em código Morse usando a função textToMorse
  const morseResult = textToMorse(normalTextValue);

  // Defina o valor do input do código Morse para o resultado convertido
  document.getElementById("morse-code").value = morseResult;
});

const buttonConvertToText = document.getElementById('morse-to-text');

// Adicione um ouvinte de evento para o clique no botão
buttonConvertToText.addEventListener('click', function () {
  // Obtenha o valor do código Morse do input
  const morseCodeValue = document.getElementById("morse-code").value;

  // Converta o código Morse em texto normal usando a função morseToText
  const textResult = morseToText(morseCodeValue);

  // Defina o valor do input de texto normal para o resultado convertido
  document.getElementById("normal-text").value = textResult;
});

const clearButton = document.getElementById('limpar-campos');

clearButton.addEventListener('click', function() {
  morseCodeValue = document.getElementById("morse-code").value = '';
  normalTextValue = document.getElementById("normal-text").value = '';
})