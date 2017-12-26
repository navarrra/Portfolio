$(document).ready(function(){

  //title fade in
  $(".title, .subtitle").delay(800).fadeIn("slow");

  //nav bar for full size scree slides in
  $(".nav").delay(800).animate({
    "right": "0"
  });
});
