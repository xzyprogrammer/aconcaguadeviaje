document.addEventListener('DOMContentLoaded', function () {
        mostrarValoraciones();
    });

    function mostrarValoraciones() {
        var valoraciones = JSON.parse(localStorage.getItem('valoraciones')) || [];
        var valoracionesContainer = document.getElementById('valoracionesContainer');
        valoracionesContainer.innerHTML = '';
    
        for (var i = 0; i < valoraciones.length; i++) {
            var valoracion = valoraciones[i];
            var card = document.createElement('div');
            card.classList.add('card', 'valoracion-card');
    
            var cardHeader = document.createElement('div');
            cardHeader.classList.add('card-header', 'titulo-valoracion');
            cardHeader.innerHTML = 'Usuario anónimo' + `<p style="font-size: 16px"; max-width: 50%>${valoracion.fecha.substring(0,10)}</p>`;
            card.appendChild(cardHeader);
    
            var cardBody = document.createElement('div');
            cardBody.classList.add('card-body', 'comentario-valoracion');
            cardBody.style.fontSize = '20px';
            cardBody.innerHTML = valoracion.comentario;
            card.appendChild(cardBody);
    
            var cardFooter = document.createElement('div');
            cardFooter.classList.add('card-footer', 'tipo-feedback-valoracion');
            cardFooter.innerHTML = 'Categoría: ' + valoracion.tipoFeedback;
            card.appendChild(cardFooter);
    
            valoracionesContainer.appendChild(card);
        }
    }
