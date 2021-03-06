area_array = [["bukit_timah_reserve",1.35291, 103.77836], ["butterfly_insect_kingdom",1.25542,103.81674],
["chinese_japanese_garden",1.33714,103.72903],
["east coast park",1.30138,103.91263],["fort_canning_park",1.29491, 103.84640],
["gardens_by_the_bay",1.28156,103.86407],["hort_park",1.27889,103.79986],
["jurong_bird_park",1.32086,103.70693],["marina_barrage",1.28065,103.87108],
["mount_faber_park",1.27392,103.81843],["botanic_gardens",1.3151,103.8162],
["night_safari",1.40292,103.78812],["singapore_zoo",1.40404,103.79373],
["sungei_buloh_nature_park",1.44658, 103.73009],["southern_ridges",1.28063,103.80346],
["treeTop_walk",1.35859,103.81981],["macRitchie_reservoir",1.34224,103.83440],
["bedok_reservoir",1.33996,103.93308],["labrador_reserve",1.26626,103.80320],
["changi_beach",1.39129,103.99174],["pasir_ris_park",1.37262,103.95232],
["west_coast_park",1.29150,103.76632],["coney_island",1.40941,103.92116],
["stJohn_island",1.21965,103.84825],["pulau_ubin",1.41112,103.95762]]

let map;

get_item = localStorage.getItem("saved_location");
get_item_parsed = JSON.parse(get_item);

adventureNumber = get_item_parsed.Adventure_Number;
random_location = get_item_parsed.Location;


function initMap() { // this functions runs the map api, Main code was taken from Google Maps API documentation but was edited for this use case
    lon = area_array[adventureNumber]
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: area_array[adventureNumber][1], lng: area_array[adventureNumber][2] },
        zoom:16,
        mapId: '6ef0b532fe532f6',
    });
    var request = {
        location: { lat: area_array[adventureNumber][1], lng: area_array[adventureNumber][2] },
        query: random_location,
    };
    console.log(request)

    var service = new google.maps.places.PlacesService(map);
    service.textSearch(request, callback);
};



function callback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      marker = new google.maps.Marker({
        map: map,
        place: {
          placeId: results[0].place_id,
          location: results[0].geometry.location
        }
      });
      
    }
    console.log(results[0].name);
    fixed_location_name = results[0].name;

    var locationId = results[0].place_id;

    var title_location = document.getElementById("name_of_location");
    title_location.innerHTML = fixed_location_name;

    $('#open_maps').click(function(){ //event listener for button
      console.log("clicked!");
      window.open("https://www.google.com/maps/search/?api=1&query=" + area_array[adventureNumber][1] + "," + area_array[adventureNumber][2] + "&query_place_id=" + locationId)
    });

    $('#track_adventure').click(function(){
      window.location= '/journey/journey.html'
    })
  
}





