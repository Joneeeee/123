var r1 = $("#taskInput").val();

$("#taskAdd").on("click", function() {
  var r1 = $("#taskInput").val();

 if ($("#taskInput").val()=="") {
   return false;
 }

  $("#tasksList").append("<li>" + r1  + "<button class='delete'>&#10006</button></li>");

  $("#taskInput").val('');
  
});

$("#tasksList").on("click", function () {

   var rr = $(this);
  rr.css( "border", "1px solid green" ).fadeOut();
});

/* $(".delete").on("click", function () {

 
}); */

/* $(".delete").click(function () { 
 $(".delete").remove();
  
}); */



document.write("Ghbdtn");
