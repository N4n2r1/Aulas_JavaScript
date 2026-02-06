const pessoas = parseInt(prompt("Digite a quantidade de pessoas na festa: "))
const horas = parseFloat(prompt("Digite a quantidade de horas da festa: "))
const adultos = parseInt(prompt("Digite a quantidade de adultos na festa: "))
const criancas = pessoas - adultos

const totalsalgado = pessoas * 18
const valorsalgado = (totalsalgado * 48.90) / 100 

const totaldoce = pessoas * 6
const valordoce = (totaldoce * 42.90) / 20

const refri = pessoas * 1
const valorrefri = (refri * 8.90) / 2

const copo = pessoas * 5
const valorcopo = (copo * 12,90) / 100

const prato = pessoas * 2
const valorprato = (prato * 4.99) / 10

const talher = pessoas * 2
const valortalher = (talher * 7.99) / 10

const descartavel = valorcopo + valorprato + valortalher

const mesa = pessoas / 4
const valorMesaeCadeira = 17.99 * mesa

const valorkaraoke = horas * 27.99

const espaco = horas * 239.99

const valoradultos = (valorMesaeCadeira + valorkaraoke + espaco) / adultos

const valortotal = valorsalgado + valordoce + valorrefri + descartavel + valorMesaeCadeira + valorkaraoke + espaco

alert(`O total de convidados é ${pessoas}, sendo ${adultos} adultos e ${criancas} crianças.
       A festa terá duração de ${horas} horas.
       O valor total da festa é R$ ${valortotal.toFixed(2)}
       O valor por adulto é R$ ${valoradultos.toFixed(2)}
       O valor dos salgados é R$ ${valorsalgado.toFixed(2)}
       O valor dos doces é R$ ${valordoce.toFixed(2)}
       O valor dos refrigerantes é R$ ${valorrefri.toFixed(2)}
       O valor dos descartáveis é R$ ${descartavel.toFixed(2)}
       O valor de mesa e cadeira é R$ ${valorMesaeCadeira.toFixed(2)}
       O valor do karaokê é R$ ${valorkaraoke.toFixed(2)}
       O valor do espaço é R$ ${espaco.toFixed(2)}`
       )