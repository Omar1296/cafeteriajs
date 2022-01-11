(function(){
	// Objeto con propiedades
var propLightbox={
	imgContenedor: document.getElementsByClassName('lightbox'),
	imagen: null,
	imagenSRC: null,
	cuerpoDom: document.getElementsByTagName('body')[0],
	lightboxContenedor: null,
	modal: null,
	cerrarModal: null,
	animacion: 'fade'
}

// Objeto con metodos
var metodos={
	inicio: function(){
		for (var i = 0; i < propLightbox.imgContenedor.length; i++) {
			propLightbox.imgContenedor[i].addEventListener('click', metodos.capturaImagen);
		}
	},

	capturaImagen: function(){
		propLightbox.imagen=this;
		metodos.lightbox(propLightbox.imagen);
	},

	lightbox: function(imagen){
		propLightbox.imagenSRC=window.getComputedStyle(imagen, null).backgroundImage.slice(5,-2);
		propLightbox.cuerpoDom.appendChild(document.createElement('DIV')).setAttribute('id', 'lightbox_contenedor');
		propLightbox.lightboxContenedor=document.getElementById('lightbox_contenedor');
		propLightbox.lightboxContenedor.style.width='100%';
		propLightbox.lightboxContenedor.style.height='100%';
		propLightbox.lightboxContenedor.style.position='fixed';
		propLightbox.lightboxContenedor.style.zIndex='100';
		propLightbox.lightboxContenedor.style.background='rgba(0, 0, 0, .8)';
		propLightbox.lightboxContenedor.style.top='0';
		propLightbox.lightboxContenedor.style.left='0';

		propLightbox.lightboxContenedor.appendChild(document.createElement('DIV')).setAttribute('id', 'modal');
		propLightbox.modal=document.getElementById('modal');
		propLightbox.modal.style.height='100%';
		propLightbox.modal.appendChild(document.createElement('IMG')).setAttribute('src', propLightbox.imagenSRC);
	
		propLightbox.modal.getElementsByTagName('img')[0].setAttribute('class', 'img_modal');

		if(propLightbox.animacion=='fade'){
			document.getElementsByClassName('img_modal')[0].style.opacity=0;
			setTimeout(function(){
				document.getElementsByClassName('img_modal')[0].style.opacity=1;
			},50);
		}
		
		propLightbox.modal.innerHTML+='<i id="cerrar_modal" class="fas fa-times"></i>'

		propLightbox.cerrarModal=document.getElementById('cerrar_modal');
		propLightbox.cerrarModal.addEventListener('click', metodos.cerrar);
	},

	cerrar: function(){
		propLightbox.cuerpoDom.removeChild(propLightbox.lightboxContenedor);
	}


}

metodos.inicio();
}())

