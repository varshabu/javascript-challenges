const btn = document.getElementById('btn')
const color = document.getElementById('color')

btn.addEventListener('click', () => {
    let randomNumber = getRandomNumber();
    document.body.style.backgroundColor = randomNumber;
    color.textContent = randomNumber;
})

const getRandomNumber = () => {
    return '#' + Math.floor(Math.random()*16777215).toString(16);
}
