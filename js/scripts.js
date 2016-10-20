$(document).ready(function(){
  var height = parseInt(prompt("How tall are you in inches?"));
debugger;
  if (height <= 45) {
    $(".short p").addClass("highlight");
  } else if (height > 45 && height < 70) {
    $(".average p").addClass("highlight");
  } else {
    $(".tall p").addClass("highlight");
  };
});
