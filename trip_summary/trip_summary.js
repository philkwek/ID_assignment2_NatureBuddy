var time_taken;
var distance_travelled;

function enter_saved_data(){
    time_taken = JSON.parse(localStorage.getItem('time_taken'));
    distance_travelled = JSON.parse(localStorage.getItem('distance_travelled'));
    
    console.log(time_taken)
    console.log(distance_travelled)

    function plz(digit){
  
        var zpad = digit + '';
        if (digit < 10) {
            zpad = "0" + zpad;
        }
        return zpad;
    };

    document.getElementById('distance').innerHTML = distance_travelled.distance;

    console.log(time_taken.seconds)
    var hour = time_taken.hour;
    var mins = time_taken.minute;
    var secs = time_taken.seconds;

    $("#realtime").text(hour +":" + plz(mins) + ":" + plz(secs));


}

enter_saved_data();
