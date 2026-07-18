const paginas = document.querySelectorAll('.pagina');
let atual = 0;

document.querySelector('.clique-direita').addEventListener('click', () => {
    if (atual < paginas.length - 1) {
        paginas[atual].classList.remove('ativa');
        atual++;
        paginas[atual].classList.add('ativa');
    }
});

document.querySelector('.clique-esquerda').addEventListener('click', () => {
    if (atual > 0) {
        paginas[atual].classList.remove('ativa');
        atual--;
        paginas[atual].classList.add('ativa');
    }
});