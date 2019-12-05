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
					"text": "Downtown Mall",
					"image": "downtown",
					"description": "A visit to Charlottesville isn't complete without a stop at the Downtown Mall. It is one of the most beautiful and successful pedestrian malls in the nation, and it's located in historic downtown Charlottesville. A wonderful mix of restored and renovated buildings that typified small 'downtowns' throughout the country can now be seen by visitors as they enjoy shopping, dining and visiting along the brick-paved pedestrian area.",
					"time": "All year"
				},
				"geometry": {
					"type": "Point",
					"coordinates": [
					-78.48041921854019,
					38.03048146122872
					]
				}
			},
			
			// {
			// 	"type": "Feature",
			// 	"properties": {
			// 		"text": "dogwood"
			// 	},
			// 	"geometry": {
			// 		"type": "Point",
			// 		"coordinates": [
			// 		-78.50554347038269,
			// 		38.038991046309775
			// 		]
			// 	}
			// },
			{
				"type": "Feature",
				"properties": {				
					"text": "Hackberry",
					"image": "hackberry",
					"description": "Celtis occidentalis, commonly known as the common hackberry, is a large deciduous tree native to North America. It is also known as the nettletree, sugarberry, beaverwood, northern hackberry, and American hackberry.",
					"time": "Late autumn"},
					"geometry": {
						"type": "Point",
						"coordinates": [
						-78.50593775510788,
						38.038811484840046
						]
					}
				}

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
				"properties": {
					"text": "Sugarmaple",
					"image": "sugarmaple",
					"description": "Acer saccharum, the sugar maple or rock maple, is a species of maple native to the hardwood forests of eastern Canada, from Nova Scotia west through southern Quebec, central and southern Ontario to southeastern Manitoba around Lake of the Woods, and the northern parts of the Central and Eastern United States, from Minnesota eastward to the highlands of the upper eastern states and the interior Midwest. Sugar maple is best known for its bright fall foliage and for being the primary source of maple syrup.",
					"time": "Late autumn"
				},
				"geometry": {
					"type": "Point",
					"coordinates": [
					-78.5036900639534,
					38.039124132762076
					]
				}
			},
			{
				"type": "Feature",
				"properties": {
					"text": "Green Ash",
					"image": "greenash",
					"description": "Fraxinus pennsylvanica, the green ash or red ash, is a species of ash native to eastern and central North America, from Nova Scotia west to southeastern Alberta and eastern Colorado, south to northern Florida, and southwest to Oklahoma and eastern Texas.",
					"time": "Late autumn"
				},
				"geometry": {
					"type": "Point",
					"coordinates": [
					-78.50202441215515,
					38.03936284277691
					]
				}
			},
			{
				"type": "Feature",
				"properties": {
					"text": "Sunset from Water St. Paking Garage",
					"image": "sunset",
					"description": "While gorgeous sunsets can be captured on the Downtown Mall, adding a bit of height to the equation can yield some rewarding results. Never underestimate the power of a parking garage to get this added height. You'll find that these structures can give you the perfect bird's-eye view of the city, as the golden light begins to filter down from the sky. With multiple parking garages situated across the city, it's pretty easy to get sunset pictures like these!  ",
					"time": "All year"
				},
				"geometry": {
					"type": "Point",
					"coordinates": [
					-78.48114609718323,
					38.02944832861367
					]
				}
			}

// 
]
}
});

	map.addSource(	"purplePoint", {
		type: 'geojson',
		data: {
			"type": "FeatureCollection",
			"features": [
			{
				"type": "Feature",
				"properties": {
					"text": "Wildflowers in the Enclosed Garden",
					"image": "purple",
					"description": "A peaceful place with rounded stone wall and trees surrounded. Good for taking a break!",
					"time": "Spring"
				},
				"geometry": {
					"type": "Point",
					"coordinates": [
					-78.50439548492432,
					38.03833406043785
					]
				}
			},
			{
				"type": "Feature",
				"properties": {
					"text": "Charlottesville City Market",
					"image": "market",
					"description": "Charlottesville’s oldest open-air market; established in 1973 with the help of the Cason brothers. It offers a little bit of everything. Fresh fruits and veggies when in season, handmade crafts, homemade baked goods, freshly roasted coffee, doughnuts, organic bagels, authentic cultural foods made on location, fresh artisan bread, arts, crafts and much much more. Come taste the Piedmont at the Charlottesville City Market.",
					"time": "April - December, Saturday morning"
				},
				"geometry": {
					"type": "Point",
					"coordinates": [
					-78.48166912794113,
					38.02958988343255
					]
				}
			}

			]
		}
	});

	map.addSource(	"bluePoint", {
		type: 'geojson',
		data: {
			"type": "FeatureCollection",
			"features": [
			{
				"type": "Feature",
				"properties": {	"text": "IX Art Park",
				"image": "ix",
				"description": " IX Art Park is a public, non-commercial, interactive space for spontaneous dreaming – for residents, visitors, families and solo acts. Indulge your eyes, ears, mind, heart, and soul. It's all about possibility. And the power of collective creativity. The IX Art Park marks Charlottesville as a cultural magnet in Virginia, and will provide a new model for community building and the role of private entities in creating civic infrastructure.",
				"time": "All year"},
				"geometry": {
					"type": "Point",
					"coordinates": [
					-78.48236113786697,
					38.025871337710214
					]
				}
			},
			{
				"type": "Feature",
				"properties": {
					"text": "Mountain Vista",
					"image": "blue",
					"description": "Looking out from the parking garage, there is a great view of nature instead of the very downtown feature!",
					"time": "Almost all year"
				},
				"geometry": {
					"type": "Point",
					"coordinates": [
					-78.48008930683136,
					38.02898563259595
					]
				}
			},
			{
				"type": "Feature",
				"properties": {
					"text": "Washington Park Pool",
					"image": "pool",
					"description": "Amenities:  Zero-Depth Play Area, Water Slides, Lap Swimming, Mushroom Waterfall, Locker Rooms, Family Changing Room, Snack Bar",
					"time": "Late May to Early September, check ahead."
				},
				"geometry": {
					"type": "Point",
					"coordinates": [
					-78.49047213792801,
					38.0400620685195
					]
				}
			}
			]
		}
	});

	map.addSource(	"blackPoint", {
		type: 'geojson',
		data: {
			"type": "FeatureCollection",
			"features": [
			{
				"type": "Feature",
				"properties": {
					"text": "Lighting of the Lawn",
					"image": "lightingofthelawn",
					"description": "Don't miss this year's Lighting of the Lawn at the Unviersity of Virginia! Enjoy live performances by various mucial groups and await the grand illumination of the rotunda and surrounding pavilions. Visit the website to livestream the event on the day of. ",
					"time": "Annually, usually in late November or early December"
				},
				"geometry": {
					"type": "Point",
					"coordinates": [
					-78.50425064563751,
					38.03403921338882
					]
				}
			},
			{
				"type": "Feature",
				"properties": {
					"text": "Scott Stadium",
					"image": "scottstadium",
					"description": "Scott Stadium located in Charlottesville, Virginia, is the home of the Virginia Cavaliers football team. It sits on the University of Virginia's Grounds, east of Hereford College and first-year dorms on Alderman Road but west of Brown College and the Lawn.",
					"time": "See events schedule"
				},
				"geometry": {
					"type": "Point",
					"coordinates": [
					-78.51363837718964,
					38.03106457259104
					]
				}
			}
			]
		}
	});

	map.addSource(	"whitePoint", {
		type: 'geojson',
		data: {
			"type": "FeatureCollection",
			"features": [
			{
				"type": "Feature",
				"properties": {
					"text": "The Rotunda",
					"image": "rotunda",
					"description": "The Rotunda is a building located on The Lawn on the original grounds of the University of Virginia. It was designed by Thomas Jefferson to represent the 'authority of nature and power of reason' and was inspired by the Pantheon in Rome.",
					"time": "Winter"
				},
				"geometry": {
					"type": "Point",
					"coordinates": [
					-78.50334405899048,
					38.03569549511056
					]
				}
			},
			{
				"type": "Feature",
				"properties": {
					"text": "Sprint Pavilion",
					"image": "sprint",
					"description": "Located on the east end of the historic downtown mall, the Charlottesville Pavilion is the city’s premier outdoor venue for live performance. Open since July of 2005, it features premium seating, a spacious lawn, and a professional stage house; all within easy walking distance of Downtown Charlottesville’s many restaurants and other attractions. The Pavilion provides Charlottesville with a comfortable and convenient venue to enjoy local and national performing artists.",
					"time": "All year"
				},
				"geometry": {
					"type": "Point",
					"coordinates": [
					-78.47667217254639,
					38.029205360749565
					]
				}
			},
			{
				"type": "Feature",
				"properties": {
					"text": "Flowering Dogwood",
					"image": "dogwoodspr",
					"description": "Cornus florida, the flowering dogwood, is a species of flowering tree in the family Cornaceae native to eastern North America and northern Mexico. An endemic population once spanned from southernmost coastal Maine south to northern Florida and west to the Mississippi River.",
					"time": "Spring"
				},
				"geometry": {
					"type": "Point",
					"coordinates": [
					-78.50289344787596,
					38.0371763989641
					]
				}
			}
			]
		}
	});


	map.addLayer({
		id: 'redPoint',
		source: 'redPoint',
		type: 'circle',
		paint: {
			'circle-radius': 10,
			'circle-color': '#e44054'
		}
	});

	map.addLayer({
		id: 'purplePoint',
		source: 'purplePoint',
		type: 'circle',
		paint: {
			'circle-radius': 10,
			'circle-color': '#8560a8'
		}
	});

	map.addLayer({
		id: 'yellowPoint',
		source: 'yellowPoint',
		type: 'circle',
		paint: {
			'circle-radius': 10,
			'circle-color': '#ffd200'
		}
	});

	map.addLayer({
		id: 'bluePoint',
		source: 'bluePoint',
		type: 'circle',
		paint: {
			'circle-radius': 10,
			'circle-color': '#248098'
		}
	});

	map.addLayer({
		id: 'blackPoint',
		source: 'blackPoint',
		type: 'circle',
		paint: {
			'circle-radius': 10,
			'circle-color': '#2a2a2a'
		}
	});

	map.addLayer({
		id: 'whitePoint',
		source: 'whitePoint',
		type: 'circle',
		paint: {
			'circle-radius': 10,
			'circle-color': '#ffffff',
			// 'circle-border-color': 'gray'
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
		const popup = new mapboxgl.Popup();
		// const content = result[0].properties.text.image;   
		popup.setLngLat(e.lngLat)     
		popup.setHTML('<h2> ' + result[0].properties.text + '</h3><p>' + '<p>Featured color: Red </p>' + 'Time:'+  result[0].properties.time + '<p> '+ result[0].properties.description + '</p><img class="popup-image" src=" ./' + result[0].properties.image +'.jpg">'   );
		popup.addTo(map)
	}
	// console.log('click', e.lngLat);
});


map.on('click', e =>{
	const result = map.queryRenderedFeatures(e.point, { layers: ['yellowPoint']});
	if (result.length){
		const popup = new mapboxgl.Popup();
		// const content = result[0].properties.text.image;   
		popup.setLngLat(e.lngLat)     
		popup.setHTML('<h2> ' + result[0].properties.text + '</h3><p>' + '<p>Featured color: Yellow </p>' + 'Time:'+  result[0].properties.time + '<p> '+ result[0].properties.description + '</p><img class="popup-image" src=" ./' + result[0].properties.image +'.jpg">'   );
		popup.addTo(map)
	}
});


map.on('click', e =>{
	const result = map.queryRenderedFeatures(e.point, { layers: ['purplePoint']});
	if (result.length){
		const popup = new mapboxgl.Popup();
		// const content = result[0].properties.text.image;   
		popup.setLngLat(e.lngLat)     
		popup.setHTML('<h2> ' + result[0].properties.text + '</h3><p>' + '<p>Featured color: Purple </p>' + 'Time:'+  result[0].properties.time + '<p> '+ result[0].properties.description + '</p><img class="popup-image" src=" ./' + result[0].properties.image +'.jpg">'   );
		popup.addTo(map)
	}
});

map.on('click', e =>{
	const result = map.queryRenderedFeatures(e.point, { layers: ['bluePoint']});
	if (result.length){
		const popup = new mapboxgl.Popup();
		// const content = result[0].properties.text.image;   
		popup.setLngLat(e.lngLat)     
		popup.setHTML('<h2> ' + result[0].properties.text + '</h3><p>' + '<p>Featured color: Blue </p>' + 'Time:'+  result[0].properties.time + '<p> '+ result[0].properties.description + '</p><img class="popup-image" src=" ./' + result[0].properties.image +'.jpg">'   );
		popup.addTo(map)
	}
});


map.on('click', e =>{
	const result = map.queryRenderedFeatures(e.point, { layers: ['blackPoint']});
	if (result.length){
		const popup = new mapboxgl.Popup();
		// const content = result[0].properties.text.image;   
		popup.setLngLat(e.lngLat)     
		popup.setHTML('<h2> ' + result[0].properties.text + '</h3><p>' + '<p>Featured color: Black </p>' + 'Time:'+  result[0].properties.time + '<p> '+ result[0].properties.description + '</p><img class="popup-image" src=" ./' + result[0].properties.image +'.jpg">'   );
		popup.addTo(map)
	}
});


map.on('click', e =>{
	const result = map.queryRenderedFeatures(e.point, { layers: ['whitePoint']});
	if (result.length){
		const popup = new mapboxgl.Popup();
		// const content = result[0].properties.text.image;   
		popup.setLngLat(e.lngLat)     
		popup.setHTML('<h2> ' + result[0].properties.text + '</h3><p>' + '<p>Featured color: White </p>' + 'Time:'+  result[0].properties.time + '<p> '+ result[0].properties.description + '</p><img class="popup-image" src=" ./' + result[0].properties.image +'.jpg">'   );
		popup.addTo(map)
	}
});

// map.on('click', e =>{
// 	const result = map.queryRenderedFeatures(e.point, { layers: ['yellowPoint']});
// 	if (result.length){
// 		const popup = new mapboxgl.Popup();    
// 	popup.setLngLat([
// 					-78.50439548492432,
// 					38.03833406043785
// 					]) 
// 	.setHTML(`<h1>Sugarmaple</h1>
// 		<div id="popup" class="popup" style="z-index: 10;">
// 		<img src="sugarmaple.jpg" class="popup-image"></div>
// 		Featured color: Red<div>Time: Late autumn</div><div></div>`)
// 	.addTo(map)
// }
// });




// 6. Show/hide layers
// See example at https://www.mapbox.com/mapbox-gl-js/example/toggle-layers/
    
    var layers = [  // an array of the layers you want to include in the layers control (layers to turn off and on)

        // [layerMachineName, layerDisplayName]
        // layerMachineName is the layer name as written in your Mapbox Studio map layers panel
        // layerDisplayName is the way you want the layer's name to appear in the layers control on the website
        ['redPoint', 'RED'],                      // layers[0]
        ['purplePoint', 'PURPLE'],                              // layers[1][1] = 'Parks'
        ['yellowPoint', 'YELLOW'],     
        ['bluePoint', 'BLUE'],
        ['whitePoint', 'WHITE'],
        ['blackPoint', 'BLACK']
        // add additional live data layers here as needed
    ]; 

    // functions to perform when map loads
    map.on('load', function () {
        
        
        for (i=0; i<layers.length; i++) {

            // add a button for each layer
            // $("#layers-control").append("<a href='#' class='active button-default' id='" + layers[i][0] + "'>" + layers[i][1] + "</a>"); // see http://api.jquery.com/append/
        }

        // show/hide layers when button is clicked
        $("#layers-control>a").on('click', function(e) {

                var clickedLayer = e.target.id;

                e.preventDefault();
                e.stopPropagation();

                var visibility = map.getLayoutProperty(clickedLayer, 'visibility');  // see https://www.mapbox.com/mapbox-gl-js/api/#map#getlayoutproperty
                console.log(visibility);

                if (visibility === 'visible') {
                    map.setLayoutProperty(clickedLayer, 'visibility', 'none');  // see https://www.mapbox.com/mapbox-gl-js/api/#map#setlayoutproperty
                    $(e.target).removeClass('active');
                } else {
                    $(e.target).addClass('active');
                    map.setLayoutProperty(clickedLayer, 'visibility', 'visible'); // see https://www.mapbox.com/mapbox-gl-js/api/#map#setlayoutproperty
                }
        });
    });

//  Reset map button

$("#reset").click(function() {
	map.setCenter(mapCenter);
	map.setZoom(mapZoom);
	map.setPitch(0);
	map.setBearing(0);
        map.setFilter("cville-building-permits", null); // reset building permits filters
        
        // Reset all layers to visible
        for (i=0; i<layers.length; i++) {
        	map.setLayoutProperty(layers[i][0], 'visibility', 'visible'); 
        	$("#" + layers[i][0]).addClass('active');
        }                   

    });