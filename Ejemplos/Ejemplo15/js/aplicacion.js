class Aplicacion {
 constructor(contenedorRegalo, contenedorTitulo) {
 this.contenedorRegalo = contenedorRegalo;
 this.contenedorTitulo = contenedorTitulo;
 this.regalos = [];
 this.cargarContenedorRegalo();
 }
 cargarContenedorRegalo() {
 for (const enlace of REGALOS_ENLACES) {
 const regalo = new Regalo(this.contenedorRegalo, enlace);
 this.regalos.push(regalo);
 }
 }
}

const contenedorRegalo = document.querySelector('#regalo');
const contenedorTitulo = document.querySelector('#titulo');
const app = new Aplicacion(contenedorRegalo, contenedorTitulo);