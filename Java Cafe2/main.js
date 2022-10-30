const nombre= document.getElementById('nombre');
const apellido= document.getElementById('apellido');
const email= document.getElementById('email');
const telefono= document.getElementById('telefono');
const form = document.getElementById('form');
const parrafo = document.getElementById('warnings');
const patrones = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;


form.addEventListener('submit', e => {
    e.preventDefault();
    let warnings = '';
    let entrar = false;

    parrafo.innerHTML = '';

    if(nombre.value.length < 3){
        warnings += `El nombre no es valido <br>`;
        entrar = true;
    } else {
        warnings += `El apellido es válido 😊 <br>`;
    }

    if(apellido.value.length < 3){
        warnings += `El apellido no es valido <br>`;
        entrar = true;
    } else {
        warnings += `El apellido es válido 😊 <br>`;
    }

    if(email.value.length < 6 || !email.matches(patrones)){
        warnings += `El email no es valido <br>`;
        entrar = true;
    } else {
        warnings += `El apellido es válido 😊 <br>`;
    }

    if(telefono.value.length < 6){
        warnings += `El telefono no es valido <br>`;
        entrar = true;
    } else {
        warnings += `El apellido es válido 😊 <br>`;
    }

    if(entrar){
        e.preventDefault();
        parrafo.innerHTML = warnings;
    }

});


