area_array = [["bukit_timah_reserve",1.35291, 103.77836], ["butterfly_insect_kingdom",1.25542,103.81674],
["chinese_japanese_garden",1.3364146183943955, 103.72723620276491],
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



function plz(digit){
  
    var zpad = digit + '';
    if (digit < 10) {
        zpad = "0" + zpad;
    }
    return zpad;
};

function loadHistory(){

    if ('adventure_history' in localStorage){
        adventure_history = JSON.parse(localStorage.getItem('adventure_history'))
        for (i = 0; i<4; i++){
            console.log(i)

            if (adventure_history.history[i] !== undefined){
                console.log('exists!')

            } else{
                console.log('doesnt exist')
                var history_number = i + 1
                var group_id = '#history_group_' + history_number
                console.log(group_id)

                let page_div = document.querySelector(group_id)
                page_div.style.display = "none"
            }
        }

        for (i = 0; i<adventure_history.history.length; i++) {
            console.log('loop!')
            console.log(i)

            history_number = i + 1

            location_name = adventure_history.history[i].location_name
            console.log(location_name)
            var name_id = 'location_name_' + history_number
            document.getElementById(name_id).innerHTML = location_name


            date = adventure_history.history[i].date
            var date_id = 'date_' + history_number
            console.log(date)
            document.getElementById(date_id).innerHTML = date

            distance_travelled = adventure_history.history[i].distance_travelled
            var distance_id = 'distance_travelled_' + history_number
            document.getElementById(distance_id).innerHTML = distance_travelled
            console.log(distance_travelled)

            duration = adventure_history.history[i].duration
            var duration_id = 'duration_' + history_number
            var hour = duration.hour;
            var mins = duration.minute;
            var secs = duration.seconds;
            time = hour +":" + plz(mins) + ":" + plz(secs)
            document.getElementById(duration_id).innerHTML = time
        }
    } else {
        document.getElementById('no_history').innerHTML = 'No recent history!'

        let page_div = document.querySelector('#history_list')
        page_div.style.display = "none"

    }
}



loadHistory()