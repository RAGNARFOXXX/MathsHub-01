// alert('Hello')
// confirm('вы учите js?')

// console.log(span)
// console.log(span.innerText)

// const skill = document.getElementById('skill')
// const islove = document.getElementById('islove')
// const string = document.getElementById('string')

// // const skillText = prompt("какой язык вы учите?", "пока не в курсе")
// // const islovevalue = confirm("вы любите этот язык?")

// // skill.innerText = skillText
// // islove.innerText = islovevalue

// string.innerHTML = "str"

// STRING

// const str1 = 'greeting I\'m'
// const str2 = "text \n nepas"
// const str3 = `reverse 
// nerpa ${str1}`

// console.log(str1, typeof str1)
// console.log(str2)
// console.log(str3)

// NUMBER
// + - * /   ** - ctepen
// const num1 = 75 + 15
// const  num2 = 79 - "5"
// const  num3 = 79 / "   15   "
// const  num4 = 80 + "10"
// const  num5 = 7 + 5 + "5"
// console.log(num5)
// alert(num1)

// const num6 = 8 * "a"
// NaN not a number
// const  num7 = 80 / "0"
// Infinity
//  от -(2**53-1) до (2**53-1)
// console.log(9999999999999999999999)


// BIGINT
// const bigint = 45625563n


// BOOLEAN 
// true/false 
// > < >= <= >== <== == ===
// const bool = 10 > 5
// const bool1 = 'a' > 'AAAA'  UTF-8

// NULL 
// let empty = null
// console.log(typeof empty)

// UNDEFINED 
// let box 
// console.log(box, typeof box)


// SYMBOL 
// const uniq = Symbol('id')
// const uniq2 = Symbol('id')
// console.log(uniq == uniq2)


// OBJECT 
// const obj = {
//     name:"sasha",
//     age: 19,
//     isHappy: false,
// }
// console.log(obj.name)
// console.log(obj['name'])

// obj.job = "Google"
// console.log(obj)

// const array = ["Маша", 18, true]
// // array.job = "Facebook" слом массива  объект
// array[3] = "Corporation"
// console.log(array)
// console.log(array[0])

// alt + l + o open code in browser


// const variant = "option1"
// console.log(5 == "5") translate to string than compare
// console.log( "abc" > 15)
// +"15"  perevod v chislo Number("15") vnor sposob
// number 
// +"abc"
// NaN
// String(15) 15 + "" vtor sposob
// string
// Boolean(0) false other true
// Boolean("") false other true    !! perevod v bool vistro

// const userName = prompt("Who are you?", "anonim")
// if (userName === "admin") {
//     alert("Hello Boss!")
// } else if (userName === "anonim" || !userName) {
//     alert(`I don't know you..`)
// } else {
//     alert(`Hi ${userName}`)
// }

// || или вернет первое тру или последнее фалсе

// const counts = prompt("How long should we count?", 20)
// let i=0
// while (i<counts) {
//     console.log(i++)
//     // i = i +1
//     // i+=1
//     // i++
// }

// do {
//     console.log(i++)
// } while (i<counts)

// const arr = []
// for ( let i = 1; i <= 50; ++i ) {
//     arr.push(i)
// }

// const newArray = []

// for ( item of arr) {
//     const marker = elem % 3
//     if (!marker) {
//         newArray.push(elem)
//     }
// }

// const obj = {
//     name: "Masha",
//     age: 18,
//     city: "Saint-Petersburg"
// }
// for (key in obj) {
//     console.log(key, obj[key])
// }

// // FUNCTION
// // Declaration
// function scream() {
//     alert('AAAAAAA')
//     return "I'm OK"
// }
// scream()
// //  неважно где определили функцию хоть в конце а обращаемся вначале кода все работает с другими методами    нет

// // expression
// const wowScream = function() {
//     // const result = a * b
//     // return result
//     return a * b
// }
// console.log(wowScream(15, 10))

// // arrow
// const arrow = () => {
//     alert("arrow in the sky")
// }
// arrow()


// ИГРА
// Нажав кнопку начать запускается игра, генерация задачи,
// пользователь может ввести ответ, должна появится кнопка проверить
// 
// Нажав проверить мы сравниваем ввод пользователя с ответом,
// Вывести результат и верное значение, смена кнопки начать заново

const getRandomNumInRange = (min, max) => {
    const randomNum = (Math.random() * (max - min) + min).toFixed(0) 
    return randomNum
}

const getTask = () => {
    // const randomNum1 = getRandomNumInRange(0, 100) 
    // const randomNum2 = getRandomNumInRange(0, 100) 

    // let symbol
    // if (Math.random() > 0.5) {
    //     symbol = "+"
    // } else {
    //     symbol = "-"
    // }

    const symbol = (Math.random() > 0.5) ? "+" : "-"
    const task = `${getRandomNumInRange(0, 100)} ${symbol} ${getRandomNumInRange(0, 100)}`
    gameState.rightAnswer = eval(task)
    return task
}

const toggleGameState = () => {
    gameState.taskinProcess = !gameState.taskinProcess
}

const gameElements = document.getElementById("my_game").children
const title = gameElements[0]
const userTask = gameElements[1]
const userAnswer = gameElements[2]
const btnGame = gameElements[3]

const gameState = {
    taskinProcess: false,
    rightAnswer: null,

}

const startGameFunc = () => {
    if (!gameState.taskinProcess) {
        title.innerText = "Game started"
        userAnswer.Value = null
        userTask.innerText = getTask()
        userAnswer.hidden = false
        btnGame.innerText = "Check!"
        toggleGameState()
    } else {
        const isRight = gameState.rightAnswer == userAnswer.value
        userTask.innerText = userTask.innerText + " = " + gameState.rightAnswer
        title.innerText = (isRight) ? "Congratulations!" : "Try it again"
        btnGame.innerText = "Start again"
        toggleGameState()
    }
}
btnGame.addEventListener("click", startGameFunc)
userAnswer.addEventListener("keydown", () => {
    console.log(e)
    if (e.key === "Enter") {
        startGameFunc()
    } else if (e.key === "Escape") {
        userAnswer.blur()
    }
})








// console.dir(document)

const choosedEl = document.querySelectorAll(".choosed_block-container > div")
// const anyValue = document.getElementById("dsd").children
console.log(choosedEl[0])

const counterEl = document.querySelector(".choosed_block span")

// const choosedState = {
//     countElements: 0,
// }

// const changeCount = (value) => {
//     choosedState.countElements += value 
//     counterEl.innerText = choosedState.countElements 
// }

const choosedState = {
    countElements: 0,
    setCountValue (value) {
        this.countElements += value 
        counterEl.innerText = this.countElements
    } 
}

const eventFunc = (e) => {
    // choosedEl[i].classname = "choosedElement"
    counterEl.innerText = +counterEl.innerText + 1
    if (e.target.className === "") {
        e.target.className = "choosed_element"
        choosedState.setCountValue(1)
    } else {
        e.target.className = ""
        choosedState.setCountValue(-1)
    }
}


for (let i=0; i < choosedEl.length; i++) {
    choosedEl[i].addEventListener("click", eventFunc)
}
choosedEl[2].removeEventListener("click", eventFunc)




const testValue = "string"

function test(str) {

    return str + null

}

console.log(test(testValue))