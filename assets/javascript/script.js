// add the current date to the header
var todayDate = moment().format("dddd, MMM Do YYYY");
$("#currentDay").html(todayDate);

 $(document).ready(function() {
     // save button click
     $(".saveBtn").on("click", function() {
         // get values of description in jquery
         var text = $(this).siblings(".description").val();
         var time = $(this).parent().attr("id");

         //save text in local storage
         localStorage.setItem(time, text);
     })

     function trackTime() {
         // get current hour time
         var timeNow = moment().hour();

         // loop to highlight timeblocks
         $(".time-block").each(function() {
             var timeBlock = parseInt($(this).attr("id").split("hour")[1]);

             if (timeBlock < timeNow) {
                 $(this).removeClass("future");
                 $(this).removeClass("present");
                 $(this).addClass("past");
             }
             else if (timeBlock === timeNow) {
                $(this).removeClass("future");
                $(this).addClass("present");
                $(this).removeClass("past");
            }
            else {
                $(this).addClass("future");
                $(this).removeClass("present");
                $(this).removeClass("past");
            }
         })
     }

     // save items in localstorage
     $("#hour8 .description").val(localStorage.getItem("hour8"));
     $("#hour9 .description").val(localStorage.getItem("hour9"));
     $("#hour10 .description").val(localStorage.getItem("hour10"));
     $("#hour11 .description").val(localStorage.getItem("hour11"));
     $("#hour12 .description").val(localStorage.getItem("hour12"));
     $("#hour13 .description").val(localStorage.getItem("hour13"));
     $("#hour14 .description").val(localStorage.getItem("hour14"));
     $("#hour15 .description").val(localStorage.getItem("hour15"));
     $("#hour16 .description").val(localStorage.getItem("hour16"));
     $("#hour17 .description").val(localStorage.getItem("hour17"));
    
     
     trackTime();
 })