$(function() {
	$(".back-to-menu").on("click", function() {
		$("#pagina").hide();
		$(".back-to-menu").hide();
	});
	
	$("nav li>a").on("click",function() {
		var id=$(this).attr("id");
		if(id!="undefined") {
			cargarPagina($(this).attr("id"));
		}
	});
});

function cargarPagina(pagina) {
	$("#pagina").load(pagina+".html");
	$(".back-to-menu").show();
	$("nav").hide();
	$("#pagina").show();
	
}
