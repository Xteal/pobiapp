$(function() {
	$(".back-to-menu").on("click", function() {
		$("#pagina").hide();
		$(".back-to-menu").hide();
		$("nav").show();
	});
	
	$("nav .open-page").on("click",function(event) {
		event.preventDefault();
		var id=$(this).find("a").attr("id");
		if(id!=undefined) {
			cargarPagina(id);
		}
	});
});

function cargarPagina(pagina) {
	$("#pagina").load(pagina+".html");
	$(".back-to-menu").show();
	$("nav").hide();
	$("#pagina").show();
	
}
