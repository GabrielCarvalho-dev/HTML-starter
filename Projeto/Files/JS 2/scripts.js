console.log("My Dick")

function Person(name) {
    this.name = name
    this.walk = function(){
        return this.name + " está andando"
    }
}
const mayk = new Person("Mayk")
const joao = new Person("Joao")
console.log(mayk.walk())
console.log(joao.walk())

//Transformar String em Número e Número em String

let string = "123"
console.log(Number(string))

let number = 321
console.log(String(number))

//Contar caracteres e dígitos

let word = "Paralelepipedo"
console.log(word.length)

let number2 = 1234
console.log(String(number2).length)

//Transformar um número quebrado e trocar ponto por vírgula

let number3 = 600
console.log(number3.toFixed(3).replace(".",","))

// toLOwerCase toUpperCase

let word2 = "Programar é muito bacana!"
console.log(word2.toLowerCase())
console.log(word2.toLocaleUpperCase())

//Manipulando Strings e Arrays

let phrase = "Eu quero viver o Amor!"
let myArray = phrase.split(" ")
let phraseWithUnderscore = myArray.join("_")
console.log(phraseWithUnderscore)

//Verificar se o texto contém a palavra Amor

let phrase2 = "Eu quero viver o Amor!"
console.log(phrase2.includes("Amor"))

//Criar array como construtor

let myArray2 = new Array('a','b','c')
console.log(myArray2)

//Contar elementos de um array

console.log(["a","b","c"].length)

//Transformar uma cadeia de caracteres em elementos de um array

let word3 = "Manipulação"
console.log(Array.from(word3))

//Operadores lógicos

let pao = true
let queijo = true

//console.log(pao && queijo)
//console.log(pao || queijo)
//console.log(!pao)
const niceBreakFast = pao && queijo ? "Café top" : "Café Ruim"
console.log(niceBreakFast)

let age = 18
const canDrive = age >=18 ? 'can drive' : "can't drive"
console.log(canDrive)

// if...else

let temperature = 36.9
let highTemperature = temperature >=37.5
let mediumTemperature = temperature < 37.5 && temperature >= 37

if(highTemperature) {
    console.log("Febre alta")
}else if (mediumTemperature) {
    console.log ("Febre moderada")
}else {
    console.log("Saudável")
}

