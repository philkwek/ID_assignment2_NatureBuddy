

areas = { //this list records whether user has already visited the area through the app
    bukit_timah_reserve: "0",
    butterfly_insect_kingdom: "0",
    central_catchment_reserve: "0",
    chinese_japanese_garden: "0",
    ast_coast_park: "0",
    fort_canning_park: "0",
    gardens_by_the_bay: "0",
    hort_park: "0",
    jurong_bird_park: "0",
    marina_barrage: "0",
    mount_faber_park: "0",
    botanic_gardens: "0",
    night_safari:"0",
    singapore_zoo:"0",
    sungei_buloh_nature_park:"0",
    southern_ridges:"0",
    treeTop_walk:"0",
    macRitchie_reservoir: "0",
    bedok_reservoir: "0",
    labrador_reserve:"0",
    changi_beach:"0",
    pasir_ris_park:"0",
    west_coast_park:"0",
    coney_island:"0",
    stJohn_island:"0",
    pulau_ubin:"0",
}

area_array = [["bukit_timah_reserve",1.35291, 103.77836], ["butterfly_insect_kingdom",1.25542,103.81674],
["central_catchment_reserve",1.35340, 103.81850],["chinese_japanese_garden",1.33714,103.72903],
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


function setNewList(){ // code to run only on the first instance of the webpage OR 
    // run when no data is detected in the localStorage
    area_list = JSON.stringify(areas);
    localStorage.setItem("ListArea_check", area_list); //stores information of JSON
    area_array_store = JSON.stringify(area_array);
    localStorage.setItem("Area_Array", area_array_store);

}


function loadAdventure(){ // gets a random number for location and displays random location
    area_list = JSON.parse(localStorage.getItem('ListArea_check'));

    adventureNumber = Math.floor((Math.random() * 24)); // global variable

    random_location = area_array[adventureNumber][0];

    console.log(random_location)


}

if (localStorage.getItem("Area_Array")===null && localStorage.getItem("ListArea_check")===null){ 
    //this function checks if there is data in localStorage
    console.log("check unsuccessful, adding area data...")
    setNewList()
}   else{
    console.log("check successful!")
}

document.getElementById('google_search').onclick=function() { // this code enables a clickable link to 
    //find pictures of a location
    window.open('http://images.google.com/search?q='+random_location + " singapore");
};

let map;

function initMap() { // this functions runs the map api
    lon = area_array[adventureNumber]
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: area_array[adventureNumber][1], lng: area_array[adventureNumber][2] },
        zoom:16,
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
      var marker = new google.maps.Marker({
        map: map,
        place: {
          placeId: results[0].place_id,
          location: results[0].geometry.location
        }
      });
      
    }
    console.log(results[0].name);
    fixed_location_name = results[0].name;
    var title_location = document.getElementById("name_of_location");
    title_location.innerHTML = fixed_location_name;
}


$('#confirm_location').click(function(){ //event listener for button
    console.log("clicked!");
    //window.location="ADD_HTML_OF_NEXT_PAGE"
});

loadAdventure()