
function initialize() {

	var myLatLng = {lat: 43.6556029, lng: -79.4047799};

  var mapProp = {
    center: myLatLng,
    zoom:14,
    // mapTypeId:google.maps.MapTypeId.ROADMAP
  };

  var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);

  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: 'Blue Banana Market'
  });
}

google.maps.event.addDomListener(window, 'load', initialize);
