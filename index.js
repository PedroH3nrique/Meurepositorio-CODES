/*var txt = document.getElementById('txt')
const btn = document.getElementById('btn')
const btnpause = document.getElementById('btn_pause')

btn.addEventListener("click", () => {
    const utterance = new SpeechSynthesisUtterance(txt.value);
    speechSynthesis.speak(utterance)
})*/

var txt = document.getElementById('txt')
const btn = document.getElementById('btn')
const btnpause = document.getElementById('btn_pause')

btn.addEventListener("click", () => {
    const utterance = new SpeechSynthesisUtterance(txt.value);
    if (speechSynthesis.paused) {
        speechSynthesis.resume();
    } else {
        speechSynthesis.speak(utterance);
    }
})

btnpause.addEventListener("click", () => {
    if (speechSynthesis.speaking) {
        speechSynthesis.pause();
    }
})