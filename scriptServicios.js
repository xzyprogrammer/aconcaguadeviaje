function desplegarTexto( textoEsconder, textoMostrar){
    texto1 = document.getElementById(textoEsconder);
    texto2 = document.getElementById(textoMostrar);

    texto1.style.display = 'none';
    texto2.style.display = 'block';

}