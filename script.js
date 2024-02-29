$(document).ready(function () {
  
  $(".saveBtn").on("click", function () {

    $(".notification").addClass("show");
  
    setTimeout(function () {
    $(".notification").toggle("explode");
  }, 5000);
});

$(".time-block").each(function () {

  var now = dayjs().h();
  var x 
    if  (x < now) {
      $().addClass("past")
    } else if (x === now) {
      $().removeClass("past")
      $().addClass("present")
    } else {
      $().removeClass("past")
      $().removeClass("present")
      $().addClass("future")
    }
  });

  $("#currentDay").text(dayjs().format("dddd, MMMM, D"));

});
