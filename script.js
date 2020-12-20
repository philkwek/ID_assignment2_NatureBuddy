var el = document.getElementsByClassName('arrow_down');

var areas = {
    "bukit_timah_reserve": "0",
    "butterfly_insect_kingdom": "0",
    "central_catchment_reserve": "0",
    "chinese_japanese_garden": "0",
    "east_coast_park": "0",
    "fort_canning_park": "0",
    "gardens_by_the_bay": "0",
    "hort_park": "0",
    "jurong_bird_park": "0",
    "marina_barrage": "0",
    "mount_faber_park": "0",
    "botanic_gardens": "0",
    "night_safari":"0",
    "singapore_zoo":"0",
    "sungei_buloh_nature_park":"0",
    "southern_ridges":"0",
    "treeTop_walk":"0",
    "macRitchie_reservoir": "0",
    "bedok_reservoir": "0",
    "labrador_reserve":"0",
    "changi_beach":"0",
    "pasir_ris_park":"0",
    "west_coast_park":"0",
    "coney_island":"0",
    "stJohn_island":"0",
    "pulau_ubin":"0",
}

function loadAdventure(){ // gets a random number for location
    var x = Math.floor((Math.random() * 24));
    console.log(x)
}

var q = "testing google search"; // create function to search for the random location pictures!

document.getElementById('google_search').onclick=function() {
    window.open('http://google.com/search?q='+q);
};



