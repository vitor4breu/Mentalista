
var cores = {1:'azul claro', 2:'azul', 3:'verde', 4:'vermelho', 5:'laranja', 6:'verde escuro', 7:'amarelo', 8:'marrom'}


function Chutar() {

    var numeroCerto = parseInt(Math.random() * (9 - 1) + 1);
    var jogar_novamente = document.querySelector('#jogar_novamente')
    var resul = document.querySelector("#titulo");
    var a = document.querySelector("#frase")
    var game = document.querySelector('#game')
    document.id

    if (numeroCerto == cor_certa) 
    {
        resul.textContent = "VOCÊ ACERTOU!"
        a.textContent = 'A cor é ' + cores[numeroCerto]
    }
    else
    {
        resul.textContent = "VOCÊ ERROU!"
        a.textContent = 'A cor era '+ cores[numeroCerto] 
    }
    
    jogar_novamente.style.display = 'block'
    game.style.display = 'none';
}  

function jogar_denovo()
{
    if (jgdnv == true) 
    {
        jogar_novamente.style.display = 'none'
        game.style.display = 'block';
    }
    else
    {
        jogar_novamente.style.display = 'none'
        end.style.display = "block"

    }

}
    
