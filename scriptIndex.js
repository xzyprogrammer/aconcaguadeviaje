document.addEventListener('DOMContentLoaded', function () {
    setTimeout(function () {
        var toastElement = document.getElementById('valoracionToast');
        var toast = new bootstrap.Toast(toastElement);
        toast.show();
    }, 1000); // 300000 milisegundos = 5 minutos

    var enviarValoracionBtn = document.querySelector('#modalValoracion button.btn-primary');
    enviarValoracionBtn.addEventListener('click', function () {
        var tipoFeedback = document.querySelector('#tipoFeedback').value;
        var comentario = document.querySelector('#comentario').value;
        if(tipoFeedback == '' || comentario == ''){
            alert('Falta ingresar datos de valoración.');
            return
        }
        var valoracionData = {
            tipoFeedback: tipoFeedback,
            comentario: comentario,
            fecha: new Date().toISOString() 
        };

        almacenarValoracion(valoracionData);

        var btnCerrarModal = document.getElementById('btnCerrarModalValoracion');
        btnCerrarModal.click();
    });

});

function almacenarValoracion(valoracionData) {
var valoraciones = JSON.parse(localStorage.getItem('valoraciones')) || [];
valoraciones.push(valoracionData);
localStorage.setItem('valoraciones', JSON.stringify(valoraciones));
}
