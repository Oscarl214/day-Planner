// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
let currentHour = dayjs().format("HH"); //hour of the day
const timeBlockArray = ["09", "10", "11", "12", "13", "14", "15", "16", "17"];
let currentDay = $("#currentDay");
let hour9 = $("#hour9");
let hour10 = $("#hour10");
let hour11 = $("#hour11");
let hour12 = $("#hour12");
let hour1 = $("#hour1");
let hour2 = $("#hour2");
let hour3 = $("#hour3");
let hour4 = $("#hour4");
let hour5 = $("#hour5");
let saveBtn = $(".saveBtn");
let Input = $(".description");

$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  saveBtn.click(function () {
    let key = $(this).data("key"); //recognizes the time block hour by grabbing the data key
    let value = $("#" + key).val(); //grabs the inputted value
    localStorage.setItem(key, value); //sets the key and value to the local storage
    console.log(localStorage);
  });

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  Input.each(function () {
    //jQuery method each() iterates through every input field
    let key = $(this).attr("id"); //using the ids to do so
    let storedValue = localStorage.getItem(key); //grabs the stored values using getItem method
    if (storedValue) {
      //if storeValue exists
      $(this).val(storedValue); //sets it to the corresponding input field
    }
  });

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?

  for (const id of timeBlockArray) {
    if (id < currentHour) {
      $(`#${id}`).addClass("past");
    } else if (id === currentHour) {
      $(`#${id}`).addClass("present");
    } else if (id > currentHour) {
      $(`#${id}`).addClass("future");
    }
  }

  // TODO: Add code to display the current date in the header of the page.

  let today = dayjs().format("dddd, MMM D, YYYY");

  currentDay.text(today);
});
