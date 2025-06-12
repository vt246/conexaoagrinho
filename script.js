// script.js

document.addEventListener('DOMContentLoaded', () => {
    const historiaTexto = document.getElementById('historia-texto');
    const btnAumentar = document.getElementById('btnAumentar');
    const btnDiminuir = document.getElementById('btnDiminuir');

    let tamanhoFonteAtual = 1; // 1em como base

    btnAumentar.addEventListener('click', () => {
        tamanhoFonteAtual += 0.1; // Aumenta em 0.1em
        historiaTexto.style.fontSize = `${tamanhoFonteAtual}em`;
    });

    btnDiminuir.addEventListener('click', () => {
        if (tamanhoFonteAtual > 0.8) { // Impede que a fonte fique muito pequena
            tamanhoFonteAtual -= 0.1; // Diminui em 0.1em
            historiaTexto.style.fontSize = `${tamanhoFonteAtual}em`;
        }
    });

    console.log('O Carpinteiro do Sertão - Site carregado com funcionalidades!');
});