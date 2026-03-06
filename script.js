async function buscarQuestao1() {

const resposta = await fetch("https://enem.dev/api/v1/exams/2020/questions")

const dados = await resposta.json()

const questao = dados.questions[0]

let alternativas = ""

questao.alternatives.forEach(alt => {
alternativas += `<p>${alt.letter}) ${alt.text}</p>`
})

document.getElementById("questao").innerHTML =
`
<h2>Questão ${questao.index}</h2>
<p>${questao.context}</p>

<h3>Alternativas</h3>
${alternativas}
`

}

async function buscarQuestao2() {

const resposta = await fetch("https://enem.dev/api/v1/exams/2021/questions")

const dados = await resposta.json()

const questao = dados.questions[0]

let alternativas = ""

questao.alternatives.forEach(alt => {
alternativas += `<p>${alt.letter}) ${alt.text}</p>`
})

document.getElementById("questao").innerHTML =
`
<h2>Questão ${questao.index}</h2>
<p>${questao.context}</p>

<h3>Alternativas</h3>
${alternativas}
`

}