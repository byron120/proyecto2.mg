
//Menú principal de mi página web
$(document).ready(function() {
	// body...
	$('.info-item').hide();	// hide = ocultar
	$('.info-item[category="welcome"]').show(); // show = mostrar

	$('.category_item').click(function() {
		// body...
		var	filtrar = $(this).attr('category'); // almacenar en una variable la categoria cuando se presione
		console.log(filtrar); // mostrar en consola

	$('.info-item').css('transform','scale(0)');
	function ocultarinformacion() {
		// body...
		$('.info-item').hide();
	}
	setTimeout(ocultarinformacion, 400);

	function mostrarInformacion() {
		// body...
		$('.info-item[category="' + filtrar + '"]').show();
		$('.info-item[category="' + filtrar + '"]').css('transform','scale(1)');
	}
	setTimeout(mostrarInformacion, 400);

	});
	

});
