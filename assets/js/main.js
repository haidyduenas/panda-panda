var pictures = ["assets/img/a1.jpg","assets/img/a2.jpg", "assets/img/a3.jpg", "assets/img/a4.jpg"];

var panditas = document.getElementById('contPanda');

 for (var i = 0; i < pictures.length; i++) {
 	var myImg = document.createElement('img');
 	myImg.src = pictures[i];
 	myImg.setAttribute ('class','editar-pandas')
 	var myBtn = document.createElement('button');
 	myBtn.setAttribute ('class','btn');
 	var b = document.createTextNode('aqui estoy');
 	myBtn.appendChild(b);
 	panditas.appendChild(myBtn);
 	panditas.appendChild(myImg);
 }