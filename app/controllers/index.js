/*
 * Funcion para mostrar/ocultar el menu que se encuentra en un panel lateral
 */
function toggleMenu(event){
    var menuView = $.menu_view,
    	headerController = $.header_controller,
    	menuIcon = $.menu_icon;
    //Animamos el fondo del control del actionbar
    headerController.animate({
		backgroundColor: "#000",
		duration : 200,
		autoreverse : true,
    });
    //Si el menu esta oculto
    if(menuView._toggle == false){
    	menuIcon.animate({
			left: -15,
			duration: 200
    	});
    	menuView.animate({
			left: 0,
			duration: 200,
			curve:Ti.UI.ANIMATION_CURVE_EASE_IN_OUT
		});
		menuView._toggle=true;
	//Si el menu esta visible
    }else{
    	menuView.animate({
			left: -200,
			duration: 200,
			curve:Ti.UI.ANIMATION_CURVE_EASE_IN_OUT
		});
		menuIcon.animate({
			left: -10,
			duration: 200
		});
		menuView._toggle=false;
    }
}

/*
 * Funcion para cambiar a la vista elegida en el menu
 */

function menuItemFunction(e){
	var menuView = $.menu_view,
		menuIcon = $.menu_icon;
	//Animamos el fondo del item seleccionado
	e.source.animate({
	    backgroundColor: "#000",
	    duration : 200,
	    autoreverse : true,
    });
	//Ocultamos el menu
	menuView.animate({
		left: -200,
		duration: 200,
		curve:Ti.UI.ANIMATION_CURVE_EASE_IN_OUT
	});
	//Movemos el icono del menu a su sitio
	menuIcon.animate({
		left: -10,
		duration: 200
	});
	//Modificamos el titulo de la ventana y marcamos como oculto el menu
	header_title.text=e.source._titleView;
	menuView._toggle=false;
};


$.index.open();
