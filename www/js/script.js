$(function() {
	$(".back-to-menu i").on("click", function() {
		$("#pagina").hide();
		$(".back-to-menu i").hide();
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
	$(".back-to-menu i").show();
	$("nav").hide();
	$("#pagina").show();
	
}
