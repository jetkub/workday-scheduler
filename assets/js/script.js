// current day
var currentDate = moment().format("dddd, MMMM Do");
// set date in jumbotron
var currentDayEl = $("#currentDay");
currentDayEl.text(currentDate);

// save button functionality
// add on-click listener to saveBtn; save input in textarea
// and the listed time in the col-2 hour div to local storage (setItem)
$(".saveBtn").on("click", function(){
  let taskTimeRaw = $(this).siblings(".hour").text();
  // trim whitespace
  let taskTime = taskTimeRaw.trim();
  let taskInput = $(this).siblings("textarea").val();
  console.log("time: " + taskTime)
  console.log("input: " + taskInput)

  localStorage.setItem(taskTime, taskInput);
});


// funcion to load saved tasks from localStorage (getItem)
