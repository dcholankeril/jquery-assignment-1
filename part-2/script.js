// Do your work in this file.


for (var i = 1; i <= 196; i++) {
    var rest = i % 2;
    switch(rest) {
        case 0:
            $("<div>").addClass("box-type-1").appendTo(document.body);
            break;
        case 1:
            $("<div>").addClass("box-type-2").appendTo(document.body);
            break;
    }
}

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


