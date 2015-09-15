$(function() {
	$("#bienvenido").on("click",function() {
		$("#containter").load("bienvenido.html");
	});
});

function cargarPagina(pagina) {
	$("#containter").load(pagina+".html #pagina");
	$("#pagina").show();
}
