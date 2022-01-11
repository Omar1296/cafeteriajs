//Propiedades menu-movil
var propMenu={
	burger_menu: document.getElementById('burger-menu'),
	slide_menu: document.getElementById('slide-menu'),
	menu_activo: false,
	elem_menu: document.querySelectorAll('#slide-menu .menu-principal a')
}

//Metodos menu movil
var metMenu={
	inicio: function(){
		propMenu.burger_menu.addEventListener('click', metMenu.toogleMenu);

		for (var i = 0; i < propMenu.elem_menu.length; i++) {
			propMenu.elem_menu[i].addEventListener('click', metMenu.ocultarMenu);
		}
	},

	toogleMenu: function(){
		if(propMenu.menu_activo==false){
			propMenu.menu_activo=true;
			propMenu.slide_menu.className=propMenu.slide_menu.className+' slide_active';
		}
		else{
			propMenu.menu_activo=false;
			propMenu.slide_menu.className=propMenu.slide_menu.className.replace('slide_active', '');

		}
	},


	ocultarMenu:function(){
			propMenu.menu_activo=false;
			propMenu.slide_menu.className=propMenu.slide_menu.className.replace('slide_active', '');
	}
}

metMenu.inicio();
