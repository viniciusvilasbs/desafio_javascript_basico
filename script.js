
function entrar(){

    let inputNome = prompt('Digite seu nome:')

    let inputIdade = prompt('Digite sua idade:')
    
    if (inputNome === '' || inputIdade === ''){
        alert('Preencha os campos corretamente!')
        return
    }

    let nome = inputNome

    let idade = parseInt(inputIdade)

    let maiorOuMenor

    if (idade >= 18){
        maiorOuMenor = 'maior'
    } else if (idade < 18){
        maiorOuMenor = 'menor'
    }

    let mensagemPersonalizada = ''

    if (nome === 'Thomas Anderson' || nome === 'thomas anderson') {
        mensagemPersonalizada = 'Você é uma personagem do filme Matrix!'
    }   

    let saudacao = `Olá ${nome}, você é ${maiorOuMenor} de idade!`
    

    document.querySelector('#saudacao').innerHTML = saudacao
    document.querySelector('#mensagemPersonalizada').innerHTML = mensagemPersonalizada
}