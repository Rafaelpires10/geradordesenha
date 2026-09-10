const numeroSenha = document.querySelector('.parametro-senha__text')
let tamanhoSenha = 12;
numeroSenha.textContent = tamanhosenha;

const letrasMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const letrasMinusculas = 'abcdefghijklmnopqrstuvwxyz'
const numeros = '0123456789'
const simbolos = '!@#$%*?'
const botoes = document.querySelector('.parametro-senha__botao');
const campoSenha = document.querySelector('#campo-senha');
const checkbox = document.querySelectorAll('.checkbox');
const forcaSenha = document.querySelector('.forca');
 
botoes[0].onclick = diminuiTamanho;
botoes[1].onclick = aumentaTamanho;