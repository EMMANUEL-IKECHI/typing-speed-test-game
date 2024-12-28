const typingText = document.querySelector(".typing-text p");
const textInput = document.querySelector('input');
const tryAgain = document.querySelector(".try-again");

let charIndex = 0;
function loadParagraph() {
    let randIndex = Math.floor(Math.random() * paragraphs.length);
    typingText.innerHTML='';
    paragraphs[randIndex].split('').forEach(letter => {
        let span = `<span>${letter}</span>`
        typingText.innerHTML += span;
    });
}

function initTyping() {
    let char = typingText.querySelectorAll('span');
    let typedChar = textInput.value.split('')[charIndex];
    if (char[charIndex].innerText == typedChar) {
        char[charIndex].classList.add('correct');
    }
    else {
        char[charIndex].classList.add('incorrect');
    }
    charIndex++;
}

typingText.addEventListener('click', ()=> textInput.focus());
document.addEventListener('keydown', ()=> {
    textInput.focus();
});

textInput.addEventListener('input', initTyping);
tryAgain.addEventListener('click', loadParagraph);
loadParagraph();