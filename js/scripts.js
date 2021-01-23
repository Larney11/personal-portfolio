$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 100, function(){

        window.location.hash = hash;
      });
    }
  });
});

function toggleNavDropdown() {
  var myTopnav = document.getElementById("myTopnav");
  var topnavIcon = document.getElementById("topnavIcon");

  if (myTopnav.className === "topnav") {
    myTopnav.className += " responsive";
    topnavIcon.className = "fas fa-times";
  } else {
    myTopnav.className = "topnav";
    topnavIcon.className += "fa fa-bars";
  }
}

$("form").submit(function(){
  var name = $('#contact-form').find('input[name="name"]').val();
  alert("Message sent! \nThanks for reaching out, "+name+".\nI will be in touch shortly.");
});