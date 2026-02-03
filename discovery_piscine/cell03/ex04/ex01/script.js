
const $balloon = $("#balloon");
        
const colors = [ 'red', 'green','blue',]
let index = 0
let maxsize = 420
let size = 200;

$balloon.click(function () {

    size += 10
    console.log("size", size)

    if (size > maxsize){
        size = 200
    }

    $balloon.css({
        width: size + 'px',
        height: size + 'px'
    });

    index = (index + 1) % colors.length;
    $balloon.css("background", colors[index]);

})


$balloon.mouseleave(function () {

    size -= 5
    console.log("size", size)

    if (size < 200){
        size = 200
    }

    $balloon.css({
        width: size + 'px',
        height: size + 'px'
    });

    index = (index - 1 + colors.length) % colors.length;
    $balloon.css("background", colors[index]);
})
