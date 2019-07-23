mapContainer = document.getElementById("map-container");

// let mymap = L.map(mapContainer).setView([51.505, -0.09], 13);
// L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
//     attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     id: 'mapbox.streets',
//     accessToken: 'pk.eyJ1IjoiaW1sciIsImEiOiJjanljbWowbDgwanZlM2xzOGZqcDFxbHVuIn0.niCENs8TKhS-7PSMjHFE3A'
// }).addTo(mymap);

let map = L.map(mapContainer).fitWorld();
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiaW1sciIsImEiOiJjanljbWowbDgwanZlM2xzOGZqcDFxbHVuIn0.niCENs8TKhS-7PSMjHFE3A', {
	maxZoom: 18,
	attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
		'<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
		'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
		id: 'mapbox.streets'
}).addTo(map);
map.locate({setView: true, maxZoom: 16});
function onLocationFound(e) {
    var radius = e.accuracy / 2;

    L.marker(e.latlng).addTo(map);
        //.bindPopup("You are within " + radius + " meters from this point").openPopup();

    //L.circle(e.latlng, radius).addTo(map);
}

map.on('locationfound', onLocationFound);
