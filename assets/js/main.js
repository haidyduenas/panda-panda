var pictures = ["assets/img/a1.jpg","assets/img/a2.jpg", "assets/img/a3.jpg", "assets/img/a4.jpg"];

var panditas = document.getElementById('contPanda');
	 for (var i = 0; i < pictures.length; i++) {
	 	var myDiv = document.createElement('div');
	 		myDiv.setAttribute('class','contImg')
	 	var myImg = document.createElement('img');
	 		myImg.src = pictures[i];
	 		myImg.setAttribute ('class','editar-pandas')
	 	var myBtn = document.createElement('button');
	 		myBtn.setAttribute ('class','btn');
	 		myBtn.setAttribute('onclick', 'eliminar(this)')
		var b = document.createTextNode('X');
	 		myBtn.appendChild(b);
		 	myDiv.appendChild(myBtn);
		 	myDiv.appendChild(myImg);
		 	panditas.appendChild(myDiv);
	 }

function eliminar(event) {

	event.parentNode.style.display = "none";
 }

document.getElementById("restaurar").addEventListener("click", restaurarImagen);

 function restaurarImagen () {
 	var pictures = document.getElementsByClassName('contImg');
	for (var i = 0; i < pictures.length; i++) {
		pictures[i].style.display = 'inline-block';
	}
 }