$(document).ready(function() {

	// No Seleccionar
	function disableselect(e){
		return false
	}
	function reEnable(){
		return true
	}
	document.onselectstart=new Function ("return false")
	if (window.sidebar){
	document.onmousedown=disableselect
	document.onclick=reEnable
	}
	// document.oncontextmenu = function(){return false;} //No Clic derecho

	//efectos de seleccion para Menu1
	$('.nav ul li span').removeClass('active1');
 	
 	$('.nav ul li span').click(function(){
        $('.nav ul li span').removeClass('active1');
        $(this).addClass('active1');
    });

 	//para saber el tamaño vertical de la pantalla
 		// alert(screen.height+" Le estoy quitando: "+170+" Me queda solo: "+(screen.height-170));
	$('.ea-container').css("height",screen.height-170);
	
    //carga por defecto
    $('.aside').load('vistas/tablero/menu2.html');
    $('.main').load('vistas/tablero/base.html');
    $('#tablero span').addClass('active1');
});