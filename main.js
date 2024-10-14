const h1 = document.querySelector('.h1')
const btn = document.querySelector('.btn')
const btn2 = document.querySelector('.btn2')


let count = 0

var newCounter = (num) => {
    if (num === 'increment') {
        count++
        h1.style.color = 'green'
    } else if (num === 'decrement') {
        if (count > 0) {
            count--
            h1.style.color = 'red'
        }
    }
    h1.innerHTML = count
}

btn.addEventListener('click', () => newCounter('increment'))
btn2.addEventListener('click', () => newCounter('decrement'))



const div = document.querySelector('.main-block')
const light = document.querySelectorAll('.color')

console.log(light);

let color = prompt('write color')

let trafficlight = (color) => {
    if (color === 'red') {
        light[0].style.backgroundColor = 'red'
    } else if (color === 'yellow') {
        light[1].style.backgroundColor = 'yellow'
    } else if (color === 'green') {
        light[2].style.backgroundColor = 'green'
    } 
}

trafficlight(color)

const posX = document.querySelector('#posX')
const posY = document.querySelector('#posY')
const container = document.querySelector('.container')

container.addEventListener('mousemove', (e) => {
    posX.innerHTML = e.screenX
    posY.innerHTML = e.screenY
    console.log(e);
} )
