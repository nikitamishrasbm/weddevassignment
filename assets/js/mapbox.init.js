mapboxgl.accessToken = 'pk.eyJ1Ijoid2l6YXJkbG93IiwiYSI6ImNrcnhjcmszajBueHAyb2t4b3d3bTdsancifQ.fA0Ykoc8TEWc2JAwb0egcQ';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/dark-v10',
	center: [85.2267,25.596], // starting position
    zoom: 13 // starting zoom
});

map.on('load', function () {
    map.resize();
    $('a[data-bs-toggle="tab"]').on('shown.bs.tab', function(){
        map.resize();
    });
});

// create the popup
var popup = new mapboxgl.Popup({ offset: 40 }).setText(
    '756 Livingston Street, Brooklyn, NY 11201'
);

// create DOM element for the marker
var el = document.createElement('div');
el.id = 'marker';

// create the marker
new mapboxgl.Marker(el)
    .setLngLat([85.2267,25.596])
    .setPopup(popup) // sets a popup on this marker
    .addTo(map);

// Add zoom and rotation controls to the map.
map.addControl(new mapboxgl.NavigationControl(), 'bottom-right');
