$(function() {
	$.mobile.loading( "hide" );
	$(".back-to-menu").on("tap", function() {
		var hashAntiguo = window.location.hash;
		alert(hashAntiguo);
		window.location.hash = '';
		$("#pagina").hide();
		$(".back-to-menu i").hide();
		$(".button-update i").hide();
		$("nav").show();
		$('html, body').animate({
			scrollTop: $(""+hashAntiguo).offset().top
		}, 2000);
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

function init() {
	document.addEventListener("deviceready", onDeviceReady, false);
} 
function onDeviceReady(){
	document.addEventListener("backbutton", backKeyDown, true);
	alert("ey");
}
function backKeyDown() { 
	window.history.back();
}

function cargarPagina(pagina) {
	$("nav").hide();
	$("#pagina-container").load(pagina+".html");
	window.location.hash = pagina;
	$(".back-to-menu i").show();
	$("#pagina").show();
	if(pagina=="facebook")
		$(".button-update i").show();
	$("html, body").animate({
		scrollTop:0
	},"slow");
}
