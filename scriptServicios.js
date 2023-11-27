function desplegarTexto( textoEsconder, textoMostrar){
    texto1 = document.getElementById(textoEsconder);
    texto2 = document.getElementById(textoMostrar);

    texto1.style.display = 'none';
    texto2.style.display = 'block';

}

function openModalDetalle(idModal, categoria){
    if(categoria == 'restaurante'){

    }

  var modal = document.getElementById("modalDetalle");
  var span = document.getElementsByClassName("close")[0];
  modal.style.display = "block";

  span.onclick = function() {
    modal.style.display = "none";
  }
  window.onclick = function(event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  }
}