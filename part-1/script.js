// Do your work in this file.

// 3. Create a `div` element with a class name of "**view**" and append it to the document `body` using jQuery. You can use [append], [appendTo], or any other jQuery method.



$('body').append('<div class="view"></div>');

// 4. Create a `div` element with a class name of "**grass**" and append it to the previously created "view" div from step 3.


$('.view').append('<div class="grass"></div>');
// 5. Create a `div` element with a class name of "**sun**" and append it to the previously created "view" div from step 3.


$('.view').append('<div class="sun"></div>');

// 7. Create a `div` element with a class name of "**mountain**" and append it to the previously created "view" div from step 3.

$('.view').append('<div class="mountain"></div>');


// 8. Create a `div` element with a class name of "**mountain-top**" and append it to the previously created "mountain" div from step 7.

$('.mountain').append('<div class="mountain-top"></div>');

// 6. Write a [`while`] loop to create 5 divs. The div classes will be "**ray-1**", "**ray-2**", "**ray-3**", "**ray-4**", and "**ray-5**". Append each of these divs to the previously created "sun" div from step 5.

var t = 1;
while (t <= 5) {
    $("<div>").addClass("ray-" + t).appendTo(".sun")
}

// 9. Write a [`do...while`] loop to create 3 divs. The div classes will be "**mountain-cap-1**", "**mountain-cap-2**", and "**mountain-cap-3**". Append each of these divs to the previously created "mountain-top" div from step 8.

var c = 1;
do {
    $("<div>").addClass("mountain-cap-" + c).appendTo(".mountain-top");
} while (c <= 3);

