

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

window.onload = function() { // this function provides the starting location coordinates
  var startPost;
  navigator.geolocation.getCurrentPosition(function(startPos) {
    
    startPos = {
        "latitude":startPos.coords.latitude,
        "longitude":startPos.coords.longitude,
    }
    localStorage.setItem('starting_position',JSON.stringify(startPos))
    localStorage.setItem('previous_location',JSON.stringify(startPos))
  });

  distance_travelled = {
    'distance': 0,
  }

  localStorage.setItem('distance_travelled',JSON.stringify(distance_travelled))
  
};

function calculateDistance(lat1, lon1, lat2, lon2) { //
  var R = 6371; // km
  var dLat = (lat2 - lat1).toRad();
  var dLon = (lon2 - lon1).toRad(); 
  var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
          Math.cos(lat1.toRad()) * Math.cos(lat2.toRad()) * 
          Math.sin(dLon / 2) * Math.sin(dLon / 2); 
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)); 
  var d = R * c;
  return d;
}


Number.prototype.toRad = function() {
  return this * Math.PI / 180;
};

function getLocation (){

  console.log('getting location...')

  previous_location = JSON.parse(localStorage.getItem('previous_location')) //previous position

  navigator.geolocation.getCurrentPosition(function(position){ //current position
    map = new google.maps.Map(document.getElementById("map_journey"), {
      center: { lat: position.coords.latitude, lng: position.coords.longitude },
      zoom:17,
      mapId:'6ef0b532fe532f6',
    });

    live_position = { lat:position.coords.latitude, lng:position.coords.longitude};
    mark = new google.maps.Marker(
      { position: live_position,
        map:map,
      });
    
    startPos = {
    "latitude":position.coords.latitude,
    "longitude":position.coords.longitude,
  }

    localStorage.setItem('previous_location',JSON.stringify(startPos))

    distance = calculateDistance(previous_location.latitude, previous_location.longitude,
      position.coords.latitude, position.coords.longitude);
    distance = +distance.toFixed(2); // rounds off the decimals

    distance_travelled = JSON.parse(localStorage.getItem('distance_travelled'))
    distance = distance + distance_travelled.distance
    distance = +distance.toFixed(2);

    distance_travelled = {
      'distance':distance,
    }
    localStorage.setItem('distance_travelled',JSON.stringify(distance_travelled))

    console.log(distance)

    document.getElementById('distance').innerHTML = distance;

  });

  
      
};

function initMap() { // this functions runs the map api, main code was taken from Google Maps API documentation, but was edited to fit for my use


  map = new google.maps.Map(document.getElementById("map_journey"), {
    center: { lat: area_array[adventureNumber][1], lng: area_array[adventureNumber][2] },
    zoom:17,
    mapId:'6ef0b532fe532f6',
  });

  getLocation();

  var t=setInterval(getLocation,10000) //function sets live location tracker

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
  
};

function count_up(){ // count up timer code
  $(document).ready (function () {
    startCount();
  });
  
  function startCount()
  {
  timer = setInterval(count,1000);
  }
  function count()
  {
  var time_shown = $("#realtime").text();
        var time_chunks = time_shown.split(":");
        var hour, mins, secs;
  
        hour=Number(time_chunks[0]);
        mins=Number(time_chunks[1]);
        secs=Number(time_chunks[2]);
        secs++;
            if (secs==60){
                secs = 0;
                mins=mins + 1;
               } 
              if (mins==60){
                mins=0;
                hour=hour + 1;
              }
              if (hour==13){
                hour=1;
              }
  
        $("#realtime").text(hour +":" + plz(mins) + ":" + plz(secs));
        console.log(hour,mins,secs)

        time_recording = {
          'hour': hour,
          'minute': mins,
          'seconds': secs,
        }

        localStorage.setItem('time_taken',JSON.stringify(time_recording));
  
};
  
function plz(digit){
  
    var zpad = digit + '';
    if (digit < 10) {
        zpad = "0" + zpad;
    }
    return zpad;
  }

};

count_up();


if (navigator.geolocation) { //this checks if device/browser supports Location Services
    console.log('Geolocation is supported!');
  }
  else {
    console.log('Geolocation is not supported for this Browser/OS version yet.');
  }
    










  