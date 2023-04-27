window.onload = function () {
    
    var images = document.querySelectorAll(".artThumb");
    for (var i = 0; i < images.length; i++) {
	images[i].onmouseover = function() {
	    var newNode = document.createElement("img");
	    var oldsrc=this.src;
	    var parts=oldsrc.split("/");
	    var newsrc="images/" + parts[parts.length-1];
		newNode.src = newsrc;
		newNode.style = "border:solid 3px black; width:100px; height:120px;";
	    newNode.className='bigImg';
	    this.parentNode.appendChild(newNode);
	}
	images[i].onmouseout = function(){
	    var images = document.querySelectorAll(".bigImg");
	    for (var i=0; i < images.length; i++){
		images[i].parentNode.removeChild(images[i]);
	    }
	}
    }
}

window.addEventListener('load', function() {
	var filterB = document.querySelector('#set input [type="submit"][value="Filtrar"]');
	var genreS = document.querySelector('#set select [name="action"]');
	var rows = document.querySelectorAll('#art-table tbody tr');
  
	filterB.addEventListener('click', function(event) {
	  event.preventDefault();
	  var selectedI = genreS.selectedI;
	  var selectedG = genreS.options[selectedI].text;
	  for (var i = 0; i < rows.length; i++) {
		var genreCell = rows[i].querySelectorAll('td')[5];
		var genre = genreCell.textContent;
		if (selectedG === 'Género' || selectedG === genre) {
		  rows[i].style.display = '';
		} else {
		  rows[i].style.display = 'none';
		}
	  }
	});
});

var openM=document.getElementById("boton");
var modal=document.getElementById("tablita");
var closeM=document.getElementById("close");
openM.onclick=function(){
	modal.style.visibility='visible'
}
closeM.onclick=function(){
	modal.style.visibility='hidden'
}

var openM2=document.getElementById("boton2");
var modal2=document.getElementById("tablita2");
var closeM2=document.getElementById("close2");

openM2.onclick=function(){
	modal2.style.visibility='visible'
}

closeM2.onclick=function(){
	modal2.style.visibility='hidden'
}

var openM3=document.getElementById("boton3");
var modal3=document.getElementById("tablita3");
var closeM3=document.getElementById("close3");

openM3.onclick=function(){
	modal3.style.visibility='visible'
}

closeM3.onclick=function(){
	modal3.style.visibility='hidden'
}

var openM4=document.getElementById("boton4");
var modal4=document.getElementById("tablita4");
var closeM4=document.getElementById("close4");

openM4.onclick=function(){
	modal4.style.visibility='visible'
}

closeM4.onclick=function(){
	modal4.style.visibility='hidden'
}

var openM5=document.getElementById("boton5");
var modal5=document.getElementById("tablita5");
var closeM5=document.getElementById("close5");

openM5.onclick=function(){
	modal5.style.visibility='visible'
}

closeM5.onclick=function(){
	modal5.style.visibility='hidden'
}









