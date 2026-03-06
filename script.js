async function buscarQuestao(params) {
    const resposta = await fetch("https://enem.dev/api/v1/exams/2020/questions")

    const dados = await resposta.json()

    const questao = dados[0]

    document.getElementById("questao").innerHTML = 
    `
    <h2>${questao.title}</h2>
    <p>${questao.context}</p>
    `
}