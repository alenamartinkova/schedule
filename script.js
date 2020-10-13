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

window.addEventListener("resize", updateTimeLine());

function updateTime(dateObject) {
    document.getElementById('time').innerHTML = dateObject.toLocaleString();
}

function updateTimeLine(dateObject) {
    if(typeof dateObject === "undefined") return;

    var tr = getRowId(dateObject);

    if(tr == "weekend") {
        var tr = "friday";
        var tdName = "friday14";
        document.getElementById('timer').style.display = "block";
        document.getElementById('timer').style.top = document.getElementById(tr).getBoundingClientRect().top + "px";
        document.getElementById('timer').style.height = document.getElementById(tr).getBoundingClientRect().height + "px";
        var width = document.getElementsByClassName(tdName)[0].getBoundingClientRect().width;
        document.getElementById('timer').style.left = document.getElementsByClassName(tdName)[0].getBoundingClientRect().left + width + "px";
    } else {
        var td = getColumn(dateObject);
        if(td == 0) {
            td = 1;
            var tdName = tr+td;
            document.getElementById('timer').style.display = "block";
            document.getElementById('timer').style.top = document.getElementById(tr).getBoundingClientRect().top + "px";
            document.getElementById('timer').style.height = document.getElementById(tr).getBoundingClientRect().height + "px";
            document.getElementById('timer').style.left = document.getElementsByClassName(tdName)[0].getBoundingClientRect().left + "px";
        } else {
            var tdName = tr+td;
            document.getElementById('timer').style.display = "block";
            document.getElementById('timer').style.top = document.getElementById(tr).getBoundingClientRect().top + "px";
            document.getElementById('timer').style.height = document.getElementById(tr).getBoundingClientRect().height + "px";
            var minutesInLesson = ((dateObject.getHours()*60 + dateObject.getMinutes()) - (60 * 7)) % 105;
            document.getElementById('timer').style.left = document.getElementsByClassName(tdName)[0].getBoundingClientRect().left + minutesInLesson + "px";
        }
    }

}

function getColumn(d) {
    var d2 = new Date();
    var lesson = 0;
    d2.setFullYear(d.getFullYear(), d.getMonth(), d.getDate());
    d2.setHours(7); d2.setMinutes(15);

    if(d < d2) lesson = 0;
    if(d >= d2) lesson = 1;
    d2.setHours(8); d2.setMinutes(0);
    if(d >= d2) lesson = 2;
    d2.setHours(9); d2.setMinutes(0);
    if(d >= d2) lesson = 3;
    d2.setHours(9); d2.setMinutes(45);
    if(d >= d2) lesson = 4;
    d2.setHours(10); d2.setMinutes(45);
    if(d >= d2) lesson = 5;
    d2.setHours(11); d2.setMinutes(30);
    if(d >= d2) lesson = 6;
    d2.setHours(12); d2.setMinutes(30);
    if(d >= d2) lesson = 7;
    d2.setHours(13); d2.setMinutes(15);
    if(d >= d2) lesson = 8;
    d2.setHours(14); d2.setMinutes(15);
    if(d >= d2) lesson = 9;
    d2.setHours(15); d2.setMinutes(0);
    if(d >= d2) lesson = 10;
    d2.setHours(16); d2.setMinutes(0);
    if(d >= d2) lesson = 11;
    d2.setHours(16); d2.setMinutes(45);
    if(d >= d2) lesson = 12;
    d2.setHours(17); d2.setMinutes(45);
    if(d >= d2) lesson = 13;
    d2.setHours(18); d2.setMinutes(30);
    if(d >= d2) lesson = 14;

    return lesson;
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


