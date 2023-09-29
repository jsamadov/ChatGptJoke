let spanSec = document.querySelector('#spann')
document.querySelector('#click').addEventListener('click', () => {
    fetch('https://api.chucknorris.io/jokes/random')
        .then(response => response.json())
        .then(data => {
            spanSec.textContent = data.value;
            console.log(data.value)
        })
});