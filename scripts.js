$(document).ready(function(){

  //title fade in
  $(".title, .subtitle").delay(800).fadeIn("slow");

  //nav bar for full size scree slides in
  $(".nav").delay(800).animate({
    "right": "0"
  });


  //smooth scroll
  $("a").click(function(e){
    var value = this.hash;
    //prevent anchor from going directly to the page
      e.preventDefault();
    $("body, html").animate({
        scrollTop: $(value).offset().top
    }, 1000);
  });


  //click menu button
  $(".navbtn").click(function(){
    $(".mobmenu").animate({width: "100%"});
      $(".slidemenu, #close").fadeIn();
  });
  //click close button
  $("#close").click(function(){
        $(".mobmenu").animate({width: "0%"});
        $(".slidemenu, #close").fadeOut();
  });
});
