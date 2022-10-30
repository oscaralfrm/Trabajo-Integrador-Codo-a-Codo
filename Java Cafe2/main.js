const nombre= document.getElementById('nombre');
const apellido= document.getElementById('apellido');
const email= document.getElementById('email');
const telefono= document.getElementById('telefono');
const form = document.getElementById('form');
const parrafo = document.getElementById('warnings');

form.addEventListener('submit', e => {
    let warnings = '';
    let entrar = false;

    parrafo.innerHTML = '';

    if(nombre.value.length < 6){
        warnings += `El nombre no es valido <br>`;
        entrar = true;
    }

    if(apellido.value.length < 6){
        warnings += `El apellido no es valido <br>`;
        entrar = true;
    }

    if(email.value.length < 6){
        warnings += `El email no es valido <br>`;
        entrar = true;
    }

    if(telefono.value.length < 6){
        warnings += `El telefono no es valido <br>`;
        entrar = true;
    }

    if(entrar){
        e.preventDefault();
        parrafo.innerHTML = warnings;
    }
});


