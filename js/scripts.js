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

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

$("form").submit(function(){
  var name = $('#contact-form').find('input[name="name"]').val();
  alert("Message sent! \nThanks for reaching out, "+name+".\nI will be in touch shortly.");
});