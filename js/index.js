

function formon() {
    if (document.getElementById("names").value!=="" && document.getElementById("phone").value!=="" && document.getElementById("email").value!=="" && document.getElementById("fecha").value!=="" && document.getElementById("hora").value!=="" && document.getElementById("personas").value!=="" && document.getElementById("personas").value>0 && document.querySelector('input[name="comida"]:checked').value==="si"){
        document.getElementById("formparajs").style.display= "flex";
    }   
    else{
        if (document.getElementById("names").value!=="" && document.getElementById("phone").value!=="" && document.getElementById("email").value!=="" && document.getElementById("fecha").value!=="" && document.getElementById("hora").value!=="" && document.getElementById("personas").value!=="" && document.getElementById("personas").value>0 && document.querySelector('input[name="comida"]:checked').value==="no"){
            alert('Reserva completada. Elegirás tus platos en el local')
        }
    else {
        alert('Completa los campos correctamente');
    }
}
}

function cerrar(){
    document.getElementById("formparajs").style.display= "none";
    document.getElementById("canvas").style.display= "none";
}

function reservar(){
    if (document.getElementById("menu_1").value!=="" || document.getElementById("menu_2").value!=="" || document.getElementById("menu_3").value!=="" || document.getElementById("menu_4").value!=="" || document.getElementById("menu_5").value!=="" || document.getElementById("menu_6").value!==""){
        document.getElementById("canvas").style.display= "block";
        location.href="#canvas"
    }
    else{
        alert('Completa todos los campos por favor');
    } 
    }
