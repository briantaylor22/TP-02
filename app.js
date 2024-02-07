/* Efecto de cambio de imagen */
let imagenMain = document.getElementById('imagen-principal');
function mouseOver() {
    imagenMain.src = "images/imagen2.webp"
    imagenMain.classList.add('imagen-reemplazo');
};
function mouseOut() {
    imagenMain.src = "images/persona-removebg-preview.png"
};
imagenMain.addEventListener("mouseover", mouseOver);
imagenMain.addEventListener("mouseout", mouseOut);




/* Mostrar + info en MyPortfolio */
let cartaAdicional = document.getElementById('cartaAdicional');
let botonMas = document.getElementById('botonMas');
let botonCerrar = document.getElementById('botonCerrar');
function mostrarMas() {
    cartaAdicional.classList.add('visible');
    botonMas.classList.replace('visible', 'oculto');
};
function cerrarMostrarMas() {
    cartaAdicional.classList.replace('visible', 'oculto');
    botonMas.classList.replace('oculto', 'visible');
    botonCerrar = 'oculto'
};
/*Profe, solo pude hacer que funcione para uno solo (el primer ID), no se como hacer para
que se repita la funcion en los demas botones, se que el ID es unico y por eso solo funciona con
el primer boton y la primer carta adicional, pero no se como solucionarlo y aplicar a todos los botones,
intente usar con getElementsByClassName pero no entendi como manejar al arreglo junto con la funcion*/
botonMas.addEventListener('click', mostrarMas);
botonCerrar.addEventListener('click', cerrarMostrarMas);




/* Mensaje de enviado con exito formulario */
document.getElementById('contactForm').addEventListener('submit', function (evento) {
    evento.preventDefault();
    let nombre = document.getElementById('inputNombre').value;
    let telefono = document.getElementById('inputTel').value;
    let email = document.getElementById('inputEmail').value;
    let subject = document.getElementById('inputSubject').value;
    let texto = document.getElementById('inputTexto').value;
    if (!nombre || !email || !telefono || !subject || !texto) {
        document.getElementById('respuesta').style.color = 'red';
        document.getElementById('respuesta').innerText = 'Porfavor completa todos los campos';
        return;
    };
    document.getElementById('respuesta').style.color = 'green';
    document.getElementById('respuesta').innerText = 'Mensaje enviado con éxito.'

    document.getElementById('inputNombre').value = '';
    document.getElementById('inputTel').value = '';
    document.getElementById('inputEmail').value = '';
    document.getElementById('inputSubject').value = '';
    document.getElementById('inputTexto').value = '';
});




/* Slider para las cards de What i Do */
let slider = document.querySelector('.slider');
let sliderCard = document.querySelectorAll('.slider .cartas');
let index = 0;
function cardSlider(direccion){
    index += direccion;
    if (index < 0){
        index = sliderCard.length - 1;
    }
    else if(index >= sliderCard.length){                            /*Profe no entendi como hacer responsive el slider
                                                                    intente con screen.width y un condicional
                                                                    pero daba error, entonces no se como variar el desplazamiento*/
        index = 0;
    };
    let posicion = -index * 450;
    slider.style.transform = `translateX(${posicion}px)`;
};
cardSlider(0);



