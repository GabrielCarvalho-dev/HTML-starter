//Guia de notas

function getScore(score){

let scoreA = score >=90 && score <=100
let scoreB = score >=80 && score <=89
let scoreC = score >=70 && score <=79
let scoreD = score >=60 && score <=69
let scoreF = score < 60 && score >=0

let scoreFinal;

if(scoreA){
    scoreFinal = "A"
}else if(scoreB){
    scoreFinal = "B"
}else if(scoreC){
    scoreFinal = "C"
}else if(scoreD){
    scoreFinal = "D"
}else if(scoreF){
    scoreFinal = "F"
}else{
    scoreFinal = "Nota inválida"
}
console.log(scoreFinal)
}
console.log(getScore(100))

//Fluxo de caixa familiar

let family = {
    incomes: [500,500],
    expenses: [400,400]
}
function sum(Array){
   let total = 0;
   for(let value of Array){
       total += value
   }
   return total
}
function calculateBalance(){
const calculateIncomes = sum(family.incomes)
const calculateExpenses = sum(family.expenses)

const total = calculateIncomes - calculateExpenses
const itsOk = total >=0

let balanceText = "Negativo"

if(itsOk){
    balanceText = "Positivo"
}
console.log(`seu saldo é ${balanceText} : ${total}R$`)
}
calculateBalance()

//Transformador de graus (TransformDegree)

function transformDegree(degree){
const celsiusExits = degree.toUpperCase().includes('C')
const fahrenheitExits = degree.toUpperCase().includes('F')

//Fluxo de erro

if(!celsiusExits && !fahrenheitExits){
throw new Error("Grau não identificado")
}

//Fluxo ideal, F -> C

let updateDegree = Number(degree.toUpperCase().replace("F",""))
let formula = fahrenheit => (fahrenheit - 32) * 5/9
let degreeSign = "C"

//Fluxo alternativo C -> F

if(celsiusExits){
    updateDegree = Number(degree.toUpperCase().replace("C",""))
    formula = celsius => celsius * 9/5 +32
    degreeSign = "F"
}
return formula(updateDegree) + degreeSign
}
try{
    console.log(transformDegree("10C"))
    console.log(transformDegree("50F"))
    transformDegree("50Z")
}catch(error){
    console.log(error.message)   
}

//Programa para categorizar livros

const booksByCategory =[
    {
    category: "Riqueza",
    books: [
        {
            title: "Os segredos da mente milionária",
            author:"T. Harv Eker",
        },
        {
            title: "O homem mais rico da babilônia",
            author: "George S. Clason",
        },
        {
            title: "Pai rico, pai pobre",
            author: "Roubert T. Kiyosaki e Sharon L. Lechter",
        }
    ],
},
{
    category: "Inteligencia Emocional",
    books: [
        {
            title: "Você é Insubstituível",
            author: "Augusto Cury",
        },
        {
            title: "Ansiedade - Como enfrentar o mal do século",
            author: "Augusto Cury",
        },
        {
            title: "Os 7 hábitos das pessoas altamente eficazes",
            author: "Stephen R. Covey",
        }
    ],
},
];
const totalCategories = booksByCategory.length

console.log(totalCategories);
for(let category of booksByCategory) {
    console.log('Total de livros da categoria:', category.category)
    console.log(category.books.length)
}

function countAuthors() {
    let authors = [];

    for(let category of booksByCategory){
        for(let book of category.books){
            if(authors.indexOf(book.author) == -1) {
                authors.push(book.author)
            }
        }
    }

    console.log("Total de autores", authors.length)
}
countAuthors();

function booksOfAuthor(author) {
    let books = [];

    for(let category of booksByCategory){
        for(let book of category.books){
            if(book.author === author) {
                books.push(book.title)
            }
        }
    }

    console.log(`Livros do autor ${author} : ${books.join(", ")}`)
}
booksOfAuthor("George S. Clason")
