var pontos = document.getElementById('pontos')
var jogada = document.getElementsByName('jokenpo')
var computador = Math.round(Math.random()*2)
var res_jogador = document.getElementById('res_jogador')
var res_computador = document.getElementById('res_computador')
var jogo=0
var res = document.getElementById('res')
var pontoPC = 0
var pontoJOGADOR = 0

document.getElementById('btn_play').addEventListener('click',play)
document.getElementById('btn_reset').addEventListener('click',reset)


function reset(){
    jogo=0
    res_computador.innerHTML = ""
    res_jogador.innerHTML = ""
    computador = Math.round(Math.random()*2)
    res.innerHTML = ""
}


function play(){

    function comp(){
        switch (computador){
            case 0:
                res_computador.innerHTML += "PEDRA"
                break
            case 1:
                res_computador.innerHTML += "PAPEL"
                break
            case 2:
                res_computador.innerHTML += "TESOURA"
                break
        }
    }
    
    if (jogada[0].checked && jogo==0){
        comp()
        res_jogador.innerHTML += "PEDRA"
        jogo++
        switch (computador){
            case 0:
                res.innerHTML += "EMPATE"
                res.style.color = '#ff0'
                break
            case 1:
                res.innerHTML += "VOCÊ PERDEU!!"
                res.style.color = '#f00'
                pontoPC++
                break
            case 2:
                res.innerHTML += "VOCÊ GANNHOU!!"
                res.style.color = '#0f0'
                pontoJOGADOR++
                break
        }
    }
    else if (jogada[1].checked && jogo==0){
        comp()
        res_jogador.innerHTML += "PAPEL"
        jogo++
        switch (computador){
            case 0:
                res.innerHTML += "VOCÊ GANHOU!!"
                res.style.color = '#0f0'
                pontoJOGADOR++
                break
            case 1:
                res.innerHTML += "EMPATE"
                res.style.color = '#ff0'
                break
            case 2:
                res.innerHTML += "VOCÊ PERDEU!!"
                res.style.color = '#f00'
                pontoPC++
                break
        }
    }
    else if (jogada[2].checked && jogo==0){
        comp()
        res_jogador.innerHTML += "TESOURA"
        jogo++
        switch (computador){
            case 0:
                res.innerHTML += "VOCÊ PERDEU!!"
                res.style.color = '#f00'
                pontoPC++
                break
            case 1:
                res.innerHTML += "VOCÊ GANHOU!!"
                res.style.color = '#0f0'
                pontoJOGADOR++
                break
            case 2:
                res.innerHTML += "EMPATE"
                res.style.color = '#ff0'
                break
        }
    }

    pontos.innerHTML = `${pontoJOGADOR} X ${pontoPC}`
}