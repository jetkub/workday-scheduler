// current day
var currentDate = moment().format("dddd, MMMM Do");
// set date in jumbotron
var currentDayEl = $("#currentDay");
currentDayEl.text(currentDate);

// save button functionality
// add on-click listener to saveBtn; save input in textarea
// and the listed time in the col-2 hour div to local storage (setItem)
$(".saveBtn").on("click", function(){
  let taskTime = $(this).siblings(".hour").text().trim(); // trim whitespace
  let taskInput = $(this).siblings("textarea").val();

  console.log("time: " + taskTime);
  console.log("input: " + taskInput);

  localStorage.setItem(taskTime, taskInput);
});


// funcion to load saved tasks from localStorage (getItem)
function loadTasks(){
  $(".hour").each(function(){
    let taskTime = $(this).text().trim();
    let taskData = localStorage.getItem(taskTime);

    $(this).siblings("textarea").val(taskData);
  });
};

// need to style time-blocks with past, present 
// or future classes (defined in style.css)

// create function what will check if the current time matches, is greater
// than, or is less than the value of the child item in each time-block
// then add present, future, or past class to the time-block row element

function trackTime (){
  let currentHour = moment().format("H");
  console.log("currentHour: " + currentHour);

  $(".time-block").each(function(){
    //let schedulerTime = $("this").children("div").text().trim()
    //let schedulerTime = $("this").children().eq(0).text().trim()
    // remove any non-numeric text with regex (need only umber for time comparison)
    //let schedulerHour = schedulerTime.replace(/[^0-9]/g, '');

    // could not get the text of the child item to save in schedulerTime
    // received tip from classmate Chris Lemmon to add id attribute
    // to all my time-blocks and compare to that
    let schedulerHour = $(this).attr('id');
    console.log('schedulerHour: ' + schedulerHour)

    if (schedulerHour === currentHour) {
      $(this).addClass('present');
    } else if (schedulerHour > currentHour) {
      $(this).addClass('future');
    } else {
      $(this).addClass('past');
    }
  });
}


trackTime();
loadTasks();