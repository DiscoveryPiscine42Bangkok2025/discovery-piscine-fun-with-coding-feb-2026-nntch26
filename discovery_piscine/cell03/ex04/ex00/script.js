
const colors = ['blue', 'red', 'green'];

$("#btn").click(function () {
    const index = Math.floor(Math.random() * colors.length);

    $("body").css("background", colors[index]);
});