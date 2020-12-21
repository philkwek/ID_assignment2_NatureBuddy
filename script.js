var el = document.getElementsByClassName('hidden_button');

el.onclick=function(){
    console.log("im clicked!")
};

areas = {
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

area_array = ["bukit_timah_reserve", "butterfly_insect_kingdom","central_catchment_reserve",
"chinese_japanese_garden","east_coast_park","fort_canning_park","gardens_by_the_bay","hort_park",
"jurong_bird_park","marina_barrage","mount_faber_park","botanic_gardens","night_safari","singapore_zoo",
"sungei_buloh_nature_park","southern_ridges","treeTop_walk","macRitchie_reservoir","bedok_reservoir",
"labrador_reserve","changi_beach","pasir_ris_park","west_coast_park","coney_island","stJohn_island",
"pulau_ubin"]

function setNewList(){ // code to run only on the first instance of the webpage OR 
    // run when no data is detected in the localStorage
    area_list = JSON.stringify(areas);
    localStorage.setItem("ListArea_check", area_list); //stores information of JSON
    area_array_store = JSON.stringify(area_array);
    localStorage.setItem("Area_Array", area_array_store);

}


function loadAdventure(){ // gets a random number for location and displays random location
    area_list = JSON.parse(localStorage.getItem('ListArea_check'));

    var adventureNumber = Math.floor((Math.random() * 24));

    random_location = area_array[adventureNumber];

    console.log(random_location)
    
}


if (localStorage.getItem("Area_Array")===null && localStorage.getItem("ListArea_check")===null){ 
    //this function checks if there is data in localStorage
    console.log("check unsuccessful, adding area data...")
    setNewList()
}   else{
    console.log("check successful!")
}

var q = "testing google search"; // create function to search for the random location pictures!

document.getElementById('google_search').onclick=function() {
    window.open('http://google.com/search?q='+q);
};

loadAdventure()



