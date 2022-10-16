// current day
var currentDate = moment().format("dddd, MMMM Do");
// set date in jumbotron
var currentDayEl = $("#currentDay")
currentDayEl.text(currentDate);