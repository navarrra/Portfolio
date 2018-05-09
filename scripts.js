$(document).ready(function(){

  //title fade in
  $(".title, .subtitle").delay(800).fadeIn("slow");

  //nav bar for full size scree slides in
  $(".nav").delay(800).animate({
    "right": "0"
  });


  //smooth scroll
  $(".mentab, .navitem").click(function(e){
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
  $("#close, a").click(function(){
        $(".mobmenu").animate({width: "0%"});
        $(".slidemenu, #close").fadeOut();
  });


  //clickbox button for overlay
  $(".project1").click(function(){
    $(".boxoverlay, #close").fadeIn();
   });
  $("button#close").click(function(){
    console.log("hello")
    $(".boxoverlay, #close").fadeOut();
  });


});
