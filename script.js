document.addEventListener("DOMContentLoaded", function(event) {
    var dateObject = new Date();
    updateTime(dateObject);
    updateTimeLine();

    setInterval(function() {
        dateObject = new Date();
        updateTime(dateObject);
        updateTimeLine(dateObject);
    }, 1000);
});

function updateTime(dateObject) {
    document.getElementById('time').innerHTML = dateObject.toLocaleString();
}

function updateTimeLine(dateObject) {
    if(typeof dateObject === "undefined") return;

    var tr = getRowId(dateObject);

    if(tr == "weekend") {
        // hodim to na koniec piatku
    } else {
        var td = getColumn(dateObject);
        document.getElementById('timer').style.display = "block";
        document.getElementById('timer').style.top = document.getElementById(tr).getBoundingClientRect().top;
        document.getElementById('timer').style.height = document.getElementById(tr).getBoundingClientRect().height + "px";

        var width = document.getElementById(td).getBoundingClientRect().width + 20;
        var minutesInLesson = ((dateObject.getHours()*60 + dateObject.getMinutes()) - (60 * 7 + 15)) % 105;
        document.getElementById('timer').style.left = document.getElementById(td).getBoundingClientRect().left;
    }

}

function getColumn(time) {
    var d2 = new Date();
    d2.setFullYear(time.getFullYear(), time.getMonth(), time.getDate());
    d2.setHours(7); d2.setMinutes(15);


}

function getRowId(time) {
    var day;

    switch(time.getDay()) {
        case 1:
            day = "monday";
            break;
        case 2:
            day = "tuesday";
            break;
        case 3:
            day = "wednesday";
            break;
        case 4:
            day = "thursday";
            break;
        case 5:
            day = "friday";
            break;
        default:
            day = "weekend";
            break;
    }

    return day;
}

function highlightLectures() {
    var lectures = document.getElementsByClassName('lecture');

    for (let item of lectures) {
        if(item.classList.contains("highlight")) {
            item.classList.remove("highlight");
        } else {
            item.classList.add("highlight");
        }
    }
}

function highlightPractices() {
    var practices = document.getElementsByClassName('practice');

    for (let item of practices) {
        if(item.classList.contains("highlight")) {
            item.classList.remove("highlight");
        } else {
            item.classList.add("highlight");
        }
    }
}


