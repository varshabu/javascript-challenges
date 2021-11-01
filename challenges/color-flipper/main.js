const colors = ['red', 'green', 'violet', 'yellow', 'orange']
const btn = document.getElementById('btn')
const color = document.getElementById('color')

btn.addEventListener('click', () => {
    let randomNumber = getRandomNumber();
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
})

const getRandomNumber = () => {
    return Math.floor(Math.random() * colors.length);
}
