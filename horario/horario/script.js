$(document).ready(function(){
	$('select').material_select();
	$('.btn-dias-container > .btn-flat').on('click', function(){
		$(this).addClass('selected').siblings().removeClass('selected');
		$('.btn-dias-container').addClass('selected');
		$('table.horario.'+$(this).attr('for')).addClass('show').siblings().removeClass('show');
	});
	$('.btn-dias-container .cancelar').on('click', function(){
		$('.btn-dias-container, .btn-dias-container > .btn-flat.selected').removeClass('selected');
		$('table.horario').removeClass('show');
	});
});