const aluno = prompt("Qual o nome do aluno?")
const nota1 = parseFloat(prompt(`Qual a primeira nota?`))
const nota2 = parseFloat(prompt(`Qual a segunda nota?`))

const media = (nota1 + nota2) / 2

alert(`A média do aluno ${aluno} é ${media}`)