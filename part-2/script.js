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

//for (var i = 1; i <= 196; i++) {

// $(".box").click(function() {
//     if ( $(this).hasClass("clicked")){
//         $(this).removeClass("clicked");
//     } else {
//          $(this).addClass("clicked");
//     }
// });

$('.box').click(function () {
    $(this).toggleClass('clicked');
});