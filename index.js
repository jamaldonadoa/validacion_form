
let form = document.getElementById('formulario');

form.addEventListener("submit", function(evento){
    evento.preventDefault();

    contador = 0
    let mensaje = "";

    let valTarj= /[0-9]{12}/;
    let tarjeta= form.cardn.value;
    let valCvc = /[0-9]{4}/;
    let cvc = form.cvc.value;
    let valAmount = /[0-9]{1,20}/;
    let monto = form.amount.value;
    let valNom = /[A-Za-z]/;
    let nombre = form.name.value;
    let valApe = /[A-Za-z]/;
    let apellido = form.lastname.value;
    let valCiu = /[A-Za-z]/;
    let ciudad = form.city.value;
    let valEsta = /[A-Za-z]/;
    let estado = form.state.value;
    let valPos = /[0-9]{4,6}/;
    let postal = form.postal.value;

    let campos = [tarjeta,cvc,monto,nombre,apellido,ciudad,estado,postal]
    let validaciones = [valTarj,valCvc,valAmount,valNom,valApe,valCiu,valEsta,valPos]
    let nombres = ["Card", "CVC", "Amount", "Name", "Last Name", "City", "State", "Postal Code"]


    for (let index = 0; index < campos.length; index++) {
        if(validaciones[index].test(campos[index]) && campos[index] !== ""){
            contador++;
        } else {
            mensaje += `<span>Check the field ${nombres[index]}, its empy or invalid</span>`;
        }
        
    }

    if (contador < campos.length){
        let outMensaje = document.querySelector('.alerta');
        outMensaje.innerHTML = `<div class="alert alert-warning d-flex flex-column" role="alert">${mensaje}</div>`;
    } else {
        evento.target.submit();
    }
})


