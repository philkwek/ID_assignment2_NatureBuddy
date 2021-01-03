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

    let history_group_1 = document.querySelector('#history_group_1')
    history_group_1.style.display = "block"

    let history_group_2 = document.querySelector('#history_group_2')
    history_group_2.style.display = "block"

    let history_group_3 = document.querySelector('#history_group_3')
    history_group_3.style.display = "block"

    let history_group_4 = document.querySelector('#history_group_4')
    history_group_4.style.display = "block"

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

        if (adventure_history.history.length > 4) {
            var loop_length = 4
        } else {
            var loop_length = adventure_history.history.length
        }

    
        for (i = 0; i<loop_length; i++) {
            console.log('loop!')

            history_number = i + 1

            location_name = adventure_history.history[i].location_name
            var name_id = 'location_name_' + history_number
            document.getElementById(name_id).innerHTML = location_name


            date = adventure_history.history[i].date
            var date_id = 'date_' + history_number
            document.getElementById(date_id).innerHTML = date

            distance_travelled = adventure_history.history[i].distance_travelled
            var distance_id = 'distance_travelled_' + history_number
            document.getElementById(distance_id).innerHTML = distance_travelled


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


    let page_2 = document.querySelector('#page_2')
    let page_3 = document.querySelector('#page_3')
    let page_4 = document.querySelector('#page_4')
    let page_5 = document.querySelector('#page_5')
    
    if ('adventure_history' in localStorage) {
        if (adventure_history.history.length <= 4) {
            page_2.style.display = "none"
            page_3.style.display = "none"
            page_4.style.display = "none"
            page_5.style.display = "none"
        } else if (adventure_history.history.length <=8) {
            page_3.style.display = "none"
            page_4.style.display = "none"
            page_5.style.display = "none"
        } else if (adventure_history.history.length <= 12) {
            page_4.style.display = "none"
            page_5.style.display = "none"
        } else if (adventure_history.history.length <= 16) {
            page_5.style.display = "none"
        } else {
    
        };
    } else{}
        
};

function loadHistory_2(){

    let history_group_1 = document.querySelector('#history_group_1')
    history_group_1.style.display = "none"

    let history_group_2 = document.querySelector('#history_group_2')
    history_group_2.style.display = "none"

    let history_group_3 = document.querySelector('#history_group_3')
    history_group_3.style.display = "none"

    let history_group_4 = document.querySelector('#history_group_4')
    history_group_4.style.display = "none"

    if ('adventure_history' in localStorage){
        adventure_history = JSON.parse(localStorage.getItem('adventure_history'))
        

        if (adventure_history.history.length > 8) {
            var loop_length = 4
        } else {
            var loop_length = adventure_history.history.length
        }

        
        for (i = 0; i<loop_length; i++) {

            array_number = i + 4

            if (adventure_history.history[array_number] == null){
                break
            } else {}

            console.log('loop!')

            history_number = i + 1

            var history_group = '#history_group_' + history_number
            let group = document.querySelector(history_group)
            group.style.display = "block"
            
            
            location_name = adventure_history.history[array_number].location_name
            var name_id = 'location_name_' + history_number
            document.getElementById(name_id).innerHTML = location_name


            date = adventure_history.history[array_number].date
            var date_id = 'date_' + history_number
            document.getElementById(date_id).innerHTML = date

            distance_travelled = adventure_history.history[array_number].distance_travelled
            var distance_id = 'distance_travelled_' + history_number
            document.getElementById(distance_id).innerHTML = distance_travelled


            duration = adventure_history.history[array_number].duration
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


    let page_2 = document.querySelector('#page_2')
    let page_3 = document.querySelector('#page_3')
    let page_4 = document.querySelector('#page_4')
    let page_5 = document.querySelector('#page_5')
    
    if (adventure_history.history.length <= 4) {
        page_2.style.display = "none"
        page_3.style.display = "none"
        page_4.style.display = "none"
        page_5.style.display = "none"
    } else if (adventure_history.history.length <=8) {
        page_3.style.display = "none"
        page_4.style.display = "none"
        page_5.style.display = "none"
    } else if (adventure_history.history.length <= 12) {
        page_4.style.display = "none"
        page_5.style.display = "none"
    } else if (adventure_history.history.length <= 16) {
        page_5.style.display = "none"
    } else {

    };

    console.log(adventure_history)
        
};

function loadHistory_3(){

    let history_group_1 = document.querySelector('#history_group_1')
    history_group_1.style.display = "none"

    let history_group_2 = document.querySelector('#history_group_2')
    history_group_2.style.display = "none"

    let history_group_3 = document.querySelector('#history_group_3')
    history_group_3.style.display = "none"

    let history_group_4 = document.querySelector('#history_group_4')
    history_group_4.style.display = "none"

    if ('adventure_history' in localStorage){
        adventure_history = JSON.parse(localStorage.getItem('adventure_history'))
        

        if (adventure_history.history.length > 12) {
            var loop_length = 4
        } else {
            var loop_length = adventure_history.history.length
        }

        
        for (i = 0; i<loop_length; i++) {

            array_number = i + 8

            if (adventure_history.history[array_number] == null){
                break
            } else {}

            console.log('loop!')

            history_number = i + 1

            var history_group = '#history_group_' + history_number
            let group = document.querySelector(history_group)
            group.style.display = "block"
            
            
            location_name = adventure_history.history[array_number].location_name
            var name_id = 'location_name_' + history_number
            document.getElementById(name_id).innerHTML = location_name


            date = adventure_history.history[array_number].date
            var date_id = 'date_' + history_number
            document.getElementById(date_id).innerHTML = date

            distance_travelled = adventure_history.history[array_number].distance_travelled
            var distance_id = 'distance_travelled_' + history_number
            document.getElementById(distance_id).innerHTML = distance_travelled


            duration = adventure_history.history[array_number].duration
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


    let page_2 = document.querySelector('#page_2')
    let page_3 = document.querySelector('#page_3')
    let page_4 = document.querySelector('#page_4')
    let page_5 = document.querySelector('#page_5')
    
    if (adventure_history.history.length <= 4) {
        page_2.style.display = "none"
        page_3.style.display = "none"
        page_4.style.display = "none"
        page_5.style.display = "none"
    } else if (adventure_history.history.length <=8) {
        page_3.style.display = "none"
        page_4.style.display = "none"
        page_5.style.display = "none"
    } else if (adventure_history.history.length <= 12) {
        page_4.style.display = "none"
        page_5.style.display = "none"
    } else if (adventure_history.history.length <= 16) {
        page_5.style.display = "none"
    } else {

    };

    console.log(adventure_history)
        
};

function loadHistory_4(){

    let history_group_1 = document.querySelector('#history_group_1')
    history_group_1.style.display = "none"

    let history_group_2 = document.querySelector('#history_group_2')
    history_group_2.style.display = "none"

    let history_group_3 = document.querySelector('#history_group_3')
    history_group_3.style.display = "none"

    let history_group_4 = document.querySelector('#history_group_4')
    history_group_4.style.display = "none"

    if ('adventure_history' in localStorage){
        adventure_history = JSON.parse(localStorage.getItem('adventure_history'))
        

        if (adventure_history.history.length > 16) {
            var loop_length = 4
        } else {
            var loop_length = adventure_history.history.length
        }

        
        for (i = 0; i<loop_length; i++) {

            array_number = i + 12

            if (adventure_history.history[array_number] == null){
                break
            } else {}

            console.log('loop!')

            history_number = i + 1

            var history_group = '#history_group_' + history_number
            let group = document.querySelector(history_group)
            group.style.display = "block"
            
            
            location_name = adventure_history.history[array_number].location_name
            var name_id = 'location_name_' + history_number
            document.getElementById(name_id).innerHTML = location_name


            date = adventure_history.history[array_number].date
            var date_id = 'date_' + history_number
            document.getElementById(date_id).innerHTML = date

            distance_travelled = adventure_history.history[array_number].distance_travelled
            var distance_id = 'distance_travelled_' + history_number
            document.getElementById(distance_id).innerHTML = distance_travelled


            duration = adventure_history.history[array_number].duration
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


    let page_2 = document.querySelector('#page_2')
    let page_3 = document.querySelector('#page_3')
    let page_4 = document.querySelector('#page_4')
    let page_5 = document.querySelector('#page_5')
    
    if (adventure_history.history.length <= 4) {
        page_2.style.display = "none"
        page_3.style.display = "none"
        page_4.style.display = "none"
        page_5.style.display = "none"
    } else if (adventure_history.history.length <=8) {
        page_3.style.display = "none"
        page_4.style.display = "none"
        page_5.style.display = "none"
    } else if (adventure_history.history.length <= 12) {
        page_4.style.display = "none"
        page_5.style.display = "none"
    } else if (adventure_history.history.length <= 16) {
        page_5.style.display = "none"
    } else {

    };

    console.log(adventure_history)
        
};

function loadHistory_3(){

    let history_group_1 = document.querySelector('#history_group_1')
    history_group_1.style.display = "none"

    let history_group_2 = document.querySelector('#history_group_2')
    history_group_2.style.display = "none"

    let history_group_3 = document.querySelector('#history_group_3')
    history_group_3.style.display = "none"

    let history_group_4 = document.querySelector('#history_group_4')
    history_group_4.style.display = "none"

    if ('adventure_history' in localStorage){
        adventure_history = JSON.parse(localStorage.getItem('adventure_history'))
        

        if (adventure_history.history.length > 12) {
            var loop_length = 4
        } else {
            var loop_length = adventure_history.history.length
        }

        
        for (i = 0; i<loop_length; i++) {

            array_number = i + 8

            if (adventure_history.history[array_number] == null){
                break
            } else {}

            console.log('loop!')

            history_number = i + 1

            var history_group = '#history_group_' + history_number
            let group = document.querySelector(history_group)
            group.style.display = "block"
            
            
            location_name = adventure_history.history[array_number].location_name
            var name_id = 'location_name_' + history_number
            document.getElementById(name_id).innerHTML = location_name


            date = adventure_history.history[array_number].date
            var date_id = 'date_' + history_number
            document.getElementById(date_id).innerHTML = date

            distance_travelled = adventure_history.history[array_number].distance_travelled
            var distance_id = 'distance_travelled_' + history_number
            document.getElementById(distance_id).innerHTML = distance_travelled


            duration = adventure_history.history[array_number].duration
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


    let page_2 = document.querySelector('#page_2')
    let page_3 = document.querySelector('#page_3')
    let page_4 = document.querySelector('#page_4')
    let page_5 = document.querySelector('#page_5')
    
    if (adventure_history.history.length <= 4) {
        page_2.style.display = "none"
        page_3.style.display = "none"
        page_4.style.display = "none"
        page_5.style.display = "none"
    } else if (adventure_history.history.length <=8) {
        page_3.style.display = "none"
        page_4.style.display = "none"
        page_5.style.display = "none"
    } else if (adventure_history.history.length <= 12) {
        page_4.style.display = "none"
        page_5.style.display = "none"
    } else if (adventure_history.history.length <= 16) {
        page_5.style.display = "none"
    } else {

    };

    console.log(adventure_history)
        
};

function loadHistory_5(){

    let history_group_1 = document.querySelector('#history_group_1')
    history_group_1.style.display = "none"

    let history_group_2 = document.querySelector('#history_group_2')
    history_group_2.style.display = "none"

    let history_group_3 = document.querySelector('#history_group_3')
    history_group_3.style.display = "none"

    let history_group_4 = document.querySelector('#history_group_4')
    history_group_4.style.display = "none"

    if ('adventure_history' in localStorage){
        adventure_history = JSON.parse(localStorage.getItem('adventure_history'))
        

        if (adventure_history.history.length > 20) {
            var loop_length = 4
        } else {
            var loop_length = adventure_history.history.length
        }

        
        for (i = 0; i<loop_length; i++) {

            array_number = i + 16

            if (adventure_history.history[array_number] == null){
                break
            } else {}

            console.log('loop!')

            history_number = i + 1

            var history_group = '#history_group_' + history_number
            let group = document.querySelector(history_group)
            group.style.display = "block"
            
            
            location_name = adventure_history.history[array_number].location_name
            var name_id = 'location_name_' + history_number
            document.getElementById(name_id).innerHTML = location_name


            date = adventure_history.history[array_number].date
            var date_id = 'date_' + history_number
            document.getElementById(date_id).innerHTML = date

            distance_travelled = adventure_history.history[array_number].distance_travelled
            var distance_id = 'distance_travelled_' + history_number
            document.getElementById(distance_id).innerHTML = distance_travelled


            duration = adventure_history.history[array_number].duration
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


    let page_2 = document.querySelector('#page_2')
    let page_3 = document.querySelector('#page_3')
    let page_4 = document.querySelector('#page_4')
    let page_5 = document.querySelector('#page_5')
    
    if (adventure_history.history.length <= 4) {
        page_2.style.display = "none"
        page_3.style.display = "none"
        page_4.style.display = "none"
        page_5.style.display = "none"
    } else if (adventure_history.history.length <=8) {
        page_3.style.display = "none"
        page_4.style.display = "none"
        page_5.style.display = "none"
    } else if (adventure_history.history.length <= 12) {
        page_4.style.display = "none"
        page_5.style.display = "none"
    } else if (adventure_history.history.length <= 16) {
        page_5.style.display = "none"
    } else {

    };

    console.log(adventure_history)
        
};



    




loadHistory()

document.getElementById('page_1').onclick = loadHistory;
document.getElementById('page_2').onclick = loadHistory_2;
document.getElementById('page_3').onclick = loadHistory_3;
document.getElementById('page_4').onclick = loadHistory_4;
document.getElementById('page_5').onclick = loadHistory_5;

