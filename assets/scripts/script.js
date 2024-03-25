const morseAlphabet = {
  "-----": "0", ".----": "1", "..---": "2", "...--": "3", "....-": "4",
  ".....": "5", "-....": "6", "--...": "7", "---..": "8", "----.": "9",
  ".-": "A", "-...": "B", "-.-.": "C", "-..": "D", ".": "E", "..-.": "F",
  "--.": "G", "....": "H", "..": "I", ".---": "J", "-.-": "K", ".-..": "L",
  "--": "M", "-.": "N", "---": "O", ".--.": "P", "--.-": "Q", ".-.": "R",
  "...": "S", "-": "T", "..-": "U", "...-": "V", ".--": "W", "-..-": "X",
  "-.--": "Y", "--..": "Z", "-.-.--": "!", ".-.-.-": ".", "--..--": ","
};

function isValidInput(input) {
  return typeof input === 'string';
}

function clearFields() {
  document.getElementById("morse-code").value = '';
  document.getElementById("normal-text").value = '';
}

function textToMorse(normalText) {
  return isValidInput(normalText) ? normalText
    .split('')
    .map(char => char === ' ' ? ' ' : Object.keys(morseAlphabet).find(key => morseAlphabet[key] === char.toUpperCase()) || '')
    .join(' ')
    : 'Por favor, insira um texto válido.';
}

function morseToText(morseCode) {
  return isValidInput(morseCode) ? morseCode
    .split('   ')
    .map(word => word
      .split(' ')
      .map(character => morseAlphabet[character])
      .join('')
    )
    .join(' ')
    .trim()
    : 'Por favor, insira um código Morse válido.';
}

document.getElementById('text-to-morse').addEventListener('click', function () {
  const normalTextValue = document.getElementById("normal-text").value;
  const morseResult = textToMorse(normalTextValue);
  document.getElementById("morse-code").value = morseResult;
});

document.getElementById('morse-to-text').addEventListener('click', function () {
  const morseCodeValue = document.getElementById("morse-code").value;
  const textResult = morseToText(morseCodeValue);
  document.getElementById("normal-text").value = textResult;
});

document.getElementById('limpar-campos').addEventListener('click', clearFields);

const textareas = document.querySelectorAll('textarea');
textareas.forEach(function(textarea) {
  textarea.addEventListener('input', function() {
    // Converte o texto para maiúsculas
    this.value = this.value.toUpperCase();
  });
});
