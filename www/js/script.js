
jq(function() {	
	jq("div[data-role=header]").toolbar({ position: "fixed" });
	jq( window ).on( "pagebeforeshow", function( event, data ) {
		if(jq.mobile.activePage.attr('id') == 'menu'){
			jq(".back-to-menu i").hide();
			jq(".button-update i").hide();
		}
		if(jq.mobile.activePage.attr('id') == 'facebook')
			jq(".button-update i").show();
		if(jq.mobile.activePage.attr('id') != 'menu')
			jq(".back-to-menu i").show();
		
		jq.mobile.resetActivePageHeight();
	});	
	jq.mobile.loading( "hide" );
	jq(".back-to-menu").on("tap", function() {
		var hashAntiguo = window.location.hash;
		window.location.hash = '';
		jq(".back-to-menu i").hide();
		jq(".button-update i").hide();
		jq.mobile.navigate( "#menu");
		jq.mobile.resetActivePageHeight();
	});
	
	jq("nav li").on("tap",function(event) {
		event.preventDefault();
		var id= jq(this).attr("id");
		var accion = jq(this).data("accion");
		switch(accion){
			case "open-page":
				cargarPagina(id);
				break;
			case "open-link":
				window.open(jq(this).data("href"));
				break;
		}
	});
});

function onLoad() {
	document.addEventListener("deviceready", onDeviceReady, false);  
}

function onDeviceReady() {  
	document.addEventListener("backbutton", onBackKeyDown, false); 
}
	
function onConfirm(button) {
	if(button==2){
	navigator.app.exitApp();
  }
}
function onBackKeyDown() {  
    if(jq.mobile.activePage.attr('id') == 'menu'){
		navigator.notification.confirm('¿Quieres cerrar la aplicación?',onConfirm,"Salir",'No,Si');
    }else{
        navigator.app.backHistory();
	}
}

function cargarPagina(pagina) {
	if(jq("div[id='"+pagina+"']").length==0) {
		var jqdiv = jq("<div>", {id: pagina, "data-role": "page"});
		jq("body").append(jqdiv);
		jq(jqdiv).load(pagina+".html",function() {
			window.location.hash = pagina;
			jq(".back-to-menu i").show();
			if(pagina=="facebook")
				jq(".button-update i").show();
			jq.mobile.navigate( "#"+pagina, function() {
				jq.mobile.resetActivePageHeight();
			});
		});
	}else {
		jq.mobile.navigate( "#"+pagina, function() {
				jq.mobile.resetActivePageHeight();
		});
	}	
}
