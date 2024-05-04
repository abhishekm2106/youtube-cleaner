var list = document.querySelectorAll('[aria-label="Not interested"]');
list.forEach(item=>item.click())
console.log("ehhfrhhr")

var button = document.getElementById("clear")
button.addEventListener("click",()=>{console.log("hgrghh")})

fetch('https://icanhazdadjoke.com/slack')
    .then(data => data.json())
    .then(jokeData => {
        const jokeText = jokeData.attachments[0].text;
        const jokeElement = document.getElementById('jokeElement');

        jokeElement.innerHTML = jokeText;
    })