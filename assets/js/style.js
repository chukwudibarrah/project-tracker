var projectTracker = $(".project-tracker");
var projectHeading = $(".project-heading");
var currentTimeTitle = $(".current-time-title");
var currentTime = $(".current-time");

// get current time
setInterval(() => {
    var theTime = moment().format("DD MMM YYYY [at] hh:mm:ss a");
    currentTime.text(theTime);
}, 1000);
currentTimeTitle.append(currentTime)