// Do your work in this file.


for (var i = 1; i <= 196; i++) {
    var boxDiv = document.createElement("div");
    boxDiv.className = "box";

    if ((i % 2) == 0) {
        $(boxDiv).addClass("type-1");
    } else {
        $(boxDiv).addClass("type-2");
    }

    $(boxDiv).appendTo($(document.body));
}


$(".box").click(function() {
    if ( $(this).hasClass("clicked")){
        $(this).removeClass("clicked");
    } else {
         $(this).addClass("clicked");
    }
});

$( "box" ).click({
  click: function() {
    $( this ).toggleClass( "clicked" );
  }, mouseenter: function() {
    $( this ).addClass( "clicked" );
  }, mouseleave: function() {
    $( this ).removeClass( "clicked" );
  }
});

