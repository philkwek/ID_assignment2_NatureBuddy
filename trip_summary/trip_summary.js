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


var time_taken;
var distance_travelled;
var saved_location;

function enter_saved_data(){ //function enters data from journey into the trip summary and also saves data in localstorage for the History page

    if("adventure_history" in localStorage){

        adventure_history = JSON.parse(localStorage.getItem('adventure_history'))

    } else {
        adventure_history = {
            'history': [
                
            ]
        }
        localStorage.setItem("adventure_history", JSON.stringify(adventure_history))
    }

    time_taken = JSON.parse(localStorage.getItem('time_taken'));
    distance_travelled = JSON.parse(localStorage.getItem('distance_travelled'));
    saved_location = JSON.parse(localStorage.getItem('saved_location'));
    number_of_adventures = JSON.parse(localStorage.getItem('number_of_adventures'));

    adventureNumber = saved_location.Adventure_Number;
    random_location = saved_location.Location;
    number_of_adventures = number_of_adventures.number_of_adventures;


    
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = dd + '/' + mm + '/' + yyyy;
    console.log(today)

    

    

    console.log(time_taken)
    console.log(distance_travelled)
    console.log(saved_location)

    function plz(digit){
  
        var zpad = digit + '';
        if (digit < 10) {
            zpad = "0" + zpad;
        }
        return zpad;
    };

    document.getElementById('distance').innerHTML = distance_travelled.distance;

    var hour = time_taken.hour;
    var mins = time_taken.minute;
    var secs = time_taken.seconds;

    $("#realtime").text(hour +":" + plz(mins) + ":" + plz(secs));


}

enter_saved_data();


function initMap() { // this functions runs the map api


    map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: area_array[adventureNumber][1], lng: area_array[adventureNumber][2] },
      zoom:17,
      mapId:'6ef0b532fe532f6',
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

    var title_location = document.getElementById("location_summary");
    title_location.innerHTML = fixed_location_name;

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = dd + '/' + mm + '/' + yyyy;
    console.log(today)


    if (adventure_history.history.length < number_of_adventures){ // code ensures history does not have duplicates
        adventure_history['history'].push({
            duration: time_taken,
            adventure_number:number_of_adventures,
            date: today,
            distance_travelled: distance_travelled.distance,
            location_name: fixed_location_name,
        })
    }; 
    localStorage.setItem("adventure_history", JSON.stringify(adventure_history))
  
}

console.log(number_of_adventures)

function addImage() { //function adds appropirate image of tree depending on the number of adventures taken

    console.log('image_running')

    if (number_of_adventures < 2) {
        document.getElementById('picture_of_tree').src='/trip_summary/trees/trees-01.png';

    } else if (number_of_adventures < 4) {
        document.getElementById('picture_of_tree').src='/trip_summary/trees/trees-02.png';

    } else if (number_of_adventures < 8) {
        document.getElementById('picture_of_tree').src='/trip_summary/trees/trees-03.png';

    } else if (number_of_adventures < 16) {
        document.getElementById('picture_of_tree').src='/trip_summary/trees/trees-04.png';

    } else {
        document.getElementById('picture_of_tree').src='/trip_summary/trees/trees-05.png';
    }
}

addImage()


