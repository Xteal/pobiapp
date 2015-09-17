$(function() {
	$.mobile.loading( "hide" );
	$(".back-to-menu").on("tap", function() {
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
	$("#pagina-container").load(pagina+".html");
	$(".back-to-menu i").show();
	$("nav").hide();
	$("#pagina").show();
	window.scrollTo(0,0);
}
