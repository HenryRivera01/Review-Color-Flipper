const hexa = ['A', 'B', 'C', 'D', 'E', 'F', '0',
    '1', '2', '3', '4', '5', '6', '7', '8', '9']

const changeColorButton = document.querySelector('.changeBgBtn')
const body = document.body;
const infoColor = document.querySelector('.currentColor')

console.log(infoColor)

changeColorButton.addEventListener('click', ()=>{
    changeColor()
})

function changeColor() {
    let currentColor = "#";
    for(let i=0; i<=5; i++){
        let random = Math.floor(Math.random() * hexa.length);
        currentColor += hexa[random]
        console.log(currentColor)
    }
    body.style.backgroundColor = currentColor;
    infoColor.textContent = currentColor;
}