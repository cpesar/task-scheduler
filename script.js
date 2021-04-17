$("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'));

//save button to grab from textarea
$(".saveBtn").on("click", function(){
  var timeKey = $(this).parent().attr("id")
  var textValue = $(this).siblings(".description").val()
  localStorage.setItem(timeKey, textValue);
})

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