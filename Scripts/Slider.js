(function(){
	//Crear objeto con propiedades
var propSlider={
	slider: document.getElementById('cont_fotos'),
	primerSlide: null
}


//crear objeto con metodos
var metSlider={
	inicio: function(){
		setInterval(metSlider.moverSlide, 3000);
	},

	moverSlide: function(){
		propSlider.slider.style.transition='all 1s ease';
		propSlider.slider.style.marginLeft='-100%';

		setTimeout(function(){
			propSlider.primerSlide=propSlider.slider.firstElementChild;
			propSlider.slider.appendChild(propSlider.primerSlide);
			propSlider.slider.style.transition='unset';
			propSlider.slider.style.marginLeft='0%';
		},1000);
	}
}

metSlider.inicio();
}())


