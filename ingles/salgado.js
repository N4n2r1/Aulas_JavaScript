const TipoSalgado1 = prompt("Digite o tipo do salgado 1: ")
const QuantidadeSalgados1 = parseInt(prompt("Digite a quantidade de salgado 1: "))
const PrecoSalgado1 = parseFloat(prompt("Digite o preço do salgado 1: "))
const TipoSalgado2 = prompt("Digite o tipo do salgado 2: ")
const QuantidadeSalgados2 = parseInt(prompt("Digite a quantidade de salgado 2: "))
const PrecoSalgado2 = parseFloat(prompt("Digite o preço do salgado 2: "))

const precoTotalSalgado1 = QuantidadeSalgados1 * PrecoSalgado1
const precoTotalSalgado2 = QuantidadeSalgados2 * PrecoSalgado2
const precoTotal = precoTotalSalgado1 + precoTotalSalgado2

alert(`O preço total dos salgados é: R$ ${precoTotal}`)

const refri = parseInt(prompt("Quantos refrigerantes vai comprar?"))
const precoRefri = parseFloat(prompt("Qual o preço do refrigerante?"))

const precoTotalRefri = refri * precoRefri

alert(`O preço total do refri é: R$ ${precoTotalRefri}`)

const taxa = parseFloat(prompt("Digite a taxa de entrega: "))

const precoFinal = precoTotal + precoTotalRefri + taxa

alert(`O preço final do pedido é: R$ ${precoFinal}`)

const meninas = parseInt(prompt("O valor será divido em quantas pessoas?"))

const media = precoFinal / meninas

alert(`Os salgados escolhidos são: ${TipoSalgado1} e ${TipoSalgado2}. 
    Quantia de refrigerantes: ${refri}.
    Valor toal: ${precoFinal}
    O valor que cada pessoa deve pagar é: R$ ${media.toFixed(2)}`)



