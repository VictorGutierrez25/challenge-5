// display current day/time
var today = moment();
$("#currentDay").text(today.format('MMMM DD YYYY, h:mm:ss'));

var currentTime= moment().format('H');

// for loop for all work hours
for (let i = 8; i <= 17; i++) {
    // pull id and add event listener
    $("#save"+i).on('click', function () {
        var textToSave = $("#block"+i).val();
        // save to local storage
        localStorage.setItem("text"+i, textToSave);
    })

    // .val method for the whole body
    var textToPage = localStorage.getItem("text"+i);
    $('#block'+i).val(textToPage)

    if(currentTime > i) {
        $("#block"+i).addClass("past");
    }

    if(currentTime == i) {
        $("#block"+i).addClass("present");
    }

    if(currentTime < i) {
        $("#block"+i).addClass("future");
    }

}
console.log(currentTime);