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
   let currentHour = moment().format('H');

   let hoursList = ["8AM", "9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM"]

//Generate time blocks with an ID matching the 24-hour time
for (i = 8; i < 17; i++) {
    $(`<div class="col-2 time-block time${i} space-between"></div>`)
        .text(hoursList[i-8])
        .appendTo(hourRow);
    $(`<textarea class="col-8 text-input space-between"></textarea>`)
        .attr("placeholder", "Enter note here")
        .appendTo(hourRow);
    $(`<button class="col-2 btn btn-secondary saveBtn space-between" id="save${i}"></button>`)
        .text("SAVE")
        .appendTo(hourRow);
}


for (i = 8; i < 17; i++){
   //Reduce the ID to a number so it can be compared
   let displayHour = ("hour" + i)
   let displayHourparsed = Number(displayHour.replace ("hour", ''));
    console.log("displayHourparsed is: " + displayHourparsed)
    console.log("currentHour is: " + currentHour)
    if (displayHourparsed < currentHour){
       console.log("in the past")}
       let pastHour = "hour" + displayHourparsed;
       console.log(pastHour)

       if (displayHourparsed == currentHour){
        console.log("NOW")}
       if (displayHourparsed > currentHour){
        console.log("in the future")}
 console.log("==============")
     }

    // if (displayHourparsed == currentHour) {
    //     console.log("NOW")}
  
    
