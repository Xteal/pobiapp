$(function() {
	$.mobile.loading( "hide" );
	$(".back-to-menu").on("tap", function() {
		window.location.hash = '';
		$("#pagina").hide();
		$(".back-to-menu i").hide();
		$("nav").show();
	});
	
	$("nav li").on("tap",function(event) {
		event.preventDefault();
		var id= $(this).attr("id");
		var accion = $(this).data("accion");
		switch(accion){
			case "open-page":
				cargarPagina(id);
				break;
			case "open-link":
				window.open($(this).data("href"));
				break;
		}
	});
});

function cargarPagina(pagina) {
	$("nav").hide();
	$("#pagina-container").load(pagina+".html");
	window.location.hash = pagina;
	$(".back-to-menu i").show();
	$("#pagina").show();
	$("html, body").animate({
		scrollTop:0
	},"slow");
}
