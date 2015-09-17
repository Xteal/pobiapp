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
				$.mobile.loading("show");
				window.open($(this).data("href"),function() {
					$.mobile.loading( "hide" );
				});
				break;
		}
	});
});

function cargarPagina(pagina) {
	$.mobile.loading("show");
	$("#pagina-container").load(pagina+".html",function() {
		$.mobile.loading( "hide" );
	});
	$(".back-to-menu i").show();
	$("nav").hide();
	$("#pagina").show();
	
}
