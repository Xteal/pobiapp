function GoogleMap(){
	this.initialize = function(){
		var map = showMap();
	}
	 
	var showMap = function(){
		var mapOptions = {
			zoom: 4,
			center: new google.maps.LatLng(-38.2650967, -0.7081296,18),
			mapTypeId: google.maps.MapTypeId.ROADMAP
		}
		 
		var map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);
		
		return map;
	}
}