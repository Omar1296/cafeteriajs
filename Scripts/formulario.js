(function(){
	//Crear objeto de propiedades
var propFormulario={
	formulario: document.formulario_contacto,
	elementos: document.formulario_contacto.elements,
	error: null,
	texto_error: null
}



//Crar objeto de metodos
var metFormulario={
	inicio: function(){
		for (var i = 0; i < propFormulario.elementos.length; i++) {
			
			if(propFormulario.elementos[i].type=='text'||propFormulario.elementos[i].type=='email'||propFormulario.elementos[i].nodeName.toLowerCase()=='textarea'){
				propFormulario.elementos[i].addEventListener('focus', metFormulario.focusInput);
				propFormulario.elementos[i].addEventListener('blur', metFormulario.blurInput);
			}
		}

		propFormulario.formulario.addEventListener('submit', metFormulario.validar_input);
	},

	focusInput: function(){
		this.parentElement.children[1].className='label label_active';
	},

	blurInput: function(){

		if(this.value==''){
			this.parentElement.children[1].className='label';
		}
		
	}, 

	validar_input: function(e){
		for (var i = 0; i < propFormulario.elementos.length; i++) {
			if(propFormulario.elementos[i].value==''){
				e.preventDefault();

				if(propFormulario.elementos[i].parentElement.children.length<3){
					propFormulario.error=document.createElement('p');
					propFormulario.texto_error=document.createTextNode('Por favor llenar el campo con '+propFormulario.elementos[i].name);
					propFormulario.error.appendChild(propFormulario.texto_error);
					propFormulario.error.className='error';

					propFormulario.elementos[i].parentElement.appendChild(propFormulario.error);
				}
			}

			else if(propFormulario.elementos[i].parentElement.children.length>=3){
				propFormulario.error=propFormulario.elementos[i].parentElement.getElementsByTagName('p')[0];
				propFormulario.elementos[i].parentElement.removeChild(propFormulario.error);	
			}			
		}
	}

}

metFormulario.inicio();
}())


