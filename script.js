//current date and time from moment library
$("#currentDay").text(moment().format('lll'));

//save button to grab from textarea
$(".saveBtn").on("click", function(){
  var timeKey = $(this).parent().attr("id");
  var textValue = $(this).siblings(".description").val();
  //save to localstorage
  localStorage.setItem(timeKey, textValue);
})

//get items for each hour from localstorage so that they persist when the page is refereshed
$("#7 .description").val(localStorage.getItem("7"))
$("#8 .description").val(localStorage.getItem("8"))
$("#9 .description").val(localStorage.getItem("9"))
$("#10 .description").val(localStorage.getItem("10"))
$("#11 .description").val(localStorage.getItem("11"))
$("#12 .description").val(localStorage.getItem("12"))
$("#13 .description").val(localStorage.getItem("13"))
$("#14 .description").val(localStorage.getItem("14"))
$("#15 .description").val(localStorage.getItem("15"))
$("#16 .description").val(localStorage.getItem("16"))
$("#17 .description").val(localStorage.getItem("17"))
$("#18 .description").val(localStorage.getItem("18"))


function cssUpdate(){
  //moment.js current hours
  var presentHour = moment().hours()

  $(".time-block").each(function(){
    var divTime = parseInt($(this).attr("id"))

    //past, present and future based on css classes
    if (divTime < presentHour){
      $(this).addClass("past");
    }
    else if (divTime === presentHour){
      $(this).removeClass("past")
      $(this).addClass("present");
    }
    else {
      $(this).removeClass("past")
      $(this).removeClass("present")
      $(this).addClass("future");
    }
  })
}

cssUpdate();