//scroll
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 500) {
        $(".header").addClass("fixed");
    } else {
        $(".header").removeClass("fixed");
    }
});

//timer
var endDate = new Date("Jan 25, 2020 12:00:00").getTime();
var timer = setInterval(function () { 
let now = new Date().getTime();
let t = endDate - now;
if (t >= 0) {
document.getElementById("remainder").innerHTML = "<div class='timer_item'>" +
Math.floor(t / (1000 * 60 * 60 * 24)) + "<span class='label'>[Days]</span></div>" + "<div class='timer_item'>" +
("0" + Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).slice(-2) + "<span class='label'>[Hours]</span></div>" + "<div class='timer_item'>" +
("0" + Math.floor((t % (1000 * 60 * 60)) / (1000 * 60))).slice(-2) + "<span class='label'>[Minutes]</span></div>" + "<div class='timer_item'>" +
("0" + Math.floor((t % (1000 * 60)) / 1000)).slice(-2) + "<span class='label'>[Seconds]</span></div>";
} else {
document.getElementById("remainder").innerHTML = "End of timer.";
}

}, 1000);



