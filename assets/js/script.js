//Declare variables
let hourRow = document.getElementById("row")
let hour8 = document.getElementById("time8")
let hour9 = document.getElementById("time9")
let hour10 = document.getElementById("time10")
let hour11 = document.getElementById("time11")
let hour12 = document.getElementById("time12")
let hour13 = document.getElementById("time13")
let hour14 = document.getElementById("time14")
let hour15 = document.getElementById("time15")
let hour16 = document.getElementById("time16")

let hoursList = ["8AM", "9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM"]

// To test after hours, trick the app into thinking it's 11:00am 
// let currentHour = 11
let currentHour = moment().format('H');

// Generate clock
setInterval(function(){ 
    let today = moment();
    $("#date-display").text(today.format("h:mm:ss A [on] MMMM Do, YYYY"));
}, 1000);

// Generate time blocks with an ID matching the 24-hour time
for (i = 8; i < 17; i++) {
    $(`<div class="col-2 time-block space-between" id="time${i}"></div>`)
        .text(hoursList[i-8])
        .appendTo(hourRow);
    $(`<textarea class="col-8 text-input space-between" id="text${i}"></textarea>`)
        .attr("placeholder", "Enter note here")
        .appendTo(hourRow);
    $(`<button class="col-2 btn btn-secondary saveBtn space-between" id="save${i}"></button>`)
        .html(`SAVE<br><i class="far fa-save"></i>`)
        .appendTo(hourRow);
}

// Loop through hours to decide background colors
for (i = 8; i < 17; i++){
    if (i < currentHour){
      let pastHour = document.getElementById("time" + i)
      pastHour.style.backgroundColor = "#E8B9B2"}
    if (i == currentHour){
        let nowColor = document.getElementById("time" + i)
        nowColor.style.backgroundColor = "#D1C7BB"}
    if (i > currentHour){
        let futureColor = document.getElementById("time" + i)
        futureColor.style.backgroundColor = "#A6BC7B"}     
}

// Fill in saved notes
for (i = 8; i < 17; i++){
   let text = localStorage.getItem(`saved-notes-${i}`)
    document.getElementById(`text${i}`).value = text;
}

// Save buttons waiting for clicks
$( "#save8" ).click(function() {
    localStorage.setItem("saved-notes-8", text8.value);
  });
$( "#save9" ).click(function() {
    localStorage.setItem("saved-notes-9", text9.value);
  });
$( "#save10" ).click(function() {
    localStorage.setItem("saved-notes-10", text10.value);
  });
$( "#save11" ).click(function() {
    localStorage.setItem("saved-notes-11", text11.value);
  });
$( "#save12" ).click(function() {
    localStorage.setItem("saved-notes-12", text12.value);
  });
$( "#save13" ).click(function() {
    localStorage.setItem("saved-notes-13", text13.value);
  });
$( "#save14" ).click(function() {
    localStorage.setItem("saved-notes-14", text14.value);
  });
$( "#save15" ).click(function() {
    localStorage.setItem("saved-notes-15", text15.value);
  });
$( "#save16" ).click(function() {
    localStorage.setItem("saved-notes-16", text16.value);
  });

// Clear button
$("#clear-button").click(function() {
     let clearDay = confirm ("Are you sure you want to delete all data and start fresh? \n\nREMINDER: If you clear your browser history, you will clear your notes unintentionally.")
        if (clearDay = true){
            localStorage.clear();
            location.reload(); 
        }
})
