/**
    * Limpia los campos de los formularios
    * @method borrarform
 **/
/**
    * Abre el formulario oculto (display: none -> display: flex)
    * @method formon
**/
/**  
    * Cierra la seccion canva (display: block -> display: none)
    * @method cerrarcanva
**/
/**   
    * Cierra el formulario oculto (display: flex -> display: none)
    * @method cerrarform
**/
/**   
    * Deshabilita los inputs del formulario
    * @method Bloquearform
**/
/**   
    * Habilita los inputs del formulario
    * @method Actvarform
**/
/**    
    * Abre la seccion canvas, Calcula Total, Limpia los formularios, cierra el formulario oculto.
    * @method reservar
**/
/**    
    * Limpia lo dibujado en el canvas
    * @method ClearCanvas
    * @param (string) unidad id de los imputs de metros, pulgadas, pies o yardas
    * @param (number) valor el valor de los imputs de metros, pulgadas, pies y yardas
    * @return Valor que retorna
**/
/**    
    * Escribe en una posicion definida por coordenadas
    * @method WriteText
    * @param (string) Texto que se escribe
    * @param (number) posicion en el eje x donde comenzara a escribir
    * @param (number) posicion en el eje y donde comenzara a escribir
**/
/**    
    * Inicia la animacion con setInterval
    * @method PlayAnimation
    * @param (function) Animacion que se ejecutara
**/
/**    
    * Se pausa la animacion con clearInterval
    * @method PauseAnimation
    * @param (number) Id del setInterval que se pausara
**/
/**    
 * Animacion Principal del canvas
 * @method animation_hand
 /**    
  * Dibuja el contenido del canvas
  * @method draw
  **/
  /**    
      * Imprime un canvas en PDF
      * @method PrintElem
      * @param (id) Id del canvas que se va a imprimir
  **/

/* Precios de las comidas */
var Precio_Risotto = 780;
var Precio_Hamburguesas = 800;
var Precio_Cheeseecake = 500;
var Precio_Wrap = 700;
var Precio_Sushi = 900;
var Precio_Tiramisu = 500;

/* getelements */
var Risotto = document.getElementById("menu_1");
var Hamburguesa = document.getElementById("menu_2");
var Cheeseecake = document.getElementById("menu_3");
var Wrap = document.getElementById("menu_4");
var Sushi = document.getElementById("menu_5");
var Tiramisu = document.getElementById("menu_6");
var Names = document.getElementById("names");
var Phone = document.getElementById("phone");
var Email = document.getElementById("email");
var Personas = document.getElementById("personas");
var Fecha = document.getElementById("fecha");
var Hora = document.getElementById("hora");
var FormParaJS = document.getElementById("formparajs");
var Canvas = document.getElementById("canvas");
var Boton_principal = document.getElementById("btnSend");
/* Valor total de los platos reservadas */
var Total = 0;

function borrarform() {
    Risotto.value = "";
    Hamburguesa.value = "";
    Cheeseecake.value = "";
    Wrap.value = "";
    Sushi.value = "";
    Tiramisu.value = "";
    Names.value = "";
    Phone.value = "";
    Email.value = "";
    Personas.value = "";
    Fecha.value = "";
    Hora.value = "";
}


function cerrarcanva() {
    Canvas.style.display = "none";
    borrarform();
}

function cerrarform() {
    FormParaJS.style.display = "none";
    borrarform();
}

function bloquearForm() {
    Names.disabled = true;
    Phone.disabled = true;
    Personas.disabled = true;
    Fecha.disabled = true;
    Hora.disabled = true;
    Email.disabled = true;
    Boton_principal.disabled = true;
}
function ActivarForm() {
    Names.disabled = false;
    Phone.disabled = false;
    Personas.disabled = false;
    Fecha.disabled = false;
    Hora.disabled = false;
    Email.disabled = false;
    Boton_principal.disabled = false;
}

function formon() {
    if (Names.value !== "" && isNaN(Names.value) && Phone.value > 0 && Email.value !== "" && Fecha.value !== "" && Hora.value !== "" && Personas.value > 0 && document.querySelector('input[name="comida"]:checked').value === "si") {
        FormParaJS.style.display = "flex";
        bloquearForm();
    }
    else {
        if (Names.value !== "" && isNaN(Names.value) && Phone.value > 0 && Email.value !== "" && Fecha.value !== "" && Hora.value !== "" && Personas.value > 0 && document.querySelector('input[name="comida"]:checked').value === "no") {
            alert('Reserva completada. Elegirás tus platos en el local')
        }
        else {
            alert('Completa los campos correctamente');
        }
    }
}

function reservar() {
    if (Risotto.value !== "" || Hamburguesa.value !== "" || Cheeseecake.value !== "" || Wrap.value !== "" || Sushi.value !== "" || Tiramisu.value !== "") {
        Canvas.style.display = "block";
        location.href = "#canvas";
        Total = Risotto.value * Precio_Risotto + Hamburguesa.value * Precio_Hamburguesas + Cheeseecake.value * Precio_Cheeseecake + Wrap.value * Precio_Wrap + Sushi.value * Precio_Sushi + Tiramisu.value * Precio_Tiramisu;
        borrarform();
        cerrarform();
        ActivarForm();
    }
    else {
        alert('Completa todos los campos por favor');
    }
}

/* CANVAS SECTION */

/* getelements */
var mycanvas = document.getElementById("mycanvas");
var ctx = mycanvas.getContext("2d");
/* Alto y Ancho del canvas */
var widthMax = mycanvas.width;
var heightMax = mycanvas.height;

function ClearCanvas() {
    mycanvas.width = mycanvas.width;   
}

function WriteText(content, posx, posy) {
    ctx.font = "italic small-caps bold 12px arial";
    ctx.fillStyle = "#000000";
    ctx.fillText(content, posx, posy);
    
}

var a;
function PlayAnimation(fname){
    a = setInterval(fname, 30);
}
function PauseAnimation(){
    clearInterval(a);
}

var x=0;
var dx=5
var y=60;
var dy=60
function animation_hand(){
    draw();
    ctx.clearRect(0, y, widthMax, heightMax);
    ctx.clearRect(x, y-dy, widthMax-x, dy);
    var img = new Image();
    img.src = "img/hand.png";
    img.onload = function(){
        ctx.drawImage(img, x, y, 281/6, 721/6);
    }
    
    if(x>mycanvas.width){
        x=0;
        y+=dy;
    }
    x+=dx;
    if(y>heightMax && x>widthMax){
        PauseAnimation();
    }
}
function draw() {
    
    var margenderecho = 60;
    var interline = 20;
    var margenizquierdo = 20;
    var img = new Image();
    img.src = "img/main_logo_black.png";
    img.onload = function () {
        ctx.drawImage(img, 87, 9.75, 180 * 0.7, 65 * 0.7);
    }
    ClearCanvas();
    var starttxt=110;
    WriteText("Reserva a nombre de: ", margenizquierdo, starttxt - interline);
    WriteText(Names.value, margenizquierdo, starttxt);
    WriteText("Cantidad de Personas: "+Personas.value, margenizquierdo, starttxt + interline);
    WriteText("Fecha: "+Fecha.value, margenizquierdo, starttxt + 2 * interline);
    WriteText("Hora: "+Hora.value, margenizquierdo, starttxt + 3 * interline);

    starttxt = 230;
    WriteText("Plato", margenizquierdo, starttxt - 1.5 * interline);
    WriteText("Risotto", margenizquierdo, starttxt);
    WriteText("Hamburguesas", margenizquierdo, starttxt + interline);
    WriteText("Wrap", margenizquierdo, starttxt + 2 * interline);
    WriteText("Sushi", margenizquierdo, starttxt + 3 * interline);
    WriteText("Cheeseecake", margenizquierdo, starttxt + 4 * interline);
    WriteText("Tiramisu", margenizquierdo, starttxt + 5 * interline);
    WriteText("Total", margenizquierdo, starttxt + 7 * interline);

    WriteText("Cant", widthMax - margenderecho, starttxt - 1.5 * interline);
    WriteText(Risotto.value, widthMax - margenderecho, starttxt);
    WriteText(Hamburguesa.value, widthMax - margenderecho, starttxt + interline);
    WriteText(Wrap.value, widthMax - margenderecho, starttxt + 2 * interline);
    WriteText(Sushi.value, widthMax - margenderecho, starttxt + 3 * interline);
    WriteText(Cheeseecake.value, widthMax - margenderecho, starttxt + 4 * interline);
    WriteText(Tiramisu.value, widthMax - margenderecho, starttxt + 5 * interline);
    WriteText("$ " + Total, widthMax - margenderecho, starttxt + 7 * interline);

}

function PrintElem(IDcanvas)
{

    const dataUrl = document.getElementById(IDcanvas).toDataURL(); 

    let windowContent = '<!DOCTYPE html>';
    windowContent += '<html>';
    windowContent += '<head><title>Print canvas</title></head>';
    windowContent += '<body>';
    windowContent += '<img src="' + dataUrl + '">';
    windowContent += '</body>';
    windowContent += '</html>';
    
    const printWin = window.open('', '', 'width=' + screen.availWidth + ',height=' + screen.availHeight);
    printWin.document.open();
    printWin.document.write(windowContent); 
    
    printWin.document.addEventListener('load', function() {
        printWin.focus();
        printWin.print();
        printWin.document.close();
        printWin.close();            
    }, true);
}