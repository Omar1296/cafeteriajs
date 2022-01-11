(function(){
	//Objeto con propiedades
var propTabs={
	primer_encabezado: document.getElementById('encabezado-menu').firstElementChild,
	primer_contenido: document.getElementById('contenido-menu').firstElementChild,
	enlace_encabezado: document.querySelectorAll('#encabezado-menu li a'),
	li_encabezado: document.querySelectorAll('#encabezado-menu li'),
	divs_contendido: document.querySelectorAll('#contenido-menu > div'),
	contenido_activo: null
}


//Objeto con metodos
var metTabs={
	inicio: function(){
		propTabs.primer_encabezado.className='activo';
		propTabs.primer_contenido.className='activo';

		for (var i = 0; i < propTabs.enlace_encabezado.length; i++) {
			propTabs.enlace_encabezado[i].addEventListener('click', metTabs.evento);
		}

	},	

	evento: function(e){

		e.preventDefault();
		for (var i = 0; i < propTabs.li_encabezado.length; i++) {
			propTabs.li_encabezado[i].className='';
 		}

 		for (var i = 0; i < propTabs.divs_contendido.length; i++) {
			propTabs.divs_contendido[i].className='desactivado';
 		}

 		this.parentElement.className='activo';
 		propTabs.contenido_activo = this.getAttribute('href');
 		document.querySelector(propTabs.contenido_activo).className='activo';
 		document.querySelector(propTabs.contenido_activo).style.opacity = 0;
 		setTimeout(function(){
 			document.querySelector(propTabs.contenido_activo).style.opacity = 1;
 		}, 100)
 
	}	
	
}

metTabs.inicio();
}())



