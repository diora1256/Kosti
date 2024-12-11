
let btn = document.querySelector('button')

btn.addEventListener('click',() => {
    let num1 =  Math.ceil(Math.random() * 6);
    let num2 =  Math.ceil(Math.random() * 6);
    let img1 = './images/dice' + num1 + '.png'
    let img2 = './images/dice' + num2 + '.png'
    let dice1 = document.querySelectorAll('img')
    let h1 = document.querySelector('h1')
    dice1[0].src = img1
    dice1[1].src = img2
    if (num1 > num2) {
        h1.innerText = 'Первый игрок победил!';
    } else if (num1 < num2) {
        h1.innerText = 'Второй игрок победил!';
    } else {
        h1.innerText = 'Ничья!';
    }
})

















// let genetateRandomColor = () =>{
//     let red = Math.ceil(Math.random() * 255)
//     let green = Math.ceil(Math.random() * 255)
//     let blue = Math.ceil(Math.random() * 255)
//     return `rgb(${red},${green},${blue})`
// }

// let color = genetateRandomColor()

// document.body.style.backgroundColor = color

