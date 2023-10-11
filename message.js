document.addEventListener("DOMContentLoaded", function () {

    document.getElementById("agregado").addEventListener("click", (event) => {
        event.preventDefault();
        const formulario = document.getElementById("structure")
        formulario.reset();
        const mensaje = document.getElementById("message")
        mensaje.innerHTML = '¡Producto agregado!';
        mensaje.style.display = 'block';
        mensaje.classList.add('alert');
        setTimeout(function () {
            mensaje.style.display = 'none';
        }, 3000);
    });

});