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
let saveButton8 = document.querySelector("#save8")
let button9 = document.querySelector("save9")
let button10 = document.getElementById("save10")
let button11 = document.getElementById("save11")
let button12 = document.getElementById("save12")
let button13 = document.getElementById("save13")
let button14 = document.getElementById("save14")
let button15 = document.getElementById("save15")
let button16 = document.getElementById("save16")
let textBox8 = document.getElementById("text8")
let textBox9 = document.getElementById("text9")
let textBox10 = document.getElementById("text10")
let textBox11 = document.getElementById("text11")
let textBox12 = document.getElementById("text12")
let textBox13 = document.getElementById("text13")
let textBox14 = document.getElementById("text14")
let textBox15 = document.getElementById("text15")
let textBox16 = document.getElementById("text16")

let hoursList = ["8AM", "9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM"]

//To test after hours, set currentHour value to your current time in 24Hour format (e.g. 7pm becomes 19)
let currentHour = 10
// moment().format('H');


//Generate time blocks with an ID matching the 24-hour time
for (i = 8; i < 17; i++) {
    $(`<div class="col-2 time-block space-between" id="time${i}"></div>`)
        .text(hoursList[i-8])
        .appendTo(hourRow);
    $(`<textarea class="col-8 text-input space-between" id="text${i}"></textarea>`)
        .attr("placeholder", "Enter note here")
        .appendTo(hourRow);
    $(`<button class="col-2 btn btn-secondary saveBtn space-between" id="save${i}"></button>`)
        .text("SAVE")
        .appendTo(hourRow);
}

//Adapt background colors based on time of day
for (i = 8; i < 17; i++){
   let displayHour = ("hour" + i)
   let displayHourparsed = Number(displayHour.replace ("hour", ''));
    if (displayHourparsed < currentHour){
      let pastHour = document.getElementById("time" + i)
      pastHour.style.backgroundColor = "red"}
    if (displayHourparsed == currentHour){
        let nowColor = document.getElementById("time" + i)
        nowColor.style.backgroundColor = "blue"}
    if (displayHourparsed > currentHour){
        let futureColor = document.getElementById("time" + i)
        futureColor.style.backgroundColor = "green"}     
}

//Fill in saved notes
for (i = 8; i < 17; i++){
   let text = localStorage.getItem(`saved-notes-${i}`)
    document.getElementById(`text${i}`).value = text;
}

//Save buttons
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



