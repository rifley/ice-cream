$(document).ready(function() {
  $("button").click(function() {
    var favFlavs = ["vanilla", "strawberry", "all-the-berries", "daquiri ice"];
    favFlavs.forEach(function(favFlav) {
      $("#result").append("<li>"+favFlav+"</li>");
    });
  });
});
