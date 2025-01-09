let barra_pesquisa = document.querySelector('#barra_pesquisa');
let imagem = document.querySelectorAll('.imagem');
let botao_pesquisa = document.querySelector('#botao_pesquisa');

const realizarBusca = () => {
    let valor = barra_pesquisa.value.toLowerCase();
    let encontrouImagem = false;

    imagem.forEach(hide => hide.style.display = 'none');

    imagem.forEach(filter => {
        let titulo = filter.getAttribute('data-title').toLowerCase();

        if (titulo.includes(valor)) {
            filter.style.display = "block";
            encontrouImagem = true;
        }
    });

    if (!encontrouImagem && valor !== '') {
        alert('Poxa :( , nenhuma imagem foi encontrada. Tente novamente.');
    }

    if (barra_pesquisa.value === '') {
        imagem.forEach(filter => filter.style.display = "block");
    }
};

botao_pesquisa.onclick = realizarBusca;
barra_pesquisa.oninput = realizarBusca;