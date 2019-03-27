
function editarNota(id) {
var Nota;
for (var i = 0; i < localStorage.length; i++) {
var clave =localStorage.key(i);
if (clave ==id) {
nota = $.parseJSON(localStorage.getItem(clave));
$("#id").val(nota.id);
$("#nombre").val(nota.nombre);
$("#nota").val(nota.nota);
}
}
}

function listarNotas(){
var tabla ="";
var parrafo1 =$("#p1");
tabla += '<table  >';
tabla += '<tr>';
tabla += '<th>Codigo</th>';
tabla += '<th>Nombre</th>';
tabla += '<th>Nota</th>';
tabla += '<th>Editar</th>';
tabla += '<th>Borrar</th>';
tabla += '</tr>' ;

for (var i = 0; i < localStorage.length; i++) {
var clave= localStorage.key(i);
var nota = $.parseJSON(localStorage.getItem(clave));
tabla+= '<tr>';
tabla+= '<td>'+nota.id+'</td>';
tabla+= '<td>'+nota.nombre+'</td>';
tabla+= '<td>'+nota.nota+'</td>';
tabla+= '<td><button onclick="editarNota(\''+nota.id+'\');">Editar</button></td>';
tabla+= '<td><button onclick="eliminarNota(\''+nota.id+'\');">Borrar</button></td>';
tabla+= '</tr>';
}

tabla += '<table>';
$(parrafo1).html(tabla);
}


function eliminarNota(id){
localStorage.removeItem(id);
listarNotas();
}
$(document).ready (function(){
var contador ;
if (localStorage.length >0) {
contador= localStorage.length+1;
}else{
contador = 1;
}

$("#id").val(contador);

$("#boton1").click(function(){
var id = $("#id").val();
var nombre = $("#nombre").val();
var nota = $("#nota").val();
var nota = {
id:id,
nombre:nombre,
nota:nota
};
localStorage.setItem(id,JSON.stringify(nota));
contador = localStorage.length+1;

listarNotas();
restablecer();
});


$("#boton2").click(function(){
restablecer (9);

var text1 ="";
var nota =0;

for (var i = 0; i < localStorage.length; i++) {
var clave = localStorage.key(i);
var estud = $.parseJSON(localStorage.getItem(clave));
nota += estud.nota;
} 

});

function restablecer (){
$("#id").val(contador);
$("#nombre").val("");
$("#nota").val("");
}
listarNotas();
$("#nota").val();


});

//+++++++++++++++++++++++++++++++++++++//

function promedio() {
var total = localStorage.length;
var suma = 0;
for (var i = 0; i < total; i++) {
var codigo = localStorage.key(i);
var estudiante = $.parseJSON(localStorage.getItem(codigo));
suma += parseInt(estudiante.nota);
};

var promedio = suma / total;
document.getElementById('prom').innerHTML ="Promedio es:  "+"<b>"+promedio+"</b>";

};

function mayor_nota() {
var mayor = 0;
for (var i = 0; i < localStorage.length; i++) {
var codigo = localStorage.key(i);
var estudiante = $.parseJSON(localStorage.getItem(codigo));
var nota = parseInt(estudiante.nota);
if (nota > mayor) {
mayor = nota;
};
};
document.getElementById('prom').innerHTML = "Mayor Nota:  "+"<b>" +mayor+"</b>";
};

function menor_nota() {
var menor = $.parseJSON(localStorage.getItem(localStorage.key(0))).nota;
for (var i = 0; i < localStorage.length; i++) {
var codigo = localStorage.key(i);
var estudiante = $.parseJSON(localStorage.getItem(codigo));
var nota = parseInt(estudiante.nota);
if (nota < menor) {
menor = nota;
};
};
document.getElementById('prom').innerHTML = "Menor Nota:  "+ "<b>"+menor+"</b>";
};