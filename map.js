mapboxgl.accessToken = 'pk.eyJ1IjoiYnVubnlqZW4xMDciLCJhIjoiY2o4cG00dm42MDd4NTM0bWxpeDV0YmtjZyJ9._HIBiWaPthHwE9E-poR5og';

var map = new mapboxgl.Map({
	container: 'map',
	minZoom: 10,
	maxZoom: 17,
	pitch: 0,
	bearing: 0,
	style: 'mapbox://styles/bunnyjen107/ck1v1k12o7w7r1coc8qsqgycl',
	attributionControl: 'City of Charlottesville Open Data Portal (http://opendata.charlottesville.org/)'
})


console.log('xxx');

map.on('load', () => {

	map.addSource("redPoint", {
		type: 'geojson',
		data: {
			"type": "FeatureCollection",
			"features": [
			{
				"type": "Feature",
				"properties": {
					"text": "downtown mall",
					"image": "downtown.jpg"
				},
				"geometry": {
					"type": "Point",
					"coordinates": [
					-78.48041921854019,
					38.03048146122872
					]
				}
			},
			
			{
				"type": "Feature",
				"properties": {
					"text": "dogwood"
				},
				"geometry": {
					"type": "Point",
					"coordinates": [
					-78.50554347038269,
					38.038991046309775
					]
				}
			},
			{
				"type": "Feature",
				"properties": {},
				"geometry": {
					"type": "Point",
					"coordinates": [
					-78.50593775510788,
					38.038811484840046
					]
				}
			}

// 

]
}
}


);

	map.addSource(	"yellowPoint", {
		type: 'geojson',
		data: {
			"type": "FeatureCollection",
			"features": [
			{
				"type": "Feature",
				"properties": {},
				"geometry": {
					"type": "Point",
					"coordinates": [
					-78.5036900639534,
					38.039124132762076
					]
				}
			}

// 
]
}
});


	map.addLayer({
		id: 'redPoint',
		source: 'redPoint',
		type: 'circle',
		paint: {
			'circle-radius': 8,
			'circle-color': 'red'
		}
	});


	map.addLayer({
		id: 'yellowPoint',
		source: 'yellowPoint',
		type: 'circle',
		paint: {
			'circle-radius': 8,
			'circle-color': 'yellow'
		}
	});

	// const popup = new mapboxgl.Popup();     //{ closeButton: false }
	// popup.setLngLat([-78.48041921854019, 38.03048146122872])
	// .setHTML(`<h1>Downtown mall</h1>test`)
	// .addTo(map)

});

map.on('click', e =>{
	const result = map.queryRenderedFeatures(e.point, { layers: ['redPoint']});
	if (result.length){
		const popup = new mapboxgl.Popup();     //{ closeButton: false }
	popup.setLngLat(e.lngLat)     //or the specific ones [-78.48041921854019, 38.03048146122872]
	.setHTML(`<h1>Downtown mall</h1>
		<div id="popup" class="popup" style="z-index: 10;">
		<img src="downtown.jpg" class="popup-image"></div>
		test`)
	.addTo(map)
	}
	// console.log('click', e.lngLat);
});