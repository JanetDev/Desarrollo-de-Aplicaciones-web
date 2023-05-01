class Regalo{
 constructor(containerElement, regaloSrc) {
    this.containerElement = containerElement;
    this.abrirRegalo = this.abrirRegalo.bind(this);
    this.regaloSrc = regaloSrc;
    this.image=document.createElement('img');
    this.image.src = 'https://www.shutterstock.com/image-photo/red-gift-golden-bow-on-260nw-1339215692.jpg'; 
    this.image.addEventListener('click', this.abrirRegalo);
    this.containerElement.appendChild(this.image);
 }
abrirRegalo (event) {
  this.image.src = this.regaloSrc;
  this.image.removeEventListener('click', this. abrirRegalo);
}
}

const containerElement = document.querySelector('#regalo');
const present = new Regalo (containerElement);