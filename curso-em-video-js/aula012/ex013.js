let agora = new Date()
let diaSem = agora.getDay()


console.log(diaSem)

switch(diaSem) {
    case 0:
        console.log('Bom Domingo!')
        break
     case 1:
        console.log('Boa Segunda!')
        break
    case 2:
        console.log('Boa terça!')
        break
    case 3:
        console.log('Boa Quarta!')
        break
    case 4:
        console.log('Boa Quinta!')
        break
    case 5:
        console.log('Boa Sexta!')
        break
    case 6:
        console.log('Bom Sábado!')
        break

    default:
        console.log('Data Invalida')
        break

    
}