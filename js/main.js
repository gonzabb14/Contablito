document.addEventListener("DOMContentLoaded", function () {

    document.getElementById("registro").addEventListener("click", (event) => {
        event.preventDefault();
        const formulario = document.getElementById("structure")
        formulario.reset();
    const mensaje = document.getElementById("mensaje")
    mensaje.innerHTML = '¡Producto registrado!';
    mensaje.style.display = 'block';
    mensaje.classList.add('alert');
    setTimeout(function () {
        mensaje.style.display = 'none';
    }, 3000);
});
});