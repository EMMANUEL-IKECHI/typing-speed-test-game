const typingText = document.querySelector(".typing-text p");
const textInput = document.querySelector('input');
const tryAgain = document.querySelector(".try-again");
const timeText = document.querySelector('.time');

let charIndex = mistakes = cpm =  0;
let maxTime = 60;
let timeleft = maxTime;

//Generates a random paragraph
function loadParagraph() {
    let randIndex = Math.floor(Math.random() * paragraphs.length);
    typingText.innerHTML='';
    paragraphs[randIndex].split('').forEach(letter => {
        let span = `<span>${letter}</span>`
        typingText.innerHTML += span;
    });
}

//Typing function that checks if the keystrokes are correct or not
function initTyping() {
    let char = typingText.querySelectorAll('span');
    let typedChar = textInput.value.split('')[charIndex];
    
    if (typedChar == null) {
        char[charIndex].classList.remove('active');
        charIndex--;
        char[charIndex].classList.add('active');
        char[charIndex].classList.remove('correct', 'incorrect');
    }
    else {
        if (char[charIndex].innerText == typedChar) {
            char[charIndex].classList.add('correct');
        }
        else {
            char[charIndex].classList.add('incorrect');
        }
        char[charIndex].classList.remove('active');
        charIndex++;
        char[charIndex].classList.add('active');
    }
}

function initTimer () {
    setInterval(counter, 1000);
}

function counter() {
    while(timeleft > 0) {
        timeleft--;
        timeText.innerText = timeleft;
    }
}

function wpmCounter () {
    let totalText = textInput.value.split(' ');
    console.log(totalText);
    totalText = totalText.filter((item)=>{
        return item.length > 0;
    });
    console.log(totalText);
    let wpm = totalText.length / maxTime;
    console.log(wpm);
}
function resetGame() {
    loadParagraph();
    charIndex = 0;
    textInput.value = '';

}
textInput.addEventListener('keydown', (event)=>{
    if (event.key === 'Enter') {
        wpmCounter();
    }
})

typingText.addEventListener('click', ()=> textInput.focus());
document.addEventListener('keydown', ()=> {
    textInput.focus();
    initTimer();
});

textInput.addEventListener('input', initTyping);
tryAgain.addEventListener('click', resetGame);
loadParagraph();